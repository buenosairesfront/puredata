/* Español: idioma base. Cada idioma nuevo copia este archivo y traduce los valores (ver docs/IDIOMAS.md). */
PD_I18N.es={
ui:{
 docTitle:'Laboratorio Pd · U-MA',
 metaDesc:'Curso interactivo de Pure Data: 14 patches vivos que suenan en el navegador.',
 kicker:'laboratorio · nivel medio',
 h1sub:'patches que suenan',
 lede:'Un curso para entender cómo piensa Pd: mensajes, señal, orden de ejecución, síntesis, envolventes, secuencias, delays y tablas. Cada ejemplo es un patch vivo: tocás las cajas, ves viajar los mensajes y lo escuchás en el navegador.',
 start:'▶ Encender audio y empezar',
 cheat:'Chuleta de objetos',
 statPatches:'patches vivos', statSr:'muestras / seg', statSig:'= señal',
 keyYel:'<b style="color:var(--yel)">Amarillo</b>: un mensaje viajando por un cable de control',
 keyCyan:'<b style="color:var(--cyan)">Cian</b>: señal de audio (cable grueso, objetos con ~)',
 keyMag:'<b style="color:var(--mag)">Magenta</b>: algo que podés tocar, arrastrar o dibujar',
 keyGrey:'Cable fino gris: control en reposo',
 refTitle:'Chuleta de objetos',
 refIntro:'Los objetos que más vas a usar en Pd vanilla. En Pd, clic derecho sobre cualquier objeto → <b style="color:var(--fg)">Ayuda</b> abre su patch de ayuda con ejemplos.',
 refSearch:'Buscar: osc, delay, random…', refSearchAria:'Buscar objeto',
 keysTitle:'Atajos de teclado', keysNote:'En Mac usá Cmd en lugar de Ctrl.',
 nextTitle:'Seguir aprendiendo',
 footer:'Laboratorio Pd · universo U-MA · los patches de esta página se exportan como .pd vanilla',
 dspOff:'DSP apagado', panic:'Silencio', volAria:'Volumen general',
 tryTitle:'Probá esto',
 scopeView:'Vista del osciloscopio', mWave:'onda', mSpec:'espectro', mEnv:'envolvente', sWave:'osciloscopio',
 scopeIdle:'DSP apagado · tocá cualquier caja magenta o amarilla',
 pdWindow:'ventana de Pd',
 viewPd:'Ver como archivo .pd', copy:'Copiar', copied:'Copiado', selected:'Seleccionado: Ctrl+C', download:'Descargar',
 saveAs:'Abrilo en Pd, o pegalo en un archivo de texto y guardalo como',
 navRef:'Chuleta',
 rulesTitle:'Reglas de oro de la lógica Pd', rulesIntro:'Seis ideas que explican casi todos los “¿por qué no anda?” de un patch.',
 ruleFires:'dispara', ruleStores:'guarda',
 patchAria:'Patch de Pure Data: ', msgAria:'mensaje '
},
parts:{leer:['Parte 1','La lógica del lenguaje'],senal:['Parte 2','Señal y síntesis'],tiempo:['Parte 3','Tiempo, secuencias y memoria']},
/* textos dentro de los patches (comentarios y etiquetas de sliders/números): clave = texto en español */
labels:{},
cats:{Todos:'Todos',Control:'Control','Matemática':'Matemática',Tiempo:'Tiempo','Señal':'Señal',Filtros:'Filtros',Envolventes:'Envolventes',Memoria:'Memoria',Tablas:'Tablas'},
rules:[
 ['Izquierda caliente','El inlet izquierdo dispara la salida. Los demás solo guardan valores.'],
 ['Derecha a izquierda','Los outlets salen de derecha a izquierda, y cada rama se completa entera antes de la siguiente (depth-first).'],
 ['~ es señal','Con tilde: audio continuo, solo con DSP prendido. Sin tilde: mensajes, cuando algo pasa.'],
 ['Fan-out → trigger','Un outlet a varios lugares no tiene orden garantizado. Si importa, poné un <code>t</code>.'],
 ['Loops al inlet frío','Un cable que vuelve hacia arriba siempre entra por un inlet frío. Si no, loop infinito.'],
 ['$1 es una variable','En un mensaje, <code class="m">$1</code> toma el primer átomo que entra; <code class="m">$2</code>, el segundo.']],
keys:[['Ctrl E','Modo edición ↔ ejecución'],['Ctrl 1','Nuevo objeto'],['Ctrl 2','Nuevo mensaje'],['Ctrl 3','Nuevo número'],['Ctrl 5','Comentario'],
 ['Shift Ctrl B','Bang'],['Shift Ctrl T','Toggle'],['Ctrl /','Prender DSP (audio)'],['Ctrl .','Apagar DSP'],['Ctrl D','Duplicar selección'],
 ['Ctrl R','Traer la ventana de Pd (consola)'],['Clic derecho','Ayuda del objeto']],
next:[['Bajar Pd vanilla','La versión oficial de Miller Puckette, para Mac, Windows y Linux.'],
 ['Theory and Technique of Electronic Music','El libro de Puckette, gratis, con todos sus ejemplos hechos en Pd.'],
 ['puredata.info','Comunidad, foro, externals y documentación.']],
/* una descripción por fila de REF (js/app.js), en el mismo orden */
ref:[
 "Escribe en la consola lo que le llega.",
 "Mensaje “¡ahora!”. Dispara sin datos.",
 "Manda un bang al abrir el patch. Para inicializar.",
 "Reparte un mensaje en orden, de derecha a izquierda.",
 "Guarda un número. Bang lo vuelve a sacar.",
 "Como f, pero trunca a entero.",
 "Si el número coincide, bang por esa salida.",
 "Enruta mensajes según su primer átomo.",
 "Divide números por un umbral: menores izq., resto der.",
 "Compuerta: deja pasar si el inlet derecho ≠ 0.",
 "Solo deja pasar si el número cambió.",
 "Arma y desarma listas.",
 "s / r: cables invisibles por nombre.",
 "Operaciones. Izquierda caliente, derecha guarda.",
 "Resto de la división entera. Ideal para contadores.",
 "Entero al azar entre 0 y N−1 con cada bang.",
 "Fórmulas en una sola caja, estilo C.",
 "Nota MIDI ↔ frecuencia en Hz.",
 "Decibeles (0–100) a amplitud lineal.",
 "Reloj: bang cada N ms. 1 arranca, 0 para.",
 "Un bang después de N ms.",
 "Mide el tiempo entre dos bangs.",
 "Rampa en el mundo de control (para GUIs).",
 "Senoidal. Frecuencia por número o señal.",
 "Rampa 0→1: diente de sierra, lectura de tablas.",
 "Ruido blanco.",
 "Aritmética de audio. Con argumento, inlet derecho de control.",
 "Salida y entrada de audio de la placa.",
 "Convierte un número en señal constante.",
 "Recorta la señal entre dos valores.",
 "Sigue el volumen de una señal (en dB) como números.",
 "Toma el valor de una señal al recibir bang.",
 "Cable de señal por nombre (uno a muchos).",
 "Muchos a uno: para sumar a un bus.",
 "Pasa-bajos / pasa-altos de un polo.",
 "Pasa-banda con frecuencia y Q.",
 "Filtro resonante con frecuencia por señal. Sale bp y lp.",
 "Rampa de señal: destino y tiempo.",
 "Rampas con demora, precisas a la muestra.",
 "Escribe y lee una línea de demora por nombre.",
 "Lectura con interpolación y tiempo por señal (chorus, flanger).",
 "Lista de números que se ve y se dibuja.",
 "Leer y escribir un índice de un array.",
 "Oscilador que recorre un array (2ⁿ+3 puntos).",
 "Cargar un archivo de audio en un array y reproducirlo."],
lessons:{
 leer:{short:"Leer",eyebrow:"Antes de empezar",title:"Cómo se lee un patch",
  lede:"En Pd no escribís líneas de código: dibujás cajas y las conectás con cables. El dibujo es el programa, y corre mientras lo mirás.",
  body:`<ul>
 <li><b>Objeto</b> (rectángulo): hace un trabajo. Su nombre y argumentos van adentro: <code>metro 500</code>, <code class="s">osc~ 220</code>.</li>
 <li><b>Mensaje</b> (forma de bandera): guarda datos. Al hacer clic los manda por su salida.</li>
 <li><b>Número</b> (esquina cortada): muestra el último valor; lo arrastrás para cambiarlo.</li>
 <li><b>GUI</b>: bang (círculo, “¡ahora!”), toggle (0/1), slider.</li>
 <li><b>Inlets arriba, outlets abajo.</b> Los datos bajan por los cables.</li>
 <li>En Pd editás en <b>modo edición</b> (Ctrl+E) y tocás en <b>modo ejecución</b>. Acá siempre estás en ejecución.</li></ul>
 <div class="lanes">
  <svg viewBox="0 0 320 96" aria-hidden="true">
   <line x1="0" y1="24" x2="320" y2="24" stroke="#9aa1ad" stroke-width="1"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:0s"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:-.9s"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:-2.6s"/>
   <g class="lane-wave"><path d="M0 72 q10 -16 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#1fe2ff" stroke-width="3"/></g>
  </svg>
  <div class="cap"><span><b>Control</b>: eventos sueltos, cuando algo pasa</span><span><b class="c">Señal ~</b>: 44.100 números por segundo, sin parar</span></div>
 </div>`,
  tryit:["Hacé clic en el mensaje <code class=\"m\">440</code>: el número de abajo lo recibe.",
   "Tocá el bang de la derecha y mirá la consola: aparece <code>hola: bang</code>.",
   "Fijate en los colores de las cajas: amarillo = mensajes, cian = señal, magenta = controles para tocar."],
  tip:["Los cuadraditos","Los inlets y outlets cian son de señal; los grises, de control. Pd no te deja conectar una salida de señal a un inlet que solo acepta control."]},
 mensajes:{short:"Mensajes",eyebrow:"Lógica · 01",title:"Todo es un mensaje",
  lede:"Un mensaje es una lista de átomos: números (floats) y palabras (symbols). Viaja solo cuando algo lo dispara: un clic, un reloj, otro objeto.",
  body:`<ul>
 <li><b>float</b>: un número, <code class="m">60</code>. <b>symbol</b>: una palabra. <b>list</b>: varios átomos, <code class="m">1 2 3 tres</code>.</li>
 <li><code>print</code> escribe en la ventana de Pd lo que le llega, con su nombre adelante.</li>
 <li><code class="m">$1</code> dentro de un mensaje es una variable: se reemplaza por el primer átomo que entra. <code class="m">nota $1</code> + 64 → <code>nota 64</code>.</li>
 <li><code>mtof</code> convierte nota MIDI en Hz: 60 es Do central (261,6 Hz), 69 es La 440.</li></ul>`,
  tryit:["Clic en 60, 64, 67, 72: un arpegio de Do mayor.",
   "Arrastrá el número de la derecha y mirá cómo <code class=\"m\">nota $1</code> arma la frase en la consola.",
   "Clic en <code class=\"m\">1 2 3 tres</code>: una lista puede mezclar números y palabras."],
  tip:["En Pd real","La consola es la ventana principal de Pd (Ctrl+R). Ahí van los print y también los errores: miralá siempre."]},
 frio:{short:"Frío / caliente",eyebrow:"Lógica · 02",title:"Inlet caliente, inlet frío",
  lede:"El inlet de la izquierda dispara; los demás solo guardan. Es la regla más importante de la lógica de Pd.",
  body:`<ul>
 <li><code>+ 7</code> suma su entrada izquierda con lo que tenga guardado a la derecha.</li>
 <li>Si cambiás <b>B</b> (inlet derecho, frío) no sale nada: el valor queda guardado, esperando.</li>
 <li>Cuando llega algo a la izquierda (<b>A</b>, caliente), calcula y saca el resultado.</li>
 <li>Un <b>bang</b> en el inlet caliente recalcula con los valores guardados.</li>
 <li>Para qué sirve: preparás varios datos y disparás una sola vez, en el momento justo.</li></ul>`,
  tryit:["Llevá B a 12: no cambia nada. Ahora tocá el bang: sube una octava.",
   "Arrastrá A: cada cambio sale al instante.",
   "Mirá la consola: solo imprime cuando se dispara el inlet izquierdo."],
  tip:["Vale para casi todo","<code>f</code>, <code>*</code>, <code>metro</code>, <code>moses</code>, <code>random</code>, <code>pack</code>: la izquierda es caliente, el resto frío."]},
 orden:{short:"Orden",eyebrow:"Lógica · 03",title:"De derecha a izquierda",
  lede:"Cuando un objeto tiene varios outlets, dispara primero el de la derecha. trigger (o t) hace ese orden explícito.",
  body:`<ul>
 <li><code>t b f</code> recibe una nota y la reparte: primero el <b>f</b> (outlet derecho) va a <code>mtof</code> → <code class="s">osc~</code>; después el <b>b</b> (izquierdo) dispara la envolvente.</li>
 <li>Así la altura ya está lista cuando arranca el sonido. Al revés, oirías un golpe con la nota anterior.</li>
 <li>Si conectás un outlet a varios lugares (<b>fan-out</b>), Pd no garantiza el orden. Si el orden importa, usá <code>t</code>.</li>
 <li>Letras de trigger: <code>b</code> bang, <code>f</code> float, <code>s</code> symbol, <code>l</code> list, <code>a</code> anything.</li></ul>`,
  tryit:["Tocá el bang de la derecha y seguí los puntos: primero, segundo, tercero. La consola lo confirma.",
   "Arrastrá “nota”: cada cambio es altura nueva + golpe de envolvente.",
   "Mirá el osciloscopio en modo envolvente: cada golpe es una montaña."],
  tip:["Regla práctica","Todo outlet que va a más de un lugar es sospechoso. Ponele un <code>t</code> y dormí tranquilo."]},
 senal:{short:"Señal",eyebrow:"Señal · 04",title:"La señal nunca para",
  lede:"Los objetos con ~ trabajan a velocidad de audio: calculan 44.100 números por segundo mientras el DSP esté prendido.",
  body:`<ul>
 <li><code class="s">osc~</code> genera una senoidal entre −1 y 1. Un número en su inlet izquierdo cambia la frecuencia.</li>
 <li><code class="s">*~</code> multiplica: es un VCA. Sin argumento, su inlet derecho espera una señal.</li>
 <li><code class="m">$1 30</code> + <code class="s">line~</code>: “andá a este valor en 30 ms”. Sin la rampa, cada salto de volumen hace clic.</li>
 <li><code class="s">dac~</code> es la salida: inlet izquierdo L, derecho R. Mantené todo por debajo de 1 o satura.</li></ul>`,
  tryit:["Mové la frecuencia rápido y mirá cómo se aprietan las ondas en el osciloscopio.",
   "Llevá el volumen a 0 y volvé: sin clics, gracias a line~.",
   "Pasá el osciloscopio a “espectro”: una senoidal es una sola barra."],
  tip:["En Pd real","Ctrl+/ prende el DSP y Ctrl+. lo apaga. Acá los sliders mandan su valor al prender; en Pd usarías <code>loadbang</code> para eso."]},
 aditiva:{short:"Aditiva",eyebrow:"Síntesis · 05",title:"Sumar senoidales",
  lede:"Cualquier sonido periódico es una suma de senoidales. Con cuatro osc~ en múltiplos de una fundamental ya armás timbres.",
  body:`<ul>
 <li>Varios cables de señal que entran al mismo inlet <b>se suman solos</b>.</li>
 <li><code>* 2</code>, <code>* 3</code>, <code>* 4</code> calculan los armónicos en el mundo de control.</li>
 <li>Cada <code class="s">*~</code> es el volumen de un armónico. El slider le escribe al inlet derecho (frío, guarda la ganancia).</li>
 <li><code class="s">*~ 0.15</code> al final: la suma de cuatro ondas puede pasar de 1.</li></ul>`,
  tryit:["Bajá todo menos el 1: senoidal pura, una sola barra en el espectro.",
   "Solo 1 y 3 arriba: sonido hueco, tipo clarinete.",
   "Arrastrá la fundamental: los cuatro osciladores la siguen."],
  tip:["Más allá","Con <code>sinesum</code> en un array (lección 13) hacés lo mismo con 64 armónicos en un solo oscilador."]},
 ring:{short:"Ring / AM",eyebrow:"Síntesis · 06",title:"Multiplicar dos señales",
  lede:"Si multiplicás una señal por otra, una controla la amplitud de la otra. Lento es trémolo; rápido aparecen frecuencias nuevas.",
  body:`<ul>
 <li><b>Ring modulation</b>: <code class="s">*~</code> sin argumento, una señal en cada inlet.</li>
 <li>La salida contiene <b>portadora + moduladora</b> y <b>portadora − moduladora</b>; la portadora desaparece.</li>
 <li>Por debajo de unos 20 Hz el oído lo escucha como trémolo, no como notas nuevas.</li>
 <li>Para <b>AM clásica</b> sumale un offset a la moduladora: <code class="s">*~ 0.5</code> → <code class="s">+~ 0.5</code>. Nunca es negativa y la portadora queda.</li></ul>`,
  tryit:["Moduladora en 4 Hz: trémolo.",
   "Llevala a 150 Hz: sonido metálico de campana rota.",
   "En el espectro vas a ver dos picos a los lados de donde estaba la portadora."],
  tip:["Slider logarítmico","La moduladora usa escala log: más recorrido en las frecuencias bajas, donde pasan las cosas lentas."]},
 fm:{short:"FM",eyebrow:"Síntesis · 07",title:"Frecuencia que baila",
  lede:"En FM la moduladora no toca el volumen: mueve la frecuencia de la portadora. Con dos osciladores salen campanas, bajos y metales.",
  body:`<ul>
 <li><code class="s">osc~ 110</code> → <code class="s">*~ 0</code>: una señal que va de −índice a +índice (en Hz).</li>
 <li><code class="s">+~ 220</code> le suma la frecuencia de la portadora.</li>
 <li>Esa señal entra al inlet izquierdo del segundo <code class="s">osc~</code>: si a un osc~ le entra señal, la usa como frecuencia.</li>
 <li>Relación entera (220/110 = 2) → armónico. No entera → inarmónico: campanas, metales.</li></ul>`,
  tryit:["Índice en 0: senoidal pura. Subilo despacio y aparece el brillo.",
   "Moduladora cerca de 157 Hz: campana.",
   "Moduladora en 3 Hz con índice alto: sirena (vibrato exagerado)."],
  tip:["Argumento = inlet de control","<code class=\"s\">*~ 0</code> con argumento acepta números en el inlet derecho. <code class=\"s\">*~</code> sin argumento espera señal ahí."]},
 filtros:{short:"Filtros",eyebrow:"Síntesis · 08",title:"Esculpir con filtros",
  lede:"Empezás con una onda llena de armónicos y le sacás con un filtro. phasor~ es una diente de sierra; vcf~ es un filtro que acepta señal como frecuencia.",
  body:`<ul>
 <li>El LFO <code class="s">osc~ 0.25</code> va de −1 a 1, una vez cada 4 segundos.</li>
 <li><b>Escalar y desplazar</b>: <code class="s">*~ 900</code> lo lleva a ±900 y <code class="s">+~ 1100</code> lo centra en 1100. El filtro barre entre 200 y 2000 Hz. Vas a usar este patrón todo el tiempo.</li>
 <li><code class="s">vcf~</code> tiene dos salidas: pasa-banda (izquierda) y pasa-bajos (derecha). Acá usamos la derecha.</li>
 <li>El tercer inlet es la <b>Q</b>: más alta, más resonancia y más silbido.</li></ul>`,
  tryit:["Q en 20 con LFO lento: wah.",
   "LFO a 6 Hz: burbujeo.",
   "Altura en 40 Hz y profundidad alta: bajo ácido."],
  tip:["Filtros más simples","<code class=\"s\">lop~</code>, <code class=\"s\">hip~</code> y <code class=\"s\">bp~</code> son más baratos y aceptan frecuencia como número."]},
 envolventes:{short:"Envolventes",eyebrow:"Tiempo · 09",title:"Darle forma al tiempo",
  lede:"Una envolvente es una señal que sube y baja y multiplica al sonido. vline~ la dibuja con mensajes de tres números: destino, tiempo y demora.",
  body:`<ul>
 <li>Cada mensaje es <code class="m">destino tiempo demora</code>, en milisegundos.</li>
 <li>La <b>coma</b> separa mensajes que salen juntos; la demora los ubica en el tiempo.</li>
 <li><code class="m">1 2, 0 220 2</code> = subí a 1 en 2 ms; a los 2 ms, bajá a 0 en 220 ms.</li>
 <li>Con más segmentos armás ataque, decay, sustain y release. <code class="s">vline~</code> es preciso a la muestra; <code class="s">line~</code> no acepta demora.</li></ul>`,
  tryit:["Clics rápidos en “pluck”.",
   "Disparar “pad” y, mientras suena, “pluck”: la nueva envolvente arranca desde donde estaba.",
   "Pensá cómo escribir un ataque de 50 ms y caída de 500: <code class=\"m\">1 50, 0 500 50</code>."],
  tip:["Precisión","Los tiempos de vline~ se calculan dentro del bloque de audio, por eso dos clics seguidos nunca “se pisan” con ruido."]},
 secuenciador:{short:"Secuenciador",eyebrow:"Tiempo · 10",title:"Contar pasos",
  lede:"Un reloj, un contador y una tabla: el esqueleto de todo secuenciador.",
  body:`<ul>
 <li><code>metro</code> manda un bang cada N milisegundos mientras el toggle esté en 1.</li>
 <li>El contador clásico: <code>f</code> guarda un número; su salida pasa por <code>+ 1</code> y <code>mod 8</code> y vuelve al inlet <b>frío</b> de <code>f</code>.</li>
 <li>Como vuelve al frío, no se re-dispara: espera el próximo bang. Si volviera al caliente, sería un loop infinito (stack overflow).</li>
 <li><code>tabread seq</code> lee el valor de ese paso. <code>t b f</code>: primero la altura, después el golpe.</li></ul>`,
  tryit:["Play y dibujá en la tabla <b>seq</b> con el mouse o el dedo, mientras suena.",
   "Bajá el tempo a 90 ms.",
   "En Pd, cambiá <code>mod 8</code> por <code>mod 5</code>: loop de 5 pasos contra otro de 8 = polirritmia."],
  tip:["Fan-out tolerable","La salida de <code>f</code> va a tres lados. Acá no importa el orden porque el camino de <code>+ 1</code> termina en un inlet frío."]},
 generativo:{short:"Azar",eyebrow:"Tiempo · 11",title:"Azar con reglas",
  lede:"El azar puro suena a ruido. Filtrado por una escala y una probabilidad, suena a música.",
  body:`<ul>
 <li><code>random 100</code> → <code>moses 65</code>: los números menores a 65 salen por la izquierda (65% de las veces). El resto se descarta: silencios.</li>
 <li><code>random 8</code> elige una posición de la tabla <b>escala</b>, que guarda una pentatónica en semitonos.</li>
 <li><code>+ 60</code> la transporta a Do central y <code>mtof</code> la pasa a Hz.</li>
 <li>El slider de probabilidad escribe en el inlet frío de <code>moses</code>: el umbral.</li></ul>`,
  tryit:["Probabilidad en 30%: frases con aire.",
   "Dibujá otra escala en la tabla (cada barra es un semitono sobre Do).",
   "Probabilidad al 100%: lluvia continua de notas."],
  tip:["Generativo controlado","Cambiá <code>random 8</code> por <code>random 4</code> en Pd y el rango se achica: más repetición, más motivo."]},
 delay:{short:"Delay",eyebrow:"Tiempo · 12",title:"Ecos con cables invisibles",
  lede:"delwrite~ graba la señal en una memoria con nombre; delread~ la lee tarde. Están unidos por el nombre, no por un cable.",
  body:`<ul>
 <li><code class="s">delwrite~ eco 2000</code> = una memoria llamada “eco” de 2 segundos.</li>
 <li><code class="s">delread~ eco 320</code> = leé esa memoria 320 ms atrás. El número en su inlet cambia el tiempo.</li>
 <li><b>Feedback</b>: lo que sale del delay vuelve a entrar al delwrite~ multiplicado por menos de 1. Cada eco es más bajo que el anterior.</li>
 <li>Con 1 o más se acumula para siempre. Mismo truco por nombre: <code class="s">send~</code>/<code class="s">receive~</code>, <code class="s">throw~</code>/<code class="s">catch~</code>.</li></ul>`,
  tryit:["Tocá el bang varias veces y escuchá los rebotes.",
   "Tiempo en 160 ms con feedback 0.8: ecos rítmicos.",
   "Tiempo cortísimo (30–40 ms): resonancia metálica (comb filter)."],
  tip:["El único loop permitido","En señal no podés hacer un loop con cables comunes. Con delwrite~/delread~ sí: hay como mínimo un bloque (64 muestras) de demora."]},
 tablas:{short:"Tablas",eyebrow:"Memoria · 13",title:"Dibujar una onda",
  lede:"Un array es una lista de números que podés ver y dibujar. Con tabosc4~ se convierte en el ciclo de un oscilador.",
  body:`<ul>
 <li><code class="s">tabosc4~ onda</code> recorre la tabla en loop a la frecuencia que le pidas. Necesita 2ⁿ + 3 puntos: 64 + 3 = 67.</li>
 <li>Los mensajes que empiezan con <code class="m">;</code> se mandan <b>por nombre</b>, sin cable.</li>
 <li><code class="m">; onda sinesum 64 1 0.5</code> le dice al array “onda”: rellenate con armónicos de amplitud 1 y 0.5.</li>
 <li>Dibujá encima con el mouse: el timbre cambia en vivo.</li></ul>`,
  tryit:["Dibujá una línea con picos y escuchá cómo se ensucia.",
   "Clic en “cuadrada” y pasá el osciloscopio a espectro: solo armónicos impares.",
   "Frecuencia en 40 Hz: oís la forma de onda casi como ritmo."],
  tip:["sinesum no normaliza","Si las amplitudes suman más de 1, la onda se sale del gráfico. <code class=\"m\">; onda normalize 1</code> la vuelve a encuadrar."]},
}};
