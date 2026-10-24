/* =====================================================================
   LESSONS — estructura y patches. Los textos están en lang/<idioma>.js
   ===================================================================== */
const N=(id,k,t,x,y,o={})=>Object.assign({id,k,t,x,y},o);
const O=(id,t,x,y,o)=>N(id,'obj',t,x,y,o), M=(id,t,x,y,o)=>N(id,'msg',t,x,y,o), C=(id,t,x,y)=>N(id,'txt',t,x,y);
const NUM=(id,x,y,o)=>N(id,'num','',x,y,o), HS=(id,x,y,o)=>N(id,'hsl','',x,y,o), BG=(id,x,y,o)=>N(id,'bng','',x,y,o), TG=(id,x,y,o)=>N(id,'tgl','',x,y,o);
const AR=(id,name,x,y,o)=>N(id,'arr','',x,y,Object.assign({name},o));
const sines=(N,amps)=>{const d=[];for(let i=0;i<N+3;i++){let s=0;amps.forEach((a,k)=>s+=a*Math.sin(2*Math.PI*(k+1)*(i-1)/N));d.push(s)}return d};

const LESSONS=[
{id:'leer',part:'leer',file:'00-leer.pd',
 patch:{nodes:[
   M('m','440',20,30),C('c1','mensaje: clic',90,33),
   NUM('nu',20,75),C('c2','número: arrastrá',90,78),
   BG('b',20,120),C('c3','bang',90,122),
   TG('tg',20,160),C('c4','toggle 0/1',90,162),
   HS('sl',20,205,{w:60,min:0,max:1,v:.5}),C('c5','slider',90,203),
   O('rn','random 100',20,240),C('c6','objeto',120,243),
   BG('b2',330,30),O('pr','print hola',330,85),C('c7','control: cable fino',330,123),
   O('os','osc~ 220',330,160),O('lp','lop~ 800',330,215),C('c8','señal: cable grueso',330,245)],
  edges:[['m',0,'nu',0],['b2',0,'pr',0],['os',0,'lp',0],['b',0,'rn',0],['tg',0,'rn',1]]}},

{id:'mensajes',part:'leer',file:'01-mensajes.pd',scope:'wave',
 patch:{nodes:[
   M('m60','60',20,30),M('m64','64',58,30),M('m67','67',96,30),M('m72','72',134,30),
   NUM('nn',200,30,{v:60,min:36,max:96,init:1,lab:'nota'}),
   O('mt','mtof',20,80),O('pn','print nota',96,80),
   NUM('fq',20,120,{w:7}),
   M('mv','nota $1',200,120),
   M('mh','hola mundo',300,30),M('ml','1 2 3 tres',300,62),
   O('ptx','print texto',260,170),
   O('osc','osc~',20,160),O('amp','*~ 0.1',20,200),O('dac','dac~',20,245)],
  edges:[['m60',0,'mt',0],['m64',0,'mt',0],['m67',0,'mt',0],['m72',0,'mt',0],['m60',0,'pn',0],['m64',0,'pn',0],['m67',0,'pn',0],['m72',0,'pn',0],
   ['nn',0,'mt',0],['nn',0,'mv',0],['mv',0,'ptx',0],['mh',0,'ptx',0],['ml',0,'ptx',0],['mt',0,'fq',0],['fq',0,'osc',0],['osc',0,'amp',0],['amp',0,'dac',0],['amp',0,'dac',1]]}},

{id:'frio',part:'leer',file:'02-frio-caliente.pd',scope:'wave',
 patch:{nodes:[
   NUM('a',20,30,{v:60,min:36,max:96,init:1,lab:'A · caliente'}),NUM('b',130,30,{v:7,min:-24,max:24,lab:'B · frío'}),BG('bg',230,30,{lab:'bang'}),
   O('plus','+ 7',20,85),NUM('res',20,130),O('pr','print resultado',110,175),
   O('mt','mtof',20,175),O('osc','osc~',20,215),O('amp','*~ 0.1',20,255),O('dac','dac~',20,300)],
  edges:[['a',0,'plus',0],['b',0,'plus',1],['bg',0,'plus',0],['plus',0,'res',0],['res',0,'pr',0],['res',0,'mt',0],['mt',0,'osc',0],['osc',0,'amp',0],['amp',0,'dac',0],['amp',0,'dac',1]]}},

{id:'orden',part:'leer',file:'03-orden.pd',scope:'env',
 patch:{nodes:[
   NUM('n',20,30,{v:64,min:36,max:96,lab:'nota'}),O('t','t b f',20,75),
   M('env','1 5, 0 600 5',20,120),O('mt','mtof',150,120),
   O('vl','vline~',20,165),O('osc','osc~',150,165),O('mul','*~',150,215),O('amp','*~ 0.2',150,255),O('dac','dac~',150,300),
   BG('b',330,30,{lab:'disparar'}),O('t3','t b b b',330,75),
   M('m3','tercero',292,130),M('m2','segundo',370,130),M('m1','primero',448,130),O('po','print orden',370,185)],
  edges:[['n',0,'t',0],['t',1,'mt',0],['t',0,'env',0],['env',0,'vl',0],['mt',0,'osc',0],['osc',0,'mul',0],['vl',0,'mul',1],['mul',0,'amp',0],['amp',0,'dac',0],['amp',0,'dac',1],
   ['b',0,'t3',0],['t3',0,'m3',0],['t3',1,'m2',0],['t3',2,'m1',0],['m3',0,'po',0],['m2',0,'po',0],['m1',0,'po',0]]}},

{id:'senal',part:'senal',file:'04-senal.pd',scope:'wave',
 patch:{nodes:[
   HS('hf',20,30,{min:50,max:1000,v:220,log:1,init:1,lab:'frecuencia Hz'}),NUM('nf',20,60,{w:6}),O('osc','osc~ 220',20,100),
   HS('hv',200,30,{min:0,max:1,v:.3,init:1,lab:'volumen'}),NUM('nv',200,60),M('ms','$1 30',200,100),O('ln','line~',200,140),
   O('mul','*~',20,180),O('dac','dac~',20,230)],
  edges:[['hf',0,'nf',0],['nf',0,'osc',0],['hv',0,'nv',0],['nv',0,'ms',0],['ms',0,'ln',0],['osc',0,'mul',0],['ln',0,'mul',1],['mul',0,'dac',0],['mul',0,'dac',1]]}},

{id:'aditiva',part:'senal',file:'05-aditiva.pd',scope:'spec',
 patch:{nodes:[
   NUM('f0',20,30,{v:110,min:30,max:600,lab:'fundamental'}),
   O('m2','* 2',110,70),O('m3','* 3',200,70),O('m4','* 4',290,70),
   O('o1','osc~ 110',20,110),O('o2','osc~ 220',110,110),O('o3','osc~ 330',200,110),O('o4','osc~ 440',290,110),
   HS('s1',52,145,{w:52,min:0,max:1,v:.8,lab:'1'}),HS('s2',142,145,{w:52,min:0,max:1,v:.4,lab:'2'}),HS('s3',232,145,{w:52,min:0,max:1,v:.27,lab:'3'}),HS('s4',322,145,{w:52,min:0,max:1,v:.2,lab:'4'}),
   O('g1','*~ 0.8',20,180),O('g2','*~ 0.4',110,180),O('g3','*~ 0.27',200,180),O('g4','*~ 0.2',290,180),
   O('sum','*~ 0.15',20,230),O('dac','dac~',20,270)],
  edges:[['f0',0,'o1',0],['f0',0,'m2',0],['f0',0,'m3',0],['f0',0,'m4',0],['m2',0,'o2',0],['m3',0,'o3',0],['m4',0,'o4',0],
   ['o1',0,'g1',0],['o2',0,'g2',0],['o3',0,'g3',0],['o4',0,'g4',0],['s1',0,'g1',1],['s2',0,'g2',1],['s3',0,'g3',1],['s4',0,'g4',1],
   ['g1',0,'sum',0],['g2',0,'sum',0],['g3',0,'sum',0],['g4',0,'sum',0],['sum',0,'dac',0],['sum',0,'dac',1]]}},

{id:'ring',part:'senal',file:'06-ring.pd',scope:'spec',
 patch:{nodes:[
   HS('hc',20,30,{min:100,max:1000,v:440,log:1,lab:'portadora Hz'}),O('oc','osc~ 440',20,95),
   HS('hm',200,30,{min:.5,max:300,v:6,log:1,lab:'moduladora Hz'}),NUM('nm',200,58,{w:6}),O('om','osc~ 6',200,95),
   O('mul','*~',20,140),O('amp','*~ 0.25',20,180),O('dac','dac~',20,225)],
  edges:[['hc',0,'oc',0],['hm',0,'nm',0],['nm',0,'om',0],['oc',0,'mul',0],['om',0,'mul',1],['mul',0,'amp',0],['amp',0,'dac',0],['amp',0,'dac',1]]}},

{id:'fm',part:'senal',file:'07-fm.pd',scope:'spec',
 patch:{nodes:[
   HS('hm',20,30,{min:1,max:800,v:110,log:1,lab:'moduladora Hz'}),O('om','osc~ 110',20,60),
   HS('hi',200,30,{min:0,max:1500,v:300,init:1,lab:'índice Hz'}),O('idx','*~ 0',20,100),
   NUM('hc',230,85,{v:220,min:40,max:1000,lab:'portadora'}),O('car','+~ 220',20,140),
   O('oc','osc~',20,180),O('amp','*~ 0.15',20,220),O('dac','dac~',20,260)],
  edges:[['hm',0,'om',0],['om',0,'idx',0],['hi',0,'idx',1],['idx',0,'car',0],['hc',0,'car',1],['car',0,'oc',0],['oc',0,'amp',0],['amp',0,'dac',0],['amp',0,'dac',1]]}},

{id:'filtros',part:'senal',file:'08-sustractiva.pd',scope:'spec',
 patch:{nodes:[
   HS('hp',20,30,{min:30,max:220,v:55,log:1,lab:'altura Hz'}),O('ph','phasor~ 55',20,60),
   HS('hl',190,30,{w:110,min:.05,max:8,v:.25,log:1,lab:'LFO Hz'}),O('lfo','osc~ 0.25',190,60),
   HS('hd',330,70,{w:100,min:0,max:2000,v:900,lab:'profundidad'}),O('dep','*~ 900',190,100),
   O('off','+~ 1100',190,140),HS('hq',330,125,{w:100,min:1,max:25,v:5,lab:'Q'}),
   O('vcf','vcf~ 5',20,185),O('amp','*~ 0.3',20,230),O('dac','dac~',20,270)],
  edges:[['hp',0,'ph',0],['hl',0,'lfo',0],['lfo',0,'dep',0],['hd',0,'dep',1],['dep',0,'off',0],['ph',0,'vcf',0],['off',0,'vcf',1],['hq',0,'vcf',2],['vcf',1,'amp',0],['amp',0,'dac',0],['amp',0,'dac',1]]}},

{id:'envolventes',part:'tiempo',file:'09-envolventes.pd',scope:'env',
 patch:{nodes:[
   C('tp1','pluck',20,8),M('e1','1 2, 0 220 2',20,25),
   C('tp2','pad',140,8),M('e2','1 700, 0 1600 900',140,25),
   C('tp3','perc + sustain',300,8),M('e3','1 1, 0.35 80 1, 0 900 400',300,25),
   O('vl','vline~',20,85),O('ph','phasor~ 110',200,85),O('lp','lop~ 1800',200,125),
   O('mul','*~',200,170),O('amp','*~ 0.35',200,210),O('dac','dac~',200,250)],
  edges:[['e1',0,'vl',0],['e2',0,'vl',0],['e3',0,'vl',0],['vl',0,'mul',1],['ph',0,'lp',0],['lp',0,'mul',0],['mul',0,'amp',0],['amp',0,'dac',0],['amp',0,'dac',1]]}},

{id:'secuenciador',part:'tiempo',file:'10-secuenciador.pd',scope:'wave',
 patch:{nodes:[
   TG('tg',20,30,{lab:'play'}),HS('ht',70,32,{w:100,min:80,max:500,v:160,lab:'ms'}),O('mt','metro 160',20,70),
   O('f','f',20,110),O('p1','+ 1',70,135),O('md','mod 8',70,170),NUM('st',140,110,{w:3,lab:'paso'}),
   O('tr','tabread seq',20,205),O('t','t b f',20,245),
   O('pl','+ 48',90,285),O('mf','mtof',90,320),O('ph','phasor~',90,355),O('lp','lop~ 1600',90,390),
   M('env','1 3, 0 200 3',200,320),O('vl','vline~',200,360),
   O('mul','*~',90,430),O('amp','*~ 0.25',90,470),O('dac','dac~',90,510),
   AR('arr','seq',300,30,{w:200,h:130,top:24,bot:0,style:'points',snap:1,data:[0,7,12,15,10,7,19,12]})],
  edges:[['tg',0,'mt',0],['ht',0,'mt',1],['mt',0,'f',0],['f',0,'p1',0],['p1',0,'md',0],['md',0,'f',1],['f',0,'st',0],['f',0,'tr',0],['tr',0,'t',0],
   ['t',1,'pl',0],['t',0,'env',0],['pl',0,'mf',0],['mf',0,'ph',0],['ph',0,'lp',0],['lp',0,'mul',0],['env',0,'vl',0],['vl',0,'mul',1],['mul',0,'amp',0],['amp',0,'dac',0],['amp',0,'dac',1]]}},

{id:'generativo',part:'tiempo',file:'11-generativo.pd',scope:'wave',
 patch:{nodes:[
   TG('tg',20,30,{lab:'play'}),O('mt','metro 180',20,65),O('r1','random 100',20,100),
   HS('hp',140,95,{w:100,min:0,max:100,v:65,int:1,lab:'probabilidad %'}),O('mo','moses 65',20,140),
   O('tb','t b b',20,180),O('rn','random 8',150,215),O('tr','tabread escala',150,250),O('pl','+ 60',150,285),O('mf','mtof',150,320),O('os','osc~',150,355),
   M('env','1 2, 0 350 2',20,250),O('vl','vline~',20,300),
   O('mul','*~',150,400),O('amp','*~ 0.3',150,440),O('dac','dac~',150,480),
   AR('arr','escala',300,30,{w:200,h:130,top:24,bot:0,style:'points',snap:1,data:[0,2,4,7,9,12,14,16]})],
  edges:[['tg',0,'mt',0],['mt',0,'r1',0],['r1',0,'mo',0],['hp',0,'mo',1],['mo',0,'tb',0],['tb',1,'rn',0],['rn',0,'tr',0],['tr',0,'pl',0],['pl',0,'mf',0],['mf',0,'os',0],
   ['tb',0,'env',0],['env',0,'vl',0],['os',0,'mul',0],['vl',0,'mul',1],['mul',0,'amp',0],['amp',0,'dac',0],['amp',0,'dac',1]]}},

{id:'delay',part:'tiempo',file:'12-delay.pd',scope:'env',
 patch:{nodes:[
   TG('tg',20,30,{lab:'auto'}),O('mt','metro 700',20,65),BG('b',20,105,{lab:'tocar'}),O('tb','t b b',20,145),
   M('env','1 2, 0 140 2',20,190),O('vl','vline~',20,230),
   O('rn','random 12',150,190),O('pl','+ 60',150,225),O('mf','mtof',150,260),O('os','osc~',150,295),
   O('dry','*~',150,340),O('lvl','*~ 0.3',150,380),
   O('dw','delwrite~ eco 2000',20,440),
   HS('ht',300,300,{w:110,min:30,max:1200,v:320,log:1,lab:'tiempo ms'}),O('dr','delread~ eco 320',300,340),
   O('fb','*~ 0.6',300,420),HS('hf',380,395,{w:90,min:0,max:.92,v:.6,lab:'feedback'}),
   O('dac','dac~',150,500)],
  edges:[['tg',0,'mt',0],['mt',0,'b',0],['b',0,'tb',0],['tb',1,'rn',0],['rn',0,'pl',0],['pl',0,'mf',0],['mf',0,'os',0],['tb',0,'env',0],['env',0,'vl',0],
   ['os',0,'dry',0],['vl',0,'dry',1],['dry',0,'lvl',0],['lvl',0,'dac',0],['lvl',0,'dac',1],['lvl',0,'dw',0],
   ['ht',0,'dr',0],['dr',0,'fb',0],['hf',0,'fb',1],['fb',0,'dw',0],['dr',0,'dac',0],['dr',0,'dac',1]]}},

{id:'tablas',part:'tiempo',file:'13-wavetable.pd',scope:'wave',
 patch:{nodes:[
   AR('arr','onda',20,30,{w:260,h:130,top:1,bot:-1,data:sines(64,[.55,.28,.18,.14,.11])}),
   C('c1','seno',310,17),M('s1','; onda sinesum 64 0.9',310,30),
   C('c2','sierra',310,62),M('s2','; onda sinesum 64 0.55 0.28 0.18 0.14 0.11',310,75),
   C('c3','cuadrada',310,107),M('s3','; onda sinesum 64 0.8 0 0.27 0 0.16 0 0.11',310,120),
   M('s4','; onda normalize 1',310,155),
   HS('hf',20,205,{w:160,min:40,max:600,v:110,log:1,init:1,lab:'frecuencia Hz'}),NUM('nf',20,235,{w:6}),
   O('tab','tabosc4~ onda',20,275),O('amp','*~ 0.25',20,315),O('dac','dac~',20,355)],
  edges:[['hf',0,'nf',0],['nf',0,'tab',0],['tab',0,'amp',0],['amp',0,'dac',0],['amp',0,'dac',1]]}}];
