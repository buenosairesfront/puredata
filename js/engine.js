/* =====================================================================
   Mini Pd: renderer + control interpreter + Web Audio signal graph
   ===================================================================== */
const NS='http://www.w3.org/2000/svg';
const CW=7.2, BH=18, IOW=7, IOH=2;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
function el(tag,attrs,parent){const e=document.createElementNS(NS,tag);if(attrs)for(const k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e;}
/* ancho aproximado de texto: CJK ocupa casi el doble que una letra latina */
const tw=s=>[...String(s)].reduce((a,c)=>a+(c.charCodeAt(0)>=0x2E80?1.75:1),0);
const clamp=(v,a,b)=>Math.max(Math.min(a,b),Math.min(Math.max(a,b),v));
const isBang=m=>!m||m.length===0||m[0]==='bang';
function num0(m){if(!m)return null;if(typeof m[0]==='number')return m[0];if((m[0]==='float'||m[0]==='list')&&typeof m[1]==='number')return m[1];return null;}
function fmt(v,w){if(typeof v!=='number')return String(v);let s=Number.isInteger(v)?String(v):String(parseFloat(v.toPrecision(Math.abs(v)>=100?4:3)));if(w&&s.length>w)s=s.slice(0,w-1)+'>';return s;}
function pfmt(m){return m.map(a=>typeof a==='number'?String(parseFloat(a.toPrecision(6))):a).join(' ');}

/* ---------- Audio core ---------- */
const AU={ctx:null,input:null,mg:null,an:null,active:null,vol:.8};
function ensureAudio(){
  if(AU.ctx){if(AU.ctx.state==='suspended')AU.ctx.resume();return AU.ctx;}
  const ctx=new (window.AudioContext||window.webkitAudioContext)();
  const hp=ctx.createBiquadFilter();hp.type='highpass';hp.frequency.value=18;hp.Q.value=.5;
  const comp=ctx.createDynamicsCompressor();comp.threshold.value=-10;comp.knee.value=6;comp.ratio.value=12;comp.attack.value=.003;comp.release.value=.15;
  const mg=ctx.createGain();mg.gain.value=AU.vol;
  const an=ctx.createAnalyser();an.fftSize=2048;an.smoothingTimeConstant=.7;
  hp.connect(comp);comp.connect(mg);mg.connect(an);an.connect(ctx.destination);
  Object.assign(AU,{ctx,input:hp,mg,an,buf:new Float32Array(2048),fbuf:new Uint8Array(1024)});
  return ctx;
}
function connectTo(src,target){if(!src||!target)return;if(Array.isArray(target))target.forEach(t=>src.connect(t));else src.connect(target);}

/* ---------- io spec ---------- */
function ioSpec(n){
  const S=1,C=0;
  if(['msg','num','bng','tgl','hsl'].includes(n.k))return{ins:[C],outs:[C]};
  if(n.k==='arr'||n.k==='txt')return{ins:[],outs:[]};
  const [name,...args]=n.t.split(/\s+/);
  switch(name){
    case 'print':return{ins:[C],outs:[]};
    case 'mtof':return{ins:[C],outs:[C]};
    case '+':case '-':case '*':case '/':case 'mod':case 'f':case 'float':case 'random':case 'metro':return{ins:[C,C],outs:[C]};
    case 'moses':return{ins:[C,C],outs:[C,C]};
    case 't':case 'trigger':return{ins:[C],outs:args.map(()=>C)};
    case 'sel':case 'select':return{ins:args.length<=1?[C,C]:[C],outs:[...args.map(()=>C),C]};
    case 'tabread':return{ins:[C],outs:[C]};
    case 'osc~':case 'phasor~':return{ins:[S,C],outs:[S]};
    case 'noise~':return{ins:[C],outs:[S]};
    case '*~':case '+~':return{ins:[S,args.length?C:S],outs:[S]};
    case 'dac~':return{ins:[S,S],outs:[]};
    case 'lop~':case 'hip~':return{ins:[S,C],outs:[S]};
    case 'vcf~':return{ins:[S,S,C],outs:[S,S]};
    case 'line~':return{ins:[C,C],outs:[S]};
    case 'vline~':return{ins:[C,C,C],outs:[S]};
    case 'delwrite~':return{ins:[S],outs:[]};
    case 'delread~':return{ins:[C],outs:[S]};
    case 'tabosc4~':return{ins:[S,C],outs:[S]};
  }
  return{ins:[C],outs:[C]};
}
function boxSize(n){
  switch(n.k){
    case 'obj':return[Math.max(Math.round(n.t.length*CW+8),28),BH];
    case 'msg':return[Math.round(n.t.length*CW+10),BH];
    case 'num':return[Math.round((n.w||5)*CW+8),BH];
    case 'bng':case 'tgl':return[19,19];
    case 'hsl':return[n.w||128,15];
    case 'arr':return[n.w||200,n.h||120];
    case 'txt':return[Math.round(tw(n.t)*6.9),14];
  }
}
const ioX=(n,i,c)=>c>1?n.x+(n.sz[0]-IOW)*i/(c-1):n.x;

/* ---------- message box parsing ---------- */
function parseMsg(text,args){
  const toks=text.replace(/([,;])/g,' $1 ').trim().split(/\s+/);
  let target=null,cur=[],out=[],expect=false;
  const flush=()=>{if(cur.length)out.push({target,atoms:cur});cur=[];};
  for(const tk of toks){
    if(tk===','){flush();continue}
    if(tk===';'){flush();expect=true;continue}
    if(expect){target=tk;expect=false;continue}
    const v=tk.replace(/\$(\d)/g,(_,d)=>{const a=args[d-1];return a===undefined?0:a;});
    cur.push(v!==''&&!isNaN(+v)?+v:v);
  }
  flush();return out;
}

/* ---------- ramp model (line~/vline~) ---------- */
class Ramp{
  constructor(v){this.pts=[[0,v||0]];this.v=v||0;}
  at(t){const P=this.pts;if(t<=P[0][0])return P[0][1];for(let i=1;i<P.length;i++){if(t<=P[i][0]){const[ta,va]=P[i-1],[tb,vb]=P[i];return tb===ta?vb:va+(vb-va)*(t-ta)/(tb-ta);}}return P[P.length-1][1];}
  go(param,target,dur,delay){
    this.v=target;if(!param)return;
    const now=AU.ctx.currentTime,t0=now+(delay||0)/1000,t1=t0+(dur||0)/1000,v0=this.at(t0),vn=this.at(now);
    this.pts=this.pts.filter(p=>p[0]<t0&&p[0]>now-2);if(!this.pts.length)this.pts=[[now,vn]];
    this.pts.push([t0,v0],[t1,target]);
    param.cancelScheduledValues(t0);param.linearRampToValueAtTime(v0,t0);
    if(dur>0)param.linearRampToValueAtTime(target,t1);else param.setValueAtTime(target,t0);
  }
}

/* ---------- runtimes ---------- */
function makeRT(n,p){
  const emit=(o,m)=>p.out(n.id,o,m);
  const flash=()=>p.later(()=>p.flash(n));
  const base={n,recv(){},};
  if(n.k==='txt'||n.k==='arr')return base;
  if(n.k==='msg')return{...base,
    recv(i,m){flash();const args=isBang(m)?[]:(m[0]==='list'?m.slice(1):m);
      for(const it of parseMsg(n.t,args)){if(it.target==null)emit(0,it.atoms);else p.sendTo(it.target,it.atoms);}},
    click(){p.inject(()=>this.recv(0,['bang']),'ui');}};
  if(n.k==='num')return{...base,v:n.v||0,
    set(v){this.v=v;p.later(()=>p.numShow(n,v));},
    recv(i,m){if(isBang(m)){flash();emit(0,[this.v]);return}const f=num0(m);if(f!=null){this.set(f);emit(0,[f]);}}};
  if(n.k==='bng')return{...base,recv(){p.later(()=>p.flash(n));emit(0,['bang'])},click(){p.inject(()=>this.recv(0,['bang']),'ui')}};
  if(n.k==='tgl')return{...base,v:0,
    recv(i,m){let v;if(isBang(m))v=this.v?0:1;else{v=num0(m);if(v==null)return}this.v=v;p.later(()=>p.tglShow(n,v));emit(0,[v]);},
    click(){p.inject(()=>this.recv(0,['bang']),'ui')}};
  if(n.k==='hsl')return{...base,v:n.v??n.min,
    recv(i,m){const f=num0(m);if(f==null){if(isBang(m))emit(0,[this.v]);return}this.v=clamp(f,n.min,n.max);p.hslShow(n,this.v);emit(0,[this.v]);}};

  const [name,...a]=n.t.split(/\s+/);const args=a.map(x=>isNaN(+x)?x:+x);
  const arith={'+':(x,y)=>x+y,'-':(x,y)=>x-y,'*':(x,y)=>x*y,'/':(x,y)=>y?x/y:0,'mod':(x,y)=>{y=Math.abs(Math.trunc(y))||1;return((Math.trunc(x)%y)+y)%y}};
  if(arith[name])return{...base,l:0,r:args[0]||0,
    recv(i,m){const f=num0(m);if(i===1){if(f!=null)this.r=f;return}flash();if(f!=null)this.l=f;else if(!isBang(m))return;emit(0,[arith[name](this.l,this.r)]);}};
  const S={
    'print':{recv(i,m){const s=(args[0]||'print')+': '+pfmt(isBang(m)?['bang']:m);p.later(()=>p.log(s));flash();}},
    'mtof':{recv(i,m){const f=num0(m);if(f==null)return;flash();emit(0,[f<=-1500?0:440*Math.pow(2,(f-69)/12)]);}},
    'f':{v:args[0]||0,recv(i,m){const f=num0(m);if(i===1){if(f!=null)this.v=f;return}flash();if(f!=null)this.v=f;emit(0,[this.v]);}},
    'random':{nn:args[0]||1,recv(i,m){if(i===1){const f=num0(m);if(f!=null)this.nn=f;return}flash();emit(0,[Math.floor(Math.random()*Math.max(1,this.nn))]);}},
    'moses':{th:args[0]||0,recv(i,m){const f=num0(m);if(f==null)return;if(i===1){this.th=f;return}flash();emit(f<this.th?0:1,[f]);}},
    'tabread':{recv(i,m){const f=num0(m);if(f==null)return;flash();const A=p.arrays[args[0]];if(!A)return;const ix=clamp(Math.floor(f),0,A.data.length-1);p.later(()=>p.arrHi(args[0],ix));emit(0,[A.data[ix]]);}},
    'metro':{per:args[0]||100,to:null,
      recv(i,m){const f=num0(m);if(i===1){if(f!=null)this.per=Math.max(1,f);return}
        if(m[0]==='stop'||f===0){this.stop();return}flash();this.stop();emit(0,['bang']);this.sched();},
      sched(){this.to=setTimeout(()=>{p.inject(()=>{p.flash(n);emit(0,['bang'])},'clock');this.sched();},this.per);},
      stop(){clearTimeout(this.to);this.to=null;}},
    't':{recv(i,m){flash();for(let k=args.length-1;k>=0;k--){const ty=String(args[k])[0];
        if(ty==='b')emit(k,['bang']);else if(ty==='f')emit(k,[num0(m)??0]);else emit(k,m);}}},
    'sel':{recv(i,m){const f=num0(m);if(i===1){if(f!=null)args[0]=f;return}flash();const ix=args.indexOf(f);if(ix>=0)emit(ix,['bang']);else emit(args.length,m);}},
  };
  S.float=S.f;S.trigger=S.t;S.select=S.sel;
  if(S[name])return{...base,...S[name]};

  /* --- signal objects --- */
  const sig={...base,A:[],live:false,
    track(x){this.A.push(x);return x},
    teardown(){this.A.forEach(x=>{try{x.stop&&x.stop()}catch(e){}try{x.disconnect()}catch(e){}});this.A=[];this.live=false;},
    hs(i){return !!p.sigIn[n.id+':'+i]},
    smooth(param,v,tc){if(param)param.setTargetAtTime(v,AU.ctx.currentTime,tc||.01);}};
  const def={
    'osc~':{freq:args[0]||0,
      build(c){this.o=this.track(c.createOscillator());this.o.frequency.value=this.hs(0)?0:this.freq;this.o.start();},
      input(i){return i===0?this.o.frequency:null},output(){return this.o},
      recv(i,m){const f=num0(m);if(i===0&&f!=null){this.freq=f;if(this.live&&!this.hs(0))this.smooth(this.o.frequency,f,.004);}}},
    'phasor~':{freq:args[0]||0,
      build(c){this.o=this.track(c.createOscillator());this.o.type='sawtooth';this.o.frequency.value=this.hs(0)?0:this.freq;
        const g=this.track(c.createGain());g.gain.value=.5;const k=this.track(c.createConstantSource());k.offset.value=.5;this.out=this.track(c.createGain());
        this.o.connect(g);g.connect(this.out);k.connect(this.out);this.o.start();k.start();},
      input(i){return i===0?this.o.frequency:null},output(){return this.out},
      recv(i,m){const f=num0(m);if(i===0&&f!=null){this.freq=f;if(this.live&&!this.hs(0))this.smooth(this.o.frequency,f,.004);}}},
    'noise~':{build(c){const b=c.createBuffer(1,c.sampleRate*2,c.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
        this.s=this.track(c.createBufferSource());this.s.buffer=b;this.s.loop=true;this.s.start();},output(){return this.s}},
    '*~':{k:args.length?args[0]:0,
      build(c){this.g=this.track(c.createGain());this.g.gain.value=args.length?this.k:0;},
      input(i){return i===0?this.g:(args.length?null:this.g.gain)},output(){return this.g},
      recv(i,m){const f=num0(m);if(i===1&&f!=null&&args.length){this.k=f;if(this.live)this.smooth(this.g.gain,f,.015);}}},
    '+~':{k:args[0]||0,
      build(c){this.g=this.track(c.createGain());this.cs=this.track(c.createConstantSource());this.cs.offset.value=this.k;this.cs.connect(this.g);this.cs.start();},
      input(i){return this.g},output(){return this.g},
      recv(i,m){const f=num0(m);if(i===1&&f!=null){this.k=f;if(this.live)this.smooth(this.cs.offset,f,.01);}}},
    'dac~':{build(c){this.l=this.track(c.createGain());this.r=this.track(c.createGain());const mg=this.track(c.createChannelMerger(2));this.l.connect(mg,0,0);this.r.connect(mg,0,1);mg.connect(p.bus);},
      input(i){return i===0?this.l:this.r}},
    'lop~':{f:args[0]||1000,ty:'lowpass'},
    'hip~':{f:args[0]||10,ty:'highpass'},
    'vcf~':{q:args[0]||1,
      build(c){this.in=this.track(c.createGain());this.bp=this.track(c.createBiquadFilter());this.bp.type='bandpass';this.lp=this.track(c.createBiquadFilter());this.lp.type='lowpass';
        this.bp.frequency.value=0;this.lp.frequency.value=0;this.bp.Q.value=this.q;this.lp.Q.value=this.q;this.in.connect(this.bp);this.in.connect(this.lp);},
      input(i){return i===0?this.in:i===1?[this.bp.frequency,this.lp.frequency]:null},output(o){return o===0?this.bp:this.lp},
      recv(i,m){const f=num0(m);if(i===2&&f!=null){this.q=f;if(this.live){this.smooth(this.bp.Q,f,.02);this.smooth(this.lp.Q,f,.02);}}}},
    'line~':{nt:0,
      build(c){this.cs=this.track(c.createConstantSource());this.ramp=new Ramp(0);this.cs.offset.setValueAtTime(0,c.currentTime);this.ramp.pts=[[c.currentTime,0]];this.cs.start();},
      output(){return this.cs},
      recv(i,m){const f=num0(m);if(i===1){if(f!=null)this.nt=f;return}if(f==null)return;flash();
        const tm=typeof m[1]==='number'?m[1]:this.nt;this.nt=0;if(this.live)this.ramp.go(this.cs.offset,f,tm,0);}},
    'vline~':{nt:0,nd:0,
      build(c){this.cs=this.track(c.createConstantSource());this.ramp=new Ramp(0);this.cs.offset.setValueAtTime(0,c.currentTime);this.ramp.pts=[[c.currentTime,0]];this.cs.start();},
      output(){return this.cs},
      recv(i,m){const f=num0(m);if(i===1){if(f!=null)this.nt=f;return}if(i===2){if(f!=null)this.nd=f;return}if(f==null)return;flash();
        const tm=typeof m[1]==='number'?m[1]:this.nt,dl=typeof m[2]==='number'?m[2]:this.nd;this.nt=this.nd=0;if(this.live)this.ramp.go(this.cs.offset,f,tm,dl);
        p.envMark&&p.envMark();}},
    'delwrite~':{build(c){this.bus=this.track(c.createGain());p.delBus[args[0]]=this.bus;},input(){return this.bus}},
    'delread~':{ms:args[1]||0,
      build(c){this.d=this.track(c.createDelay(5));this.d.delayTime.value=this.ms/1000;},
      link(){const b=p.delBus[args[0]];if(b)b.connect(this.d);},output(){return this.d},
      recv(i,m){const f=num0(m);if(f==null)return;this.ms=f;if(this.live)this.smooth(this.d.delayTime,clamp(f,1,4900)/1000,.06);}},
    'tabosc4~':{freq:0,
      build(c){this.o=this.track(c.createOscillator());this.o.frequency.value=this.hs(0)?0:this.freq;this.upd();this.o.start();
        if(!this.lis){this.lis=1;p.onArr(args[0],()=>{clearTimeout(this.tt);this.tt=setTimeout(()=>{if(this.live)this.upd()},25)});}},
      upd(){const A=p.arrays[args[0]];if(A&&this.o)this.o.setPeriodicWave(waveFrom(A.data));},
      input(i){return i===0?this.o.frequency:null},output(){return this.o},
      recv(i,m){const f=num0(m);if(i===0&&f!=null){this.freq=f;if(this.live)this.smooth(this.o.frequency,f,.004);}}},
  };
  if(name==='lop~'||name==='hip~'){Object.assign(def[name],{
    build(c){this.b=this.track(c.createBiquadFilter());this.b.type=this.ty;this.b.Q.value=.0001;this.b.frequency.value=this.f;},
    input(i){return i===0?this.b:null},output(){return this.b},
    recv(i,m){const f=num0(m);if(i===1&&f!=null){this.f=f;if(this.live)this.smooth(this.b.frequency,f,.01);}}});}
  if(def[name])return Object.assign(sig,def[name]);
  return base;
}
function waveFrom(data){
  const s=data.length>=67?data.subarray(1,65):data,N=s.length,H=Math.min(32,N>>1);
  const re=new Float32Array(H+1),im=new Float32Array(H+1);
  for(let k=1;k<=H;k++){let a=0,b=0;for(let i=0;i<N;i++){const ph=2*Math.PI*k*i/N;a+=s[i]*Math.cos(ph);b+=s[i]*Math.sin(ph);}re[k]=2*a/N;im[k]=2*b/N;}
  return AU.ctx.createPeriodicWave(re,im,{disableNormalization:true});
}

/* ---------- Patch ---------- */
const PATCHES=[];
class Patch{
  constructor(L,lab){
    this.L=L;this.lab=lab;this.nodes=L.patch.nodes;this.byId={};
    this.nodes.forEach((n,i)=>{if(n.lab)n.lab=tl(n.lab);if(n.k==='txt')n.t=tl(n.t);n.i=i;this.byId[n.id]=n;n.sz=boxSize(n);n.io=ioSpec(n);});
    this.edges=L.patch.edges.map(([f,fo,t,ti])=>({f,fo,t,ti}));
    this.edges.forEach(e=>{e.sig=!!this.byId[e.f].io.outs[e.fo];});
    this.outMap={};this.edges.forEach(e=>{(this.outMap[e.f+':'+e.fo]??=[]).push(e)});
    this.arrays={};this.arrL={};this.delBus={};this.sigIn={};this.dots=[];this.on=false;
    this.nodes.filter(n=>n.k==='arr').forEach(n=>{this.arrays[n.name]={n,data:Float32Array.from(n.data)};});
    this.rt={};this.nodes.forEach(n=>this.rt[n.id]=makeRT(n,this));
    this.hasDac=this.nodes.some(n=>n.t==='dac~');
    this.mode=null;this.arrive=0;this.cursor=0;
    this.mode0='wave';this.envHist=[];
    this.render();PATCHES.push(this);
  }
  /* --- timing / animation --- */
  inject(fn,origin){
    const now=performance.now();this.mode=origin;this.cursor=now;this.arrive=now;
    const T={ui:[150,150],drag:[90,0],clock:[85,0],silent:[0,0]}[origin]||[100,0];
    this.travel=reduced&&origin!=='ui'?0:T[0];this.step=T[1];
    try{fn()}finally{this.mode=null}
  }
  out(id,o,msg){
    const es=this.outMap[id+':'+o];if(!es)return;
    for(const e of es){if(e.sig)continue;
      const start=Math.max(this.cursor,this.arrive),end=start+this.travel;this.cursor=start+this.step;
      if(this.travel>0)this.spawnDot(e,start,end);
      const prev=this.arrive;this.arrive=end;
      try{this.rt[e.t].recv(e.ti,msg)}finally{this.arrive=prev}
    }
  }
  later(fn){const d=this.arrive-performance.now();if(this.mode==null||this.mode==='silent'||d<8)fn();else setTimeout(fn,d);}
  spawnDot(e,t0,t1){
    if(this.dots.length>260)return;
    const c=el('circle',{r:3.6,class:'dot',cx:e.x1,cy:e.y1,opacity:0},this.gD);
    this.dots.push({e,c,t0,t1});
  }
  tick(now){
    for(let i=this.dots.length-1;i>=0;i--){const d=this.dots[i];
      if(now<d.t0)continue;
      if(now>=d.t1){d.c.remove();d.e.line.classList.remove('live');this.dots.splice(i,1);continue}
      const k=(now-d.t0)/(d.t1-d.t0);d.c.setAttribute('cx',d.e.x1+(d.e.x2-d.e.x1)*k);d.c.setAttribute('cy',d.e.y1+(d.e.y2-d.e.y1)*k);d.c.setAttribute('opacity',1);d.e.line.classList.add('live');}
  }
  /* --- visuals --- */
  flash(n){if(!n.g)return;n.g.classList.add('hit');clearTimeout(n._ft);n._ft=setTimeout(()=>n.g.classList.remove('hit'),reduced?60:150);}
  numShow(n,v){if(n.tx)n.tx.textContent=fmt(v,n.w||5);this.flash(n);}
  tglShow(n,v){n.g.classList.toggle('v',!!v);}
  hslShow(n,v){const pos=n.log?Math.log(v/n.min)/Math.log(n.max/n.min):(v-n.min)/(n.max-n.min);const x=clamp(pos,0,1)*(n.sz[0]-3)+1.5;
    n.knob.setAttribute('x1',x);n.knob.setAttribute('x2',x);n.fill.setAttribute('width',x);if(n.lt)n.lt.textContent=(n.lab?n.lab+'  ':'')+fmt(v);}
  log(s){if(!this.con)return;const d=document.createElement('div');d.className='l';d.textContent=s;this.con.appendChild(d);
    while(this.con.children.length>60)this.con.children[1].remove();this.con.scrollTop=this.con.scrollHeight;}
  arrHi(name,ix){const A=this.arrays[name];if(!A||!A.n.bars)return;const b=A.n.bars[ix];if(!b)return;
    b[0].classList.add('hi');b[1].classList.add('hi');setTimeout(()=>{b[0].classList.remove('hi');b[1].classList.remove('hi')},180);}
  onArr(name,fn){(this.arrL[name]??=[]).push(fn);}
  arrChanged(name){(this.arrL[name]||[]).forEach(f=>f());}
  sendTo(name,atoms){
    const A=this.arrays[name];if(!A)return;const sel=atoms[0],nums=atoms.slice(1).map(Number);
    if(sel==='sinesum'){const N=nums[0]|0,amps=nums.slice(1),d=new Float32Array(N+3);
      for(let i=0;i<N+3;i++){let s=0;amps.forEach((a,k)=>{s+=a*Math.sin(2*Math.PI*(k+1)*(i-1)/N)});d[i]=s;}A.data=d;}
    else if(sel==='const'){A.data.fill(nums[0]||0);}
    else if(sel==='normalize'){const mx=Math.max(...A.data.map(Math.abs))||1,t=nums[0]||1;A.data=A.data.map(v=>v/mx*t);}
    this.later(()=>this.drawArr(A.n));this.arrChanged(name);
  }
  /* --- render --- */
  render(){
    const svg=el('svg',{class:'patch',role:'img','aria-label':ui('patchAria')+this.L.title});
    this.svg=svg;
    let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
    this.nodes.forEach(n=>{const top=(n.lab||n.k==='arr')?n.y-14:n.y;x0=Math.min(x0,n.x);y0=Math.min(y0,top);x1=Math.max(x1,n.x+n.sz[0]+(n.k==='msg'?4:0)+(n.lab?Math.max(0,(tw(n.lab)+6)*6.4-n.sz[0]):0));y1=Math.max(y1,n.y+n.sz[1]);});
    const pad=14,W=x1-x0+pad*2,H=y1-y0+pad*2;
    svg.setAttribute('viewBox',`${x0-pad} ${y0-pad} ${W} ${H}`);
    svg.style.maxWidth=Math.round(W*1.4)+'px';svg.style.minWidth=Math.round(W*.8)+'px';
    this.gE=el('g',null,svg);this.gN=el('g',null,svg);this.gD=el('g',null,svg);
    this.edges.forEach(e=>{const a=this.byId[e.f],b=this.byId[e.t];
      e.x1=ioX(a,e.fo,a.io.outs.length)+IOW/2;e.y1=a.y+a.sz[1];e.x2=ioX(b,e.ti,b.io.ins.length)+IOW/2;e.y2=b.y;
      e.line=el('line',{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,class:'cord '+(e.sig?'s':'c')},this.gE);
      if(e.sig)this.sigIn[e.t+':'+e.ti]=true;});
    this.nodes.forEach(n=>this.renderNode(n));
    return svg;
  }
  renderNode(n){
    const[w,h]=n.sz,isSig=n.k==='obj'&&/~/.test(n.t.split(' ')[0]);
    const g=el('g',{class:'box k-'+n.k+(isSig?' sig':''),transform:`translate(${n.x},${n.y})`},this.gN);n.g=g;
    const T=(s,x,y,c)=>{const t=el('text',{x,y,class:c||'t'},g);t.textContent=s;return t;};
    const rt=this.rt[n.id];
    switch(n.k){
      case 'obj':el('rect',{class:'frame',width:w,height:h},g);T(n.t,4,13);break;
      case 'msg':el('path',{class:'frame',d:`M0 0H${w+4}L${w} 4V${h-4}L${w+4} ${h}H0Z`},g);T(n.t,4,13);
        g.setAttribute('tabindex',0);g.setAttribute('role','button');g.setAttribute('aria-label',ui('msgAria')+n.t);
        const fire=()=>{g.classList.add('press');setTimeout(()=>g.classList.remove('press'),120);this.userAct(()=>rt.click());};
        g.addEventListener('pointerdown',e=>{e.preventDefault();fire()});g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();fire()}});break;
      case 'num':el('path',{class:'frame',d:`M0 0H${w-5}L${w} 5V${h}H0Z`},g);n.tx=T(fmt(n.v||0,n.w||5),4,13);this.dragNum(n);break;
      case 'bng':el('rect',{class:'frame',width:w,height:h},g);el('circle',{class:'bngc',cx:w/2,cy:h/2,r:w/2-2.5},g);
        g.setAttribute('tabindex',0);g.setAttribute('role','button');g.setAttribute('aria-label','bang');
        g.addEventListener('pointerdown',e=>{e.preventDefault();this.userAct(()=>rt.click())});g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();this.userAct(()=>rt.click())}});break;
      case 'tgl':el('rect',{class:'frame',width:w,height:h},g);el('path',{class:'tglx',d:`M3 3L${w-3} ${h-3}M${w-3} 3L3 ${h-3}`},g);
        g.setAttribute('tabindex',0);g.setAttribute('role','switch');g.setAttribute('aria-label','toggle');
        g.addEventListener('pointerdown',e=>{e.preventDefault();this.userAct(()=>rt.click())});g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();this.userAct(()=>rt.click())}});break;
      case 'hsl':el('rect',{class:'frame',width:w,height:h},g);n.fill=el('rect',{class:'hfill',x:0,y:0,width:0,height:h},g);n.knob=el('line',{class:'hknob',x1:0,x2:0,y1:0,y2:h},g);
        n.lt=T('',0,-5,'lab');this.hslShow(n,rt.v);this.dragHsl(n);break;
      case 'arr':el('rect',{class:'frame',width:w,height:h},g);n.plot=el('g',null,g);T(n.name,0,-5,'lab');this.drawArr(n);this.dragArr(n);break;
      case 'txt':T(n.t,0,11);break;
    }
    if(n.lab&&n.k!=='hsl')T(n.lab,0,-5,'lab');
    n.io.ins.forEach((s,i)=>el('rect',{class:'io'+(s?' s':''),x:ioX(n,i,n.io.ins.length)-n.x,y:0,width:IOW,height:IOH+1},g));
    n.io.outs.forEach((s,i)=>el('rect',{class:'io'+(s?' s':''),x:ioX(n,i,n.io.outs.length)-n.x,y:h-IOH-1,width:IOW,height:IOH+1},g));
  }
  pt(e){const p=this.svg.createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform(this.svg.getScreenCTM().inverse());}
  userAct(fn){if(this.hasDac&&!this.on)this.activate();fn();}
  dragNum(n){const g=n.g,rt=this.rt[n.id];let sy=0,sv=0,act=false;
    g.addEventListener('pointerdown',e=>{e.preventDefault();g.setPointerCapture(e.pointerId);sy=e.clientY;sv=rt.v;act=true;if(this.hasDac&&!this.on)this.activate();});
    g.addEventListener('pointermove',e=>{if(!act)return;const st=n.step||1,dy=sy-e.clientY;let v=sv+Math.round(dy/3)*st;
      if(n.min!=null)v=clamp(v,n.min,n.max);v=Math.round(v/st)*st;v=parseFloat(v.toFixed(4));if(v!==rt.v)this.inject(()=>rt.recv(0,[v]),'drag');});
    const up=()=>{act=false};g.addEventListener('pointerup',up);g.addEventListener('pointercancel',up);}
  dragHsl(n){const g=n.g,rt=this.rt[n.id];let act=false;
    const set=e=>{const p=this.pt(e),pos=clamp((p.x-n.x)/n.sz[0],0,1);let v=n.log?n.min*Math.pow(n.max/n.min,pos):n.min+pos*(n.max-n.min);
      v=parseFloat(v.toPrecision(4));if(n.int)v=Math.round(v);this.inject(()=>rt.recv(0,[v]),'drag');};
    g.addEventListener('pointerdown',e=>{e.preventDefault();g.setPointerCapture(e.pointerId);act=true;if(this.hasDac&&!this.on)this.activate();set(e);});
    g.addEventListener('pointermove',e=>{if(act)set(e)});const up=()=>{act=false};g.addEventListener('pointerup',up);g.addEventListener('pointercancel',up);}
  drawArr(n){const A=this.arrays[n.name],d=A.data,N=d.length,[w,h]=n.sz,g=n.plot;g.innerHTML='';
    const ym=v=>clamp((v-n.top)/(n.bot-n.top)*h,0,h);
    if(n.style==='points'){n.bars=[];for(let i=0;i<N;i++){const xa=i*w/N,bw=w/N-2,y=ym(d[i]);
        const b=el('rect',{class:'abar',x:xa+1,y,width:bw,height:h-y},g),t=el('rect',{class:'atop',x:xa+1,y:Math.max(0,y-1),width:bw,height:3},g);n.bars.push([b,t]);}}
    else{el('line',{class:'azero',x1:0,x2:w,y1:ym(0),y2:ym(0)},g);let s='';for(let i=0;i<N;i++)s+=(i?'L':'M')+(i*w/(N-1)).toFixed(1)+' '+ym(d[i]).toFixed(1);el('path',{class:'aline',d:s},g);}}
  dragArr(n){const g=n.g;let act=false,last=null;
    const put=e=>{const p=this.pt(e),A=this.arrays[n.name],N=A.data.length,[w,h]=n.sz;
      const ix=clamp(Math.floor((p.x-n.x)/w*(n.style==='points'?N:N-1)+(n.style==='points'?0:.5)),0,N-1);
      let v=n.top+clamp((p.y-n.y)/h,0,1)*(n.bot-n.top);if(n.snap)v=Math.round(v);
      if(last&&last[0]!==ix){const[a,va]=last,st=ix>a?1:-1;for(let k=a+st;k!==ix;k+=st)A.data[k]=n.snap?Math.round(va+(v-va)*(k-a)/(ix-a)):va+(v-va)*(k-a)/(ix-a);}
      A.data[ix]=v;last=[ix,v];this.drawArr(n);this.arrChanged(n.name);};
    g.addEventListener('pointerdown',e=>{e.preventDefault();g.setPointerCapture(e.pointerId);act=true;last=null;put(e)});
    g.addEventListener('pointermove',e=>{if(act)put(e)});const up=()=>{act=false;last=null};g.addEventListener('pointerup',up);g.addEventListener('pointercancel',up);}
  /* --- DSP --- */
  activate(){
    const c=ensureAudio();if(AU.active&&AU.active!==this)AU.active.deactivate();if(this.on)return;
    this.on=true;AU.active=this;this.delBus={};
    this.bus=c.createGain();this.bus.gain.value=0;this.bus.connect(AU.input);this.bus.gain.setTargetAtTime(1,c.currentTime,.02);
    const R=Object.values(this.rt);
    R.forEach(r=>{if(r.build){r.build(c);r.live=true;}});
    R.forEach(r=>r.link&&r.link());
    this.edges.forEach(e=>{if(!e.sig)return;const a=this.rt[e.f],b=this.rt[e.t];if(a.output&&b.input)connectTo(a.output(e.fo),b.input(e.ti));});
    this.inject(()=>this.nodes.filter(n=>n.init).forEach(n=>{const r=this.rt[n.id];r.recv(0,[r.v])}),'silent');
    this.lab.classList.add('on');this.envHist=[];updDock();
  }
  deactivate(){
    if(!this.on)return;this.on=false;if(AU.active===this)AU.active=null;
    Object.values(this.rt).forEach(r=>{if(r.stop)r.stop();});
    this.nodes.filter(n=>n.k==='tgl').forEach(n=>{this.rt[n.id].v=0;this.tglShow(n,0)});
    const bus=this.bus,c=AU.ctx;bus.gain.setTargetAtTime(0,c.currentTime,.015);
    const R=Object.values(this.rt);setTimeout(()=>{R.forEach(r=>r.teardown&&!this.on&&r.teardown());try{bus.disconnect()}catch(e){}},90);
    this.lab.classList.remove('on');updDock();this.drawScope(true);
  }
  /* --- scope --- */
  drawScope(idle){
    const cv=this.scope;if(!cv)return;const dpr=devicePixelRatio||1,W=cv.clientWidth*dpr,H=cv.clientHeight*dpr;
    if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}
    const x=cv.getContext('2d');x.clearRect(0,0,W,H);
    x.strokeStyle='#1a1f26';x.lineWidth=1;for(let i=1;i<4;i++){x.beginPath();x.moveTo(0,H*i/4);x.lineTo(W,H*i/4);x.stroke();}
    if(idle||!this.on||!AU.an){x.strokeStyle='#343b46';x.beginPath();x.moveTo(0,H/2);x.lineTo(W,H/2);x.stroke();
      x.fillStyle='#5d636e';x.font=`${11*dpr}px IBM Plex Mono, monospace`;x.textAlign='right';x.fillText(ui('scopeIdle'),W-10*dpr,H-10*dpr);return;}
    const m=this.mode0;
    if(m==='wave'){const b=AU.buf;AU.an.getFloatTimeDomainData(b);let s=0;for(let i=1;i<1024;i++){if(b[i-1]<0&&b[i]>=0){s=i;break}}
      x.strokeStyle='#1fe2ff';x.lineWidth=2*dpr;x.shadowColor='#1fe2ff';x.shadowBlur=12*dpr;x.beginPath();
      for(let i=0;i<1024;i++){const X=i/1023*W,Y=H/2-b[s+i]*H*.42;i?x.lineTo(X,Y):x.moveTo(X,Y);}x.stroke();x.shadowBlur=0;}
    else if(m==='spec'){const f=AU.fbuf;AU.an.getByteFrequencyData(f);const sr=AU.ctx.sampleRate,bins=f.length,lo=Math.log(30),hi=Math.log(12000),nb=96;
      for(let k=0;k<nb;k++){const f0=Math.exp(lo+(hi-lo)*k/nb),f1=Math.exp(lo+(hi-lo)*(k+1)/nb);let i0=Math.floor(f0/(sr/2)*bins),i1=Math.max(i0+1,Math.floor(f1/(sr/2)*bins));let mx=0;for(let i=i0;i<i1&&i<bins;i++)mx=Math.max(mx,f[i]);
        const v=mx/255,bh=v*v*H*.95,X=k/nb*W;const gr=x.createLinearGradient(0,H,0,H-bh);gr.addColorStop(0,'#ff2e97');gr.addColorStop(1,'#1fe2ff');x.fillStyle=gr;x.fillRect(X+1,H-bh,W/nb-2,bh);}
      x.fillStyle='#5d636e';x.font=`${10*dpr}px IBM Plex Mono, monospace`;x.textAlign='left';[100,1000,10000].forEach(fr=>{const X=(Math.log(fr)-lo)/(hi-lo)*W;x.fillText(fr>=1000?fr/1000+'k':fr,X+3,H-4*dpr);});}
    else{const b=AU.buf;AU.an.getFloatTimeDomainData(b);let r=0;for(let i=0;i<b.length;i++)r=Math.max(r,Math.abs(b[i]));this.envHist.push(r);if(this.envHist.length>300)this.envHist.shift();
      const E=this.envHist;x.beginPath();x.moveTo(0,H);E.forEach((v,i)=>x.lineTo(i/299*W,H-Math.min(1,v)*H*.9));x.lineTo((E.length-1)/299*W,H);x.closePath();
      const gr=x.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#ffe04daa');gr.addColorStop(1,'#ffe04d10');x.fillStyle=gr;x.fill();
      x.strokeStyle='#ffe04d';x.lineWidth=2*dpr;x.beginPath();E.forEach((v,i)=>{const X=i/299*W,Y=H-Math.min(1,v)*H*.9;i?x.lineTo(X,Y):x.moveTo(X,Y)});x.stroke();}
  }
}

