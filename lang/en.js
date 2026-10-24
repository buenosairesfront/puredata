/* English */
PD_I18N.en={
ui:{
 docTitle:'Pd Lab · U-MA',
 metaDesc:'Interactive Pure Data course: 14 live patches that play in your browser.',
 kicker:'lab · intermediate level',
 h1sub:'patches that sound',
 lede:'A course to understand how Pd thinks: messages, signal, execution order, synthesis, envelopes, sequencing, delays and tables. Every example is a live patch: you play with the boxes, watch the messages travel and hear it right in the browser.',
 start:'▶ Turn on audio and start',
 cheat:'Object cheat sheet',
 statPatches:'live patches', statSr:'samples / sec', statSig:'= signal',
 keyYel:'<b style="color:var(--yel)">Yellow</b>: a message travelling down a control cord',
 keyCyan:'<b style="color:var(--cyan)">Cyan</b>: audio signal (thick cord, objects with ~)',
 keyMag:'<b style="color:var(--mag)">Magenta</b>: something you can click, drag or draw',
 keyGrey:'Thin grey cord: control at rest',
 refTitle:'Object cheat sheet',
 refIntro:'The objects you will use most in Pd vanilla. In Pd, right-click any object → <b style="color:var(--fg)">Help</b> opens its help patch with examples.',
 refSearch:'Search: osc, delay, random…', refSearchAria:'Search object',
 keysTitle:'Keyboard shortcuts', keysNote:'On a Mac use Cmd instead of Ctrl.',
 nextTitle:'Keep learning',
 footer:'Pd Lab · U-MA universe · the patches on this page export as vanilla .pd files',
 dspOff:'DSP off', panic:'Silence', volAria:'Master volume',
 tryTitle:'Try this',
 scopeView:'Scope view', mWave:'wave', mSpec:'spectrum', mEnv:'envelope', sWave:'oscilloscope',
 scopeIdle:'DSP off · touch any magenta or yellow box',
 pdWindow:'Pd window',
 viewPd:'View as .pd file', copy:'Copy', copied:'Copied', selected:'Selected: Ctrl+C', download:'Download',
 saveAs:'Open it in Pd, or paste it into a text file and save it as',
 navRef:'Cheat sheet',
 rulesTitle:'Golden rules of Pd logic', rulesIntro:'Six ideas that explain almost every “why doesn’t this work?” in a patch.',
 ruleFires:'fires', ruleStores:'stores',
 patchAria:'Pure Data patch: ', msgAria:'message '
},
parts:{leer:['Part 1','The logic of the language'],senal:['Part 2','Signal and synthesis'],tiempo:['Part 3','Time, sequences and memory']},
labels:{
 'mensaje: clic':'message: click','número: arrastrá':'number: drag','slider':'slider','objeto':'object',
 'control: cable fino':'control: thin cord','señal: cable grueso':'signal: thick cord','nota':'note',
 'A · caliente':'A · hot','B · frío':'B · cold','disparar':'fire','frecuencia Hz':'frequency Hz','volumen':'volume',
 'fundamental':'fundamental','portadora Hz':'carrier Hz','moduladora Hz':'modulator Hz','índice Hz':'index Hz','portadora':'carrier',
 'altura Hz':'pitch Hz','profundidad':'depth','paso':'step','probabilidad %':'probability %','tocar':'play',
 'tiempo ms':'time ms','seno':'sine','sierra':'saw','cuadrada':'square'
},
cats:{Todos:'All',Control:'Control','Matemática':'Math',Tiempo:'Time','Señal':'Signal',Filtros:'Filters',Envolventes:'Envelopes',Memoria:'Memory',Tablas:'Tables'},
rules:[
 ['Left is hot','The left inlet fires the output. The other inlets only store values.'],
 ['Right to left','Outlets fire from right to left, and each branch runs to completion before the next one (depth-first).'],
 ['~ means signal','With a tilde: continuous audio, only while DSP is on. Without: messages, when something happens.'],
 ['Fan-out → trigger','One outlet going to several places has no guaranteed order. If order matters, use a <code>t</code>.'],
 ['Loops go to a cold inlet','A cord that goes back up always enters a cold inlet. Otherwise: infinite loop.'],
 ['$1 is a variable','Inside a message, <code class="m">$1</code> takes the first incoming atom; <code class="m">$2</code>, the second.']],
keys:[['Ctrl E','Edit ↔ run mode'],['Ctrl 1','New object'],['Ctrl 2','New message'],['Ctrl 3','New number'],['Ctrl 5','Comment'],
 ['Shift Ctrl B','Bang'],['Shift Ctrl T','Toggle'],['Ctrl /','DSP on (audio)'],['Ctrl .','DSP off'],['Ctrl D','Duplicate selection'],
 ['Ctrl R','Bring up the Pd window (console)'],['Right-click','Object help']],
next:[['Download Pd vanilla','Miller Puckette’s official release, for Mac, Windows and Linux.'],
 ['Theory and Technique of Electronic Music','Puckette’s book, free, with every example made in Pd.'],
 ['puredata.info','Community, forum, externals and documentation.']],
ref:[
 'Writes whatever it receives to the console.',
 'The “now!” message. Triggers without data.',
 'Sends a bang when the patch opens. For initialising.',
 'Distributes a message in order, right to left.',
 'Stores a number. A bang outputs it again.',
 'Like f, but truncates to an integer.',
 'If the number matches, bang out of that outlet.',
 'Routes messages by their first atom.',
 'Splits numbers at a threshold: lower left, the rest right.',
 'Gate: lets messages through if the right inlet ≠ 0.',
 'Only passes the number if it changed.',
 'Builds and splits lists.',
 's / r: invisible cords by name.',
 'Operations. Left is hot, right stores.',
 'Remainder of integer division. Ideal for counters.',
 'Random integer from 0 to N−1 on every bang.',
 'C-style formulas in a single box.',
 'MIDI note ↔ frequency in Hz.',
 'Decibels (0–100) to linear amplitude.',
 'Clock: bang every N ms. 1 starts, 0 stops.',
 'One bang after N ms.',
 'Measures the time between two bangs.',
 'A ramp in the control domain (for GUIs).',
 'Sine wave. Frequency as number or signal.',
 '0→1 ramp: sawtooth, table reading.',
 'White noise.',
 'Audio arithmetic. With an argument, the right inlet takes control.',
 'Sound card audio output and input.',
 'Turns a number into a constant signal.',
 'Clips the signal between two values.',
 'Follows a signal’s loudness (in dB) as numbers.',
 'Grabs a signal’s value when it gets a bang.',
 'Signal cord by name (one to many).',
 'Many to one: for summing into a bus.',
 'One-pole low-pass / high-pass.',
 'Band-pass with frequency and Q.',
 'Resonant filter with signal frequency. Outputs bp and lp.',
 'Signal ramp: target and time.',
 'Ramps with delay, sample-accurate.',
 'Writes and reads a delay line by name.',
 'Interpolated reading with signal delay time (chorus, flanger).',
 'A list of numbers you can see and draw.',
 'Read and write one index of an array.',
 'Oscillator that loops through an array (2ⁿ+3 points).',
 'Load a sound file into an array and play it back.'],
lessons:{
 leer:{short:'Read',eyebrow:'Before you start',title:'How to read a patch',
  lede:'In Pd you don’t write lines of code: you draw boxes and connect them with cords. The drawing is the program, and it runs while you look at it.',
  body:`<ul>
 <li><b>Object</b> (rectangle): does a job. Its name and arguments go inside: <code>metro 500</code>, <code class="s">osc~ 220</code>.</li>
 <li><b>Message</b> (flag shape): holds data. Clicking it sends it out of its outlet.</li>
 <li><b>Number</b> (clipped corner): shows the last value; drag it to change it.</li>
 <li><b>GUI</b>: bang (circle, “now!”), toggle (0/1), slider.</li>
 <li><b>Inlets on top, outlets at the bottom.</b> Data flows down the cords.</li>
 <li>In Pd you edit in <b>edit mode</b> (Ctrl+E) and play in <b>run mode</b>. Here you are always in run mode.</li></ul>
 <div class="lanes">
  <svg viewBox="0 0 320 96" aria-hidden="true">
   <line x1="0" y1="24" x2="320" y2="24" stroke="#9aa1ad" stroke-width="1"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:0s"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:-.9s"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:-2.6s"/>
   <g class="lane-wave"><path d="M0 72 q10 -16 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#1fe2ff" stroke-width="3"/></g>
  </svg>
  <div class="cap"><span><b>Control</b>: separate events, when something happens</span><span><b class="c">Signal ~</b>: 44,100 numbers per second, non-stop</span></div>
 </div>`,
  tryit:['Click the <code class="m">440</code> message: the number box below receives it.','Hit the bang on the right and watch the console: <code>hola: bang</code> shows up.','Look at the box colours: yellow = messages, cyan = signal, magenta = controls to play with.'],
  tip:['The little squares','Cyan inlets and outlets are signal; grey ones are control. Pd won’t let you connect a signal outlet to an inlet that only accepts control.']},
 mensajes:{short:'Messages',eyebrow:'Logic · 01',title:'Everything is a message',
  lede:'A message is a list of atoms: numbers (floats) and words (symbols). It only travels when something fires it: a click, a clock, another object.',
  body:`<ul>
 <li><b>float</b>: a number, <code class="m">60</code>. <b>symbol</b>: a word. <b>list</b>: several atoms, <code class="m">1 2 3 tres</code>.</li>
 <li><code>print</code> writes whatever it gets to the Pd window, with its name in front.</li>
 <li><code class="m">$1</code> inside a message is a variable: it is replaced by the first incoming atom. <code class="m">nota $1</code> + 64 → <code>nota 64</code>.</li>
 <li><code>mtof</code> converts a MIDI note into Hz: 60 is middle C (261.6 Hz), 69 is A 440.</li></ul>`,
  tryit:['Click 60, 64, 67, 72: a C major arpeggio.','Drag the number on the right and watch how <code class="m">nota $1</code> builds the phrase in the console.','Click <code class="m">1 2 3 tres</code>: a list can mix numbers and words.'],
  tip:['In real Pd','The console is Pd’s main window (Ctrl+R). Prints go there, and so do errors: always keep an eye on it.']},
 frio:{short:'Hot / cold',eyebrow:'Logic · 02',title:'Hot inlet, cold inlet',
  lede:'The left inlet fires; the others only store. It is the most important rule of Pd logic.',
  body:`<ul>
 <li><code>+ 7</code> adds its left input to whatever is stored on the right.</li>
 <li>If you change <b>B</b> (right inlet, cold) nothing comes out: the value is stored, waiting.</li>
 <li>When something arrives on the left (<b>A</b>, hot), it computes and outputs the result.</li>
 <li>A <b>bang</b> on the hot inlet recomputes with the stored values.</li>
 <li>Why it’s useful: you prepare several values and fire once, at the right moment.</li></ul>`,
  tryit:['Set B to 12: nothing changes. Now hit the bang: it jumps up an octave.','Drag A: every change comes out instantly.','Watch the console: it only prints when the left inlet fires.'],
  tip:['Works for almost everything','<code>f</code>, <code>*</code>, <code>metro</code>, <code>moses</code>, <code>random</code>, <code>pack</code>: left is hot, the rest cold.']},
 orden:{short:'Order',eyebrow:'Logic · 03',title:'Right to left',
  lede:'When an object has several outlets, the rightmost fires first. trigger (or t) makes that order explicit.',
  body:`<ul>
 <li><code>t b f</code> takes a note and hands it out: first the <b>f</b> (right outlet) goes to <code>mtof</code> → <code class="s">osc~</code>; then the <b>b</b> (left) fires the envelope.</li>
 <li>That way the pitch is already set when the sound starts. The other way round you would hear a hit with the previous note.</li>
 <li>If you connect one outlet to several places (<b>fan-out</b>), Pd doesn’t guarantee the order. If order matters, use <code>t</code>.</li>
 <li>Trigger letters: <code>b</code> bang, <code>f</code> float, <code>s</code> symbol, <code>l</code> list, <code>a</code> anything.</li></ul>`,
  tryit:['Hit the bang on the right and follow the dots: first, second, third. The console confirms it.','Drag “note”: every change is a new pitch + an envelope hit.','Look at the scope in envelope mode: each hit is a mountain.'],
  tip:['Rule of thumb','Any outlet going to more than one place is suspicious. Put a <code>t</code> on it and sleep easy.']},
 senal:{short:'Signal',eyebrow:'Signal · 04',title:'The signal never stops',
  lede:'Objects with ~ work at audio rate: they compute 44,100 numbers per second as long as DSP is on.',
  body:`<ul>
 <li><code class="s">osc~</code> generates a sine wave between −1 and 1. A number in its left inlet changes the frequency.</li>
 <li><code class="s">*~</code> multiplies: it’s a VCA. Without an argument, its right inlet expects a signal.</li>
 <li><code class="m">$1 30</code> + <code class="s">line~</code>: “go to this value in 30 ms”. Without the ramp, every volume jump clicks.</li>
 <li><code class="s">dac~</code> is the output: left inlet L, right inlet R. Keep everything below 1 or it clips.</li></ul>`,
  tryit:['Move the frequency fast and watch the waves squeeze together on the scope.','Bring the volume to 0 and back: no clicks, thanks to line~.','Switch the scope to “spectrum”: a sine wave is a single bar.'],
  tip:['In real Pd','Ctrl+/ turns DSP on and Ctrl+. turns it off. Here the sliders send their value when DSP starts; in Pd you would use <code>loadbang</code> for that.']},
 aditiva:{short:'Additive',eyebrow:'Synthesis · 05',title:'Adding sine waves',
  lede:'Any periodic sound is a sum of sine waves. With four osc~ at multiples of a fundamental you can already build timbres.',
  body:`<ul>
 <li>Several signal cords going into the same inlet <b>are summed automatically</b>.</li>
 <li><code>* 2</code>, <code>* 3</code>, <code>* 4</code> compute the harmonics in the control domain.</li>
 <li>Each <code class="s">*~</code> is one harmonic’s volume. The slider writes to the right inlet (cold, it stores the gain).</li>
 <li><code class="s">*~ 0.15</code> at the end: the sum of four waves can go over 1.</li></ul>`,
  tryit:['Turn everything down except 1: a pure sine, a single bar in the spectrum.','Only 1 and 3 up: a hollow, clarinet-like sound.','Drag the fundamental: all four oscillators follow it.'],
  tip:['Going further','With <code>sinesum</code> on an array (lesson 13) you do the same with 64 harmonics in a single oscillator.']},
 ring:{short:'Ring / AM',eyebrow:'Synthesis · 06',title:'Multiplying two signals',
  lede:'If you multiply one signal by another, one controls the other’s amplitude. Slow, it’s tremolo; fast, new frequencies appear.',
  body:`<ul>
 <li><b>Ring modulation</b>: <code class="s">*~</code> with no argument, one signal in each inlet.</li>
 <li>The output contains <b>carrier + modulator</b> and <b>carrier − modulator</b>; the carrier disappears.</li>
 <li>Below about 20 Hz the ear hears it as tremolo, not as new notes.</li>
 <li>For <b>classic AM</b> add an offset to the modulator: <code class="s">*~ 0.5</code> → <code class="s">+~ 0.5</code>. It is never negative and the carrier remains.</li></ul>`,
  tryit:['Modulator at 4 Hz: tremolo.','Take it to 150 Hz: a metallic, broken-bell sound.','In the spectrum you will see two peaks on either side of where the carrier was.'],
  tip:['Logarithmic slider','The modulator uses a log scale: more travel in the low frequencies, where the slow things happen.']},
 fm:{short:'FM',eyebrow:'Synthesis · 07',title:'Dancing frequency',
  lede:'In FM the modulator doesn’t touch the volume: it moves the carrier’s frequency. Two oscillators give you bells, basses and brass.',
  body:`<ul>
 <li><code class="s">osc~ 110</code> → <code class="s">*~ 0</code>: a signal that swings from −index to +index (in Hz).</li>
 <li><code class="s">+~ 220</code> adds the carrier frequency to it.</li>
 <li>That signal goes into the left inlet of the second <code class="s">osc~</code>: if an osc~ receives a signal, it uses it as its frequency.</li>
 <li>Integer ratio (220/110 = 2) → harmonic. Non-integer → inharmonic: bells, metal.</li></ul>`,
  tryit:['Index at 0: a pure sine. Raise it slowly and the brightness appears.','Modulator around 157 Hz: a bell.','Modulator at 3 Hz with a high index: a siren (exaggerated vibrato).'],
  tip:['Argument = control inlet','<code class="s">*~ 0</code> with an argument accepts numbers in its right inlet. <code class="s">*~</code> without an argument expects a signal there.']},
 filtros:{short:'Filters',eyebrow:'Synthesis · 08',title:'Sculpting with filters',
  lede:'You start with a wave full of harmonics and carve it with a filter. phasor~ is a sawtooth; vcf~ is a filter that takes a signal as frequency.',
  body:`<ul>
 <li>The LFO <code class="s">osc~ 0.25</code> goes from −1 to 1, once every 4 seconds.</li>
 <li><b>Scale and offset</b>: <code class="s">*~ 900</code> takes it to ±900 and <code class="s">+~ 1100</code> centres it on 1100. The filter sweeps between 200 and 2000 Hz. You will use this pattern all the time.</li>
 <li><code class="s">vcf~</code> has two outputs: band-pass (left) and low-pass (right). Here we use the right one.</li>
 <li>The third inlet is the <b>Q</b>: higher means more resonance and more whistle.</li></ul>`,
  tryit:['Q at 20 with a slow LFO: wah.','LFO at 6 Hz: bubbling.','Pitch at 40 Hz and high depth: acid bass.'],
  tip:['Simpler filters','<code class="s">lop~</code>, <code class="s">hip~</code> and <code class="s">bp~</code> are cheaper and take the frequency as a number.']},
 envolventes:{short:'Envelopes',eyebrow:'Time · 09',title:'Shaping time',
  lede:'An envelope is a signal that rises and falls and multiplies the sound. vline~ draws it with three-number messages: target, time and delay.',
  body:`<ul>
 <li>Each message is <code class="m">target time delay</code>, in milliseconds.</li>
 <li>The <b>comma</b> separates messages sent together; the delay places them in time.</li>
 <li><code class="m">1 2, 0 220 2</code> = rise to 1 in 2 ms; after 2 ms, fall to 0 in 220 ms.</li>
 <li>With more segments you build attack, decay, sustain and release. <code class="s">vline~</code> is sample-accurate; <code class="s">line~</code> doesn’t take a delay.</li></ul>`,
  tryit:['Click “pluck” quickly.','Fire “pad” and, while it sounds, “pluck”: the new envelope starts from wherever it was.','Think how to write a 50 ms attack and a 500 ms fall: <code class="m">1 50, 0 500 50</code>.'],
  tip:['Precision','vline~ times are computed inside the audio block, so two quick clicks never “step on each other” with noise.']},
 secuenciador:{short:'Sequencer',eyebrow:'Time · 10',title:'Counting steps',
  lede:'A clock, a counter and a table: the skeleton of every sequencer.',
  body:`<ul>
 <li><code>metro</code> sends a bang every N milliseconds while the toggle is at 1.</li>
 <li>The classic counter: <code>f</code> stores a number; its output goes through <code>+ 1</code> and <code>mod 8</code> and back into the <b>cold</b> inlet of <code>f</code>.</li>
 <li>Because it comes back to the cold inlet, it doesn’t re-fire: it waits for the next bang. If it came back to the hot one, it would be an infinite loop (stack overflow).</li>
 <li><code>tabread seq</code> reads that step’s value. <code>t b f</code>: pitch first, then the hit.</li></ul>`,
  tryit:['Press play and draw on the <b>seq</b> table with the mouse or your finger while it plays.','Bring the tempo down to 90 ms.','In Pd, change <code>mod 8</code> to <code>mod 5</code>: a 5-step loop against an 8-step one = polyrhythm.'],
  tip:['Harmless fan-out','The output of <code>f</code> goes three ways. Order doesn’t matter here because the <code>+ 1</code> path ends in a cold inlet.']},
 generativo:{short:'Chance',eyebrow:'Time · 11',title:'Chance with rules',
  lede:'Pure chance sounds like noise. Filtered through a scale and a probability, it sounds like music.',
  body:`<ul>
 <li><code>random 100</code> → <code>moses 65</code>: numbers below 65 go out on the left (65% of the time). The rest are discarded: rests.</li>
 <li><code>random 8</code> picks a position in the <b>escala</b> (scale) table, which holds a pentatonic scale in semitones.</li>
 <li><code>+ 60</code> transposes it to middle C and <code>mtof</code> turns it into Hz.</li>
 <li>The probability slider writes to the cold inlet of <code>moses</code>: the threshold.</li></ul>`,
  tryit:['Probability at 30%: airy phrases.','Draw another scale in the table (each bar is a semitone above C).','Probability at 100%: a continuous rain of notes.'],
  tip:['Controlled generative','Change <code>random 8</code> to <code>random 4</code> in Pd and the range shrinks: more repetition, more motif.']},
 delay:{short:'Delay',eyebrow:'Time · 12',title:'Echoes through invisible cords',
  lede:'delwrite~ records the signal into a named memory; delread~ reads it back later. They are linked by name, not by a cord.',
  body:`<ul>
 <li><code class="s">delwrite~ eco 2000</code> = a memory called “eco” (echo), 2 seconds long.</li>
 <li><code class="s">delread~ eco 320</code> = read that memory 320 ms in the past. A number in its inlet changes the time.</li>
 <li><b>Feedback</b>: what comes out of the delay goes back into delwrite~ multiplied by less than 1. Each echo is quieter than the last.</li>
 <li>At 1 or more it builds up forever. Same trick by name: <code class="s">send~</code>/<code class="s">receive~</code>, <code class="s">throw~</code>/<code class="s">catch~</code>.</li></ul>`,
  tryit:['Hit the bang a few times and listen to the bounces.','Time at 160 ms with feedback 0.8: rhythmic echoes.','Very short time (30–40 ms): metallic resonance (comb filter).'],
  tip:['The only loop allowed','In signal-land you can’t make a loop with ordinary cords. With delwrite~/delread~ you can: there is at least one block (64 samples) of delay.']},
 tablas:{short:'Tables',eyebrow:'Memory · 13',title:'Drawing a wave',
  lede:'An array is a list of numbers you can see and draw. With tabosc4~ it becomes the cycle of an oscillator.',
  body:`<ul>
 <li><code class="s">tabosc4~ onda</code> loops through the table at whatever frequency you ask. It needs 2ⁿ + 3 points: 64 + 3 = 67.</li>
 <li>Messages starting with <code class="m">;</code> are sent <b>by name</b>, without a cord.</li>
 <li><code class="m">; onda sinesum 64 1 0.5</code> tells the array “onda” (wave): fill yourself with harmonics of amplitude 1 and 0.5.</li>
 <li>Draw over it with the mouse: the timbre changes live.</li></ul>`,
  tryit:['Draw a spiky line and hear how it gets dirty.','Click “square” and switch the scope to spectrum: odd harmonics only.','Frequency at 40 Hz: you almost hear the waveform as a rhythm.'],
  tip:['sinesum doesn’t normalise','If the amplitudes add up to more than 1, the wave goes off the graph. <code class="m">; onda normalize 1</code> brings it back in frame.']}
}};