LESSONS.forEach(L=>Object.assign(L,T.lessons[L.id]));

/* ---------- reference: [objeto, categoría, ejemplo]; la descripción sale de T.ref ---------- */
const REF=[
 ["print","Control","[print nota]"],
 ["bang","Control","bng / [bang("],
 ["loadbang","Control","[loadbang]→[440("],
 ["trigger / t","Control","[t b f]"],
 ["float / f","Control","[f]x[+ 1]"],
 ["int / i","Control","[i]"],
 ["select / sel","Control","[sel 0 4 8]"],
 ["route","Control","[route nota vel]"],
 ["moses","Control","[moses 65]"],
 ["spigot","Control","[spigot]"],
 ["change","Control","[change]"],
 ["pack / unpack","Control","[pack f f]"],
 ["send / receive","Control","[s tempo] [r tempo]"],
 ["+ - * /","Matemática","[* 2]"],
 ["mod","Matemática","[mod 8]"],
 ["random","Matemática","[random 12]"],
 ["expr","Matemática","[expr $f1*2+1]"],
 ["mtof / ftom","Matemática","[mtof]"],
 ["dbtorms","Matemática","[dbtorms]"],
 ["metro","Tiempo","[metro 250]"],
 ["delay / del","Tiempo","[del 500]"],
 ["timer","Tiempo","[timer]"],
 ["line","Tiempo","[line]"],
 ["osc~","Señal","[osc~ 440]"],
 ["phasor~","Señal","[phasor~ 110]"],
 ["noise~","Señal","[noise~]"],
 ["*~ +~ -~ /~","Señal","[*~ 0.5]"],
 ["dac~ / adc~","Señal","[dac~]"],
 ["sig~","Señal","[sig~ 1]"],
 ["clip~","Señal","[clip~ -1 1]"],
 ["env~","Señal","[env~]"],
 ["snapshot~","Señal","[snapshot~]"],
 ["send~ / receive~","Señal","[s~ bus]"],
 ["throw~ / catch~","Señal","[throw~ mix]"],
 ["lop~ / hip~","Filtros","[lop~ 1000]"],
 ["bp~","Filtros","[bp~ 800 5]"],
 ["vcf~","Filtros","[vcf~ 5]"],
 ["line~","Envolventes","[0.5 30(→[line~]"],
 ["vline~","Envolventes","[1 5, 0 300 5("],
 ["delwrite~ / delread~","Memoria","[delread~ eco 300]"],
 ["delread4~","Memoria","[delread4~ eco]"],
 ["array / table","Tablas","Put → Array"],
 ["tabread / tabwrite","Tablas","[tabread seq]"],
 ["tabosc4~","Tablas","[tabosc4~ onda]"],
 ["tabplay~ / soundfiler","Tablas","[soundfiler]"]];