/* ---------- .pd export ---------- */
function toPd(L){
  const esc=s=>s.replace(/\$/g,'\\$').replace(/,/g,' \\,').replace(/;/g,'\\;').replace(/\s+/g,' ').trim();
  const out=['#N canvas 80 60 720 560 12;'];
  L.patch.nodes.forEach(n=>{const x=Math.round(n.x),y=Math.round(n.y);
    switch(n.k){
      case 'obj':out.push(`#X obj ${x} ${y} ${esc(n.t)};`);break;
      case 'msg':out.push(`#X msg ${x} ${y} ${esc(n.t)};`);break;
      case 'txt':out.push(`#X text ${x} ${y} ${esc(n.t)};`);break;
      case 'num':out.push(`#X floatatom ${x} ${y} ${n.w||5} 0 0 0 - - - 0;`);break;
      case 'bng':out.push(`#X obj ${x} ${y} bng 19 250 50 0 empty empty empty 0 -10 0 12 #fcfcfc #000000 #000000;`);break;
      case 'tgl':out.push(`#X obj ${x} ${y} tgl 19 0 empty empty empty 17 7 0 10 #fcfcfc #000000 #000000 0 1;`);break;
      case 'hsl':out.push(`#X obj ${x} ${y} hsl ${n.w||128} 15 ${n.min} ${n.max} ${n.log?1:0} 0 empty empty ${(n.lab||'empty').replace(/\s+/g,'_')} -2 -8 0 10 #fcfcfc #000000 #000000 0 1;`);break;
      case 'arr':{const N=n.data.length;out.push('#N canvas 0 50 450 250 (subpatch) 0;',`#X array ${n.name} ${N} float ${n.style==='points'?1:3};`,
        `#A 0 ${Array.from(n.data).map(v=>+v.toFixed(4)).join(' ')};`,`#X coords 0 ${n.top} ${N} ${n.bot} ${n.w} ${n.h} 1 0 0;`,`#X restore ${x} ${y} graph;`);break;}
    }});
  L.patch.edges.forEach(([f,fo,t,ti])=>{const a=L.patch.nodes.findIndex(n=>n.id===f),b=L.patch.nodes.findIndex(n=>n.id===t);out.push(`#X connect ${a} ${fo} ${b} ${ti};`);});
  return out.join('\n');
}
