/* Idioma: ?lang=xx > última elección guardada > español. Carga lang/es.js (base) y el idioma elegido encima. */
const LANGS=[['es','ES','Español'],['en','EN','English'],['de','DE','Deutsch'],['ja','日本','日本語'],['zh','中文','中文'],['hi','हिं','हिन्दी']];
const PD_I18N={};
const LANG=(()=>{
  const ok=c=>LANGS.some(l=>l[0]===c);
  const u=new URLSearchParams(location.search).get('lang');
  if(u&&ok(u)){try{localStorage.setItem('umapd-lang',u)}catch(e){}return u;}
  let s=null;try{s=localStorage.getItem('umapd-lang')}catch(e){}
  return ok(s)?s:'es';
})();
let T;
function ui(k){return T.ui[k];}
function tl(s){return (T.labels&&T.labels[s])||s;}
function setLang(c){const u=new URL(location.href);u.searchParams.set('lang',c);try{localStorage.setItem('umapd-lang',c)}catch(e){}location.href=u.toString();}
function applyStatic(){
  document.documentElement.lang=LANG;
  document.title=T.ui.docTitle;
  document.querySelector('meta[name=description]').content=T.ui.metaDesc;
  document.querySelectorAll('[data-i18n]').forEach(e=>{e.innerHTML=T.ui[e.dataset.i18n];});
  document.querySelectorAll('[data-i18n-ph]').forEach(e=>{e.placeholder=T.ui[e.dataset.i18nPh];});
  document.querySelectorAll('[data-i18n-aria]').forEach(e=>{e.setAttribute('aria-label',T.ui[e.dataset.i18nAria]);});
  document.getElementById('keys').innerHTML=T.keys.map(([k,d])=>`<div class="k"><kbd>${k}</kbd><span>${d}</span></div>`).join('');
  const L=['https://msp.ucsd.edu/software.html','https://msp.ucsd.edu/techniques.htm','https://puredata.info'];
  document.getElementById('ncards').innerHTML=T.next.map(([b,s],i)=>`<a class="ncard" href="${L[i]}" target="_blank" rel="noopener"><b>${b}</b><span>${s}</span></a>`).join('');
  const btns=LANGS.map(([c,ab,nm])=>`<button type="button" lang="${c}" title="${nm}" aria-label="${nm}"${c===LANG?' class="on" aria-current="true"':''} data-l="${c}">${ab}</button>`).join('');
  document.querySelectorAll('[data-langs]').forEach(g=>{g.innerHTML=btns;g.addEventListener('click',e=>{const b=e.target.closest('button');if(b&&b.dataset.l!==LANG)setLang(b.dataset.l);});});
}
(function boot(){
  const V=location.hostname==='localhost'?String(Date.now()):'4';
  const load=src=>new Promise((ok,ko)=>{const s=document.createElement('script');s.src=src+'?v='+V;s.onload=ok;s.onerror=ko;document.head.appendChild(s);});
  const files=['lang/es.js'];if(LANG!=='es')files.push('lang/'+LANG+'.js');
  Promise.all(files.map(load)).then(()=>{
    const B=PD_I18N.es,X=PD_I18N[LANG]||{};
    T={ui:{...B.ui,...X.ui},parts:{...B.parts,...X.parts},labels:{...B.labels,...X.labels},cats:{...B.cats,...X.cats},
       ref:X.ref||B.ref,rules:X.rules||B.rules,keys:X.keys||B.keys,next:X.next||B.next,lessons:{}};
    for(const id in B.lessons)T.lessons[id]={...B.lessons[id],...(X.lessons||{})[id]};
    applyStatic();
    return load('js/engine.js').then(()=>load('js/app.js'));
  }).catch(e=>{document.getElementById('main').textContent='Error: '+e;});
})();