const CATS=['Todos','Control','Matemática','Tiempo','Señal','Filtros','Envolventes','Memoria','Tablas'];


/* =====================================================================
   BUILD PAGE
   ===================================================================== */
const main=document.getElementById('main'),nav=document.getElementById('nav');
let lastPart=null;
function refId(name){const i=REF.findIndex(r=>r[0].split(/\s*\/\s*|\s+/).includes(name));return i>=0?'ref-'+i:null;}

const RULE_SVG=[
 `<svg viewBox="0 0 200 84"><rect x="70" y="40" width="60" height="20" fill="#151a20" stroke="#c4cad3"/><text x="88" y="55" fill="#eceff3" font-family="IBM Plex Mono" font-size="12">+ 7</text><line x1="73" y1="6" x2="73" y2="40" stroke="#ff2e97" stroke-width="2"/><line x1="127" y1="6" x2="127" y2="40" stroke="#1fe2ff" stroke-width="2" stroke-dasharray="3 3"/><text x="66" y="20" text-anchor="end" fill="#ff2e97" font-family="IBM Plex Mono" font-size="11">${T.ui.ruleFires}</text><text x="134" y="20" fill="#1fe2ff" font-family="IBM Plex Mono" font-size="11">${T.ui.ruleStores}</text></svg>`,
 `<svg viewBox="0 0 200 84"><rect x="50" y="10" width="100" height="20" fill="#151a20" stroke="#c4cad3"/><text x="78" y="25" fill="#eceff3" font-family="IBM Plex Mono" font-size="12">t b b b</text><text x="44" y="60" fill="#ffe04d" font-family="Michroma" font-size="18">3</text><text x="94" y="60" fill="#ffe04d" font-family="Michroma" font-size="18">2</text><text x="144" y="60" fill="#ffe04d" font-family="Michroma" font-size="18">1</text><path d="M150 74 H50" stroke="#ffe04d" stroke-width="1.5" marker-end="url(#ar)"/><defs><marker id="ar" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M8 0L0 4L8 8" fill="none" stroke="#ffe04d"/></marker></defs></svg>`,
 `<svg viewBox="0 0 200 84"><line x1="20" y1="28" x2="180" y2="28" stroke="#9aa1ad"/><circle cx="60" cy="28" r="4" fill="#ffe04d"/><circle cx="130" cy="28" r="4" fill="#ffe04d"/><path d="M20 62 q10 -14 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="#1fe2ff" stroke-width="3" fill="none"/></svg>`,
 `<svg viewBox="0 0 200 84"><rect x="80" y="6" width="40" height="18" fill="#151a20" stroke="#c4cad3"/><line x1="84" y1="24" x2="30" y2="64" stroke="#ff2e97"/><line x1="84" y1="24" x2="100" y2="64" stroke="#ff2e97"/><line x1="84" y1="24" x2="170" y2="64" stroke="#ff2e97"/><text x="88" y="80" fill="#ff2e97" font-family="IBM Plex Mono" font-size="16">?</text></svg>`,
 `<svg viewBox="0 0 200 84"><rect x="40" y="10" width="40" height="18" fill="#151a20" stroke="#c4cad3"/><text x="56" y="23" fill="#eceff3" font-family="IBM Plex Mono" font-size="12">f</text><rect x="100" y="50" width="50" height="18" fill="#151a20" stroke="#c4cad3"/><text x="110" y="63" fill="#eceff3" font-family="IBM Plex Mono" font-size="12">+ 1</text><line x1="44" y1="28" x2="104" y2="50" stroke="#9aa1ad"/><path d="M104 68 C 104 84, 74 80, 76 10" fill="none" stroke="#1fe2ff" stroke-dasharray="3 3"/></svg>`,
 `<svg viewBox="0 0 200 84"><path d="M30 14 H140 L136 18 V30 L140 34 H30Z" fill="#1a1708" stroke="#ffe04d"/><text x="38" y="29" fill="#eceff3" font-family="IBM Plex Mono" font-size="12">nota $1</text><text x="30" y="70" fill="#ffe04d" font-family="IBM Plex Mono" font-size="12">64 → nota 64</text></svg>`];
const RULES=`<section class="rules" id="reglas"><div class="wrap">
<h2>${T.ui.rulesTitle}</h2><p>${T.ui.rulesIntro}</p>
<div class="rgrid">${T.rules.map(([h,p],i)=>`<div class="rule">${RULE_SVG[i]}<h3>${h}</h3><p>${p}</p></div>`).join('')}</div></div></section>`;

LESSONS.forEach((L,ix)=>{
  if(L.part!==lastPart){lastPart=L.part;const[a,b]=T.parts[L.part];
    main.insertAdjacentHTML('beforeend',`<div class="part"><div class="wrap"><p>${a}</p><h2>${b}</h2><div class="bar"></div></div></div>`);}
  const objs=[...new Set(L.patch.nodes.filter(n=>n.k==='obj').map(n=>n.t.split(' ')[0]))];
  const chips=objs.map(o=>{const r=refId(o);return `<a class="chip${/~/.test(o)?' s':''}" ${r?`href="#${r}"`:''}>${o}</a>`}).join('');
  const sec=document.createElement('section');sec.className='lesson';sec.id=L.id;
  sec.innerHTML=`<div class="wrap">
   <div class="l-head"><span class="l-num">${String(ix).padStart(2,'0')}</span><div><p class="eyebrow">${L.eyebrow}</p><h2>${L.title}</h2></div></div>
   <div class="l-grid">
    <div class="l-text">
      <p class="lede">${L.lede}</p>${L.body}
      <div class="try"><h3>${T.ui.tryTitle}</h3><ul>${L.tryit.map(t=>`<li>${t}</li>`).join('')}</ul></div>
      <div class="tip"><h3>${L.tip[0]}</h3><p>${L.tip[1]}</p></div>
      <div class="chips">${chips}</div>
    </div>
    <div class="lab"></div>
   </div></div>`;
  main.appendChild(sec);
  const lab=sec.querySelector('.lab');
  const p=new Patch(L,lab);
  const hasPrint=L.patch.nodes.some(n=>n.t&&n.t.startsWith('print'));
  const bar=document.createElement('div');bar.className='lab-bar';
  bar.innerHTML=`<span class="file">patch · <b>${L.file}</b></span>`+(p.hasDac?`<div class="modes" role="group" aria-label="${T.ui.scopeView}"><button data-m="wave">${T.ui.mWave}</button><button data-m="spec">${T.ui.mSpec}</button><button data-m="env">${T.ui.mEnv}</button></div><button class="dsp" aria-pressed="false"><i></i>DSP</button>`:'');
  lab.appendChild(bar);
  const pw=document.createElement('div');pw.className='patch-wrap';pw.appendChild(p.svg);lab.appendChild(pw);
  if(p.hasDac){
    p.mode0=L.scope||'wave';
    const sw=document.createElement('div');sw.className='scope-wrap';sw.innerHTML='<span class="scope-label"></span><canvas class="scope"></canvas>';lab.appendChild(sw);
    p.scope=sw.querySelector('canvas');const sl=sw.querySelector('.scope-label');
    const setMode=m=>{p.mode0=m;p.envHist=[];bar.querySelectorAll('.modes button').forEach(b=>b.classList.toggle('on',b.dataset.m===m));sl.textContent={wave:T.ui.sWave,spec:T.ui.mSpec,env:T.ui.mEnv}[m];};
    bar.querySelectorAll('.modes button').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.m)));setMode(p.mode0);
    const dsp=bar.querySelector('.dsp');dsp.addEventListener('click',()=>{p.on?p.deactivate():p.activate();});
    p.dspBtn=dsp;
  }
  if(hasPrint){const c=document.createElement('div');c.className='console';c.innerHTML=`<div class="h">${T.ui.pdWindow}</div>`;lab.appendChild(c);p.con=c;}
  const det=document.createElement('details');det.className='src';
  det.innerHTML=`<summary>${T.ui.viewPd}</summary><div class="src-body"><pre></pre><div class="row"><button type="button" class="cp">${T.ui.copy}</button><a class="dl" href="patches/${L.file}" download="${L.file}">${T.ui.download}</a><span>${T.ui.saveAs} <b>${L.file}</b></span></div></div>`;
  const pre=det.querySelector('pre');pre.textContent=toPd(L);
  det.querySelector('.cp').addEventListener('click',async e=>{const b=e.target;try{await navigator.clipboard.writeText(pre.textContent);b.textContent=T.ui.copied;}catch(err){const r=document.createRange();r.selectNodeContents(pre);const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent=T.ui.selected;}setTimeout(()=>b.textContent=T.ui.copy,1800);});
  /* la descarga arma el .pd con los textos del idioma actual */
  det.querySelector('.dl').addEventListener('click',e=>{e.preventDefault();const u=URL.createObjectURL(new Blob([pre.textContent+'\n'],{type:'text/plain'}));const a=document.createElement('a');a.href=u;a.download=L.file;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1000);});
  lab.appendChild(det);
  if(p.scope)p.drawScope(true);
  nav.insertAdjacentHTML('beforeend',`<a href="#${L.id}" data-id="${L.id}"><b>${String(ix).padStart(2,'0')}</b>${L.short}</a>`);
  if(L.id==='orden')main.insertAdjacentHTML('beforeend',RULES);
});
nav.insertAdjacentHTML('beforeend',`<a href="#ref" data-id="ref"><b>→</b>${T.ui.navRef}</a>`);

/* reference grid */
const grid=document.getElementById('refgrid'),cats=document.getElementById('cats'),q=document.getElementById('refq');let cat='Todos';
const sigCats=['Señal','Filtros','Envolventes'];
REF.forEach(([nm,ct,ex],i)=>{const d=T.ref[i];grid.insertAdjacentHTML('beforeend',`<div class="rc${sigCats.includes(ct)||/~/.test(nm)?' sg':''}" id="ref-${i}" data-c="${ct}" data-s="${(nm+' '+d).toLowerCase().replace(/"/g,'')}"><div class="top"><span class="nm">${nm}</span><span class="ct">${T.cats[ct]}</span></div><p>${d}</p><span class="ex">${ex}</span></div>`)});
CATS.forEach(c=>{const b=document.createElement('button');b.textContent=T.cats[c];b.className=c===cat?'on':'';b.addEventListener('click',()=>{cat=c;cats.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));filt();});cats.appendChild(b);});
function filt(){const s=q.value.toLowerCase().trim();grid.querySelectorAll('.rc').forEach(r=>{r.hidden=!((cat==='Todos'||r.dataset.c===cat)&&(!s||r.dataset.s.includes(s)));});}
q.addEventListener('input',filt);

/* nav active */
const links=[...nav.querySelectorAll('a')];
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('on',a.dataset.id===e.target.id));const a=links.find(a=>a.dataset.id===e.target.id);if(a)a.scrollIntoView({block:'nearest',inline:'nearest'});}})},{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('.lesson,#ref').forEach(s=>io.observe(s));

/* dock */
const dock=document.getElementById('dock'),dockTxt=document.getElementById('dockTxt');
function updDock(){const a=AU.active;dock.classList.toggle('on',!!a);dockTxt.textContent=a?'DSP · '+a.L.file:T.ui.dspOff;PATCHES.forEach(p=>p.dspBtn&&p.dspBtn.setAttribute('aria-pressed',p.on));}
updDock();
document.getElementById('vol').addEventListener('input',e=>{AU.vol=+e.target.value;if(AU.mg)AU.mg.gain.setTargetAtTime(AU.vol,AU.ctx.currentTime,.02);});
document.getElementById('panic').addEventListener('click',()=>{if(AU.active)AU.active.deactivate();});
document.getElementById('startBtn').addEventListener('click',()=>{const p=PATCHES.find(p=>p.L.id==='mensajes');document.getElementById('mensajes').scrollIntoView({behavior:reduced?'auto':'smooth'});p.activate();});

/* hero canvas + main loop */
const hc=document.getElementById('heroCanvas');
function drawHero(t){
  const dpr=devicePixelRatio||1,W=hc.clientWidth*dpr,H=hc.clientHeight*dpr;if(hc.width!==W||hc.height!==H){hc.width=W;hc.height=H;}
  const x=hc.getContext('2d');x.clearRect(0,0,W,H);
  let live=null;if(AU.active&&AU.an){AU.an.getFloatTimeDomainData(AU.buf);live=AU.buf;}
  const cols=['#ff2e97','#1fe2ff','#ffe04d'];
  cols.forEach((c,k)=>{x.strokeStyle=c;x.globalAlpha=.22+.12*k;x.lineWidth=(1.5+k*.5)*dpr;x.shadowColor=c;x.shadowBlur=14*dpr;x.beginPath();
    const yb=H*(.58+k*.11),amp=H*.07;
    for(let i=0;i<=200;i++){const X=i/200*W;let v;
      if(live){v=live[(i*5+k*90)%2048]*2.2;}else{v=Math.sin(i*.06*(k+1)+t*.0009*(k+1)+k)*Math.sin(i*.013+t*.0004);}
      const Y=yb+v*amp*(k+1)*.8;i?x.lineTo(X,Y):x.moveTo(X,Y);}x.stroke();});
  x.globalAlpha=1;x.shadowBlur=0;
}
function loop(t){
  const now=performance.now();
  PATCHES.forEach(p=>{if(p.dots.length)p.tick(now);});
  if(AU.active)AU.active.drawScope();
  if(!reduced||AU.active)drawHero(t);
  requestAnimationFrame(loop);
}
drawHero(0);requestAnimationFrame(loop);
addEventListener('resize',()=>PATCHES.forEach(p=>!p.on&&p.drawScope(true)));
/* el contenido se arma después de cargar: ir al #ancla a mano, sin animación */
function goHash(){const t=location.hash&&document.getElementById(decodeURIComponent(location.hash.slice(1)));if(t)t.scrollIntoView({behavior:'instant',block:'start'});}
if(location.hash){goHash();(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>requestAnimationFrame(goHash));}
