/* Deutsch */
PD_I18N.de={
ui:{
 docTitle:'Pd-Labor · U-MA',
 metaDesc:'Interaktiver Pure-Data-Kurs: 14 lebendige Patches, die im Browser klingen.',
 kicker:'Labor · Mittelstufe',
 h1sub:'Patches, die klingen',
 lede:'Ein Kurs, um zu verstehen, wie Pd denkt: Nachrichten, Signal, Ausführungsreihenfolge, Synthese, Hüllkurven, Sequenzen, Delays und Tabellen. Jedes Beispiel ist ein lebendiger Patch: Du spielst mit den Boxen, siehst die Nachrichten wandern und hörst alles direkt im Browser.',
 start:'▶ Audio einschalten und loslegen',
 cheat:'Objekt-Spickzettel',
 statPatches:'lebendige Patches', statSr:'Samples / Sek.', statSig:'= Signal',
 keyYel:'<b style="color:var(--yel)">Gelb</b>: eine Nachricht, die durch ein Steuerkabel wandert',
 keyCyan:'<b style="color:var(--cyan)">Cyan</b>: Audiosignal (dickes Kabel, Objekte mit ~)',
 keyMag:'<b style="color:var(--mag)">Magenta</b>: etwas, das du anklicken, ziehen oder zeichnen kannst',
 keyGrey:'Dünnes graues Kabel: Steuerung in Ruhe',
 refTitle:'Objekt-Spickzettel',
 refIntro:'Die Objekte, die du in Pd vanilla am häufigsten brauchst. In Pd öffnet Rechtsklick auf ein Objekt → <b style="color:var(--fg)">Hilfe</b> seinen Hilfe-Patch mit Beispielen.',
 refSearch:'Suchen: osc, delay, random…', refSearchAria:'Objekt suchen',
 keysTitle:'Tastenkürzel', keysNote:'Auf dem Mac Cmd statt Ctrl verwenden.',
 nextTitle:'Weiterlernen',
 footer:'Pd-Labor · U-MA-Universum · die Patches dieser Seite lassen sich als Vanilla-.pd exportieren',
 dspOff:'DSP aus', panic:'Stille', volAria:'Gesamtlautstärke',
 tryTitle:'Probier das',
 scopeView:'Oszilloskop-Ansicht', mWave:'Welle', mSpec:'Spektrum', mEnv:'Hüllkurve', sWave:'Oszilloskop',
 scopeIdle:'DSP aus · tippe auf eine magenta oder gelbe Box',
 pdWindow:'Pd-Fenster',
 viewPd:'Als .pd-Datei ansehen', copy:'Kopieren', copied:'Kopiert', selected:'Markiert: Ctrl+C', download:'Herunterladen',
 saveAs:'Öffne sie in Pd oder füge sie in eine Textdatei ein und speichere sie als',
 navRef:'Spickzettel',
 rulesTitle:'Goldene Regeln der Pd-Logik', rulesIntro:'Sechs Ideen, die fast jedes „Warum geht das nicht?“ in einem Patch erklären.',
 ruleFires:'löst aus', ruleStores:'speichert',
 patchAria:'Pure-Data-Patch: ', msgAria:'Nachricht '
},
parts:{leer:['Teil 1','Die Logik der Sprache'],senal:['Teil 2','Signal und Synthese'],tiempo:['Teil 3','Zeit, Sequenzen und Speicher']},
labels:{
 'mensaje: clic':'Nachricht: klicken','número: arrastrá':'Zahl: ziehen','slider':'Schieberegler','objeto':'Objekt',
 'control: cable fino':'Steuerung: dünnes Kabel','señal: cable grueso':'Signal: dickes Kabel','nota':'Note',
 'A · caliente':'A · heiß','B · frío':'B · kalt','disparar':'auslösen','frecuencia Hz':'Frequenz Hz','volumen':'Lautstärke',
 'fundamental':'Grundton','portadora Hz':'Träger Hz','moduladora Hz':'Modulator Hz','índice Hz':'Index Hz','portadora':'Träger',
 'altura Hz':'Tonhöhe Hz','profundidad':'Tiefe','paso':'Schritt','probabilidad %':'Wahrscheinlichkeit %','tocar':'spielen',
 'tiempo ms':'Zeit ms','seno':'Sinus','sierra':'Sägezahn','cuadrada':'Rechteck'
},
cats:{Todos:'Alle',Control:'Steuerung','Matemática':'Mathe',Tiempo:'Zeit','Señal':'Signal',Filtros:'Filter',Envolventes:'Hüllkurven',Memoria:'Speicher',Tablas:'Tabellen'},
rules:[
 ['Links ist heiß','Der linke Inlet löst die Ausgabe aus. Die anderen speichern nur Werte.'],
 ['Von rechts nach links','Outlets feuern von rechts nach links, und jeder Zweig läuft komplett durch, bevor der nächste beginnt (depth-first).'],
 ['~ heißt Signal','Mit Tilde: kontinuierliches Audio, nur bei eingeschaltetem DSP. Ohne: Nachrichten, wenn etwas passiert.'],
 ['Fan-out → trigger','Ein Outlet zu mehreren Zielen hat keine garantierte Reihenfolge. Wenn sie wichtig ist, setz ein <code>t</code> davor.'],
 ['Schleifen in den kalten Inlet','Ein Kabel, das nach oben zurückläuft, geht immer in einen kalten Inlet. Sonst: Endlosschleife.'],
 ['$1 ist eine Variable','In einer Nachricht nimmt <code class="m">$1</code> das erste ankommende Atom, <code class="m">$2</code> das zweite.']],
keys:[['Ctrl E','Bearbeiten ↔ Ausführen'],['Ctrl 1','Neues Objekt'],['Ctrl 2','Neue Nachricht'],['Ctrl 3','Neue Zahl'],['Ctrl 5','Kommentar'],
 ['Shift Ctrl B','Bang'],['Shift Ctrl T','Toggle'],['Ctrl /','DSP an (Audio)'],['Ctrl .','DSP aus'],['Ctrl D','Auswahl duplizieren'],
 ['Ctrl R','Pd-Fenster (Konsole) nach vorne'],['Rechtsklick','Hilfe zum Objekt']],
next:[['Pd vanilla herunterladen','Die offizielle Version von Miller Puckette, für Mac, Windows und Linux.'],
 ['Theory and Technique of Electronic Music','Puckettes Buch, kostenlos, mit allen Beispielen in Pd.'],
 ['puredata.info','Community, Forum, Externals und Dokumentation.']],
ref:[
 'Schreibt alles, was ankommt, in die Konsole.',
 'Die „Jetzt!“-Nachricht. Löst ohne Daten aus.',
 'Sendet beim Öffnen des Patches ein Bang. Zum Initialisieren.',
 'Verteilt eine Nachricht der Reihe nach, von rechts nach links.',
 'Speichert eine Zahl. Ein Bang gibt sie erneut aus.',
 'Wie f, schneidet aber auf eine ganze Zahl ab.',
 'Stimmt die Zahl überein, Bang aus diesem Outlet.',
 'Leitet Nachrichten nach ihrem ersten Atom weiter.',
 'Teilt Zahlen an einer Schwelle: kleinere links, der Rest rechts.',
 'Tor: lässt durch, wenn der rechte Inlet ≠ 0 ist.',
 'Lässt nur durch, wenn sich die Zahl geändert hat.',
 'Baut Listen zusammen und zerlegt sie.',
 's / r: unsichtbare Kabel über Namen.',
 'Rechenarten. Links heiß, rechts speichert.',
 'Rest der ganzzahligen Division. Ideal für Zähler.',
 'Zufällige ganze Zahl von 0 bis N−1 bei jedem Bang.',
 'Formeln im C-Stil in einer einzigen Box.',
 'MIDI-Note ↔ Frequenz in Hz.',
 'Dezibel (0–100) in lineare Amplitude.',
 'Uhr: Bang alle N ms. 1 startet, 0 stoppt.',
 'Ein Bang nach N ms.',
 'Misst die Zeit zwischen zwei Bangs.',
 'Rampe im Steuerbereich (für GUIs).',
 'Sinuswelle. Frequenz als Zahl oder Signal.',
 'Rampe 0→1: Sägezahn, Tabellen lesen.',
 'Weißes Rauschen.',
 'Audio-Arithmetik. Mit Argument nimmt der rechte Inlet Steuerdaten.',
 'Audioausgang und -eingang der Soundkarte.',
 'Wandelt eine Zahl in ein konstantes Signal.',
 'Begrenzt das Signal zwischen zwei Werten.',
 'Folgt der Lautstärke eines Signals (in dB) als Zahlen.',
 'Holt den Wert eines Signals bei einem Bang.',
 'Signalkabel über Namen (eins zu vielen).',
 'Viele zu einem: zum Summieren auf einen Bus.',
 'Einpoliger Tiefpass / Hochpass.',
 'Bandpass mit Frequenz und Q.',
 'Resonanzfilter mit Frequenz als Signal. Gibt bp und lp aus.',
 'Signalrampe: Ziel und Zeit.',
 'Rampen mit Verzögerung, samplegenau.',
 'Schreibt und liest eine Verzögerungsleitung über Namen.',
 'Interpoliertes Lesen mit Zeit als Signal (Chorus, Flanger).',
 'Eine Zahlenliste, die man sieht und zeichnen kann.',
 'Einen Index eines Arrays lesen und schreiben.',
 'Oszillator, der ein Array durchläuft (2ⁿ+3 Punkte).',
 'Eine Audiodatei in ein Array laden und abspielen.'],
lessons:{
 leer:{short:'Lesen',eyebrow:'Bevor es losgeht',title:'Wie man einen Patch liest',
  lede:'In Pd schreibst du keine Codezeilen: Du zeichnest Boxen und verbindest sie mit Kabeln. Die Zeichnung ist das Programm, und sie läuft, während du sie ansiehst.',
  body:`<ul>
 <li><b>Objekt</b> (Rechteck): erledigt eine Aufgabe. Name und Argumente stehen darin: <code>metro 500</code>, <code class="s">osc~ 220</code>.</li>
 <li><b>Nachricht</b> (Fahnenform): enthält Daten. Ein Klick schickt sie aus ihrem Outlet.</li>
 <li><b>Zahl</b> (abgeschnittene Ecke): zeigt den letzten Wert; durch Ziehen änderst du ihn.</li>
 <li><b>GUI</b>: Bang (Kreis, „jetzt!“), Toggle (0/1), Schieberegler.</li>
 <li><b>Inlets oben, Outlets unten.</b> Die Daten fließen die Kabel hinunter.</li>
 <li>In Pd bearbeitest du im <b>Bearbeitungsmodus</b> (Ctrl+E) und spielst im <b>Ausführungsmodus</b>. Hier bist du immer im Ausführungsmodus.</li></ul>
 <div class="lanes">
  <svg viewBox="0 0 320 96" aria-hidden="true">
   <line x1="0" y1="24" x2="320" y2="24" stroke="#9aa1ad" stroke-width="1"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:0s"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:-.9s"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:-2.6s"/>
   <g class="lane-wave"><path d="M0 72 q10 -16 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#1fe2ff" stroke-width="3"/></g>
  </svg>
  <div class="cap"><span><b>Steuerung</b>: einzelne Ereignisse, wenn etwas passiert</span><span><b class="c">Signal ~</b>: 44.100 Zahlen pro Sekunde, ohne Pause</span></div>
 </div>`,
  tryit:['Klick auf die Nachricht <code class="m">440</code>: Die Zahlenbox darunter empfängt sie.','Tippe auf das Bang rechts und schau in die Konsole: <code>hola: bang</code> erscheint.','Achte auf die Farben der Boxen: Gelb = Nachrichten, Cyan = Signal, Magenta = Bedienelemente zum Spielen.'],
  tip:['Die kleinen Quadrate','Cyanfarbene Inlets und Outlets sind Signal, graue sind Steuerung. Pd lässt dich keinen Signal-Outlet mit einem Inlet verbinden, der nur Steuerdaten annimmt.']},
 mensajes:{short:'Nachrichten',eyebrow:'Logik · 01',title:'Alles ist eine Nachricht',
  lede:'Eine Nachricht ist eine Liste von Atomen: Zahlen (floats) und Wörter (symbols). Sie wandert nur, wenn etwas sie auslöst: ein Klick, eine Uhr, ein anderes Objekt.',
  body:`<ul>
 <li><b>float</b>: eine Zahl, <code class="m">60</code>. <b>symbol</b>: ein Wort. <b>list</b>: mehrere Atome, <code class="m">1 2 3 tres</code>.</li>
 <li><code>print</code> schreibt alles, was ankommt, ins Pd-Fenster, mit seinem Namen davor.</li>
 <li><code class="m">$1</code> in einer Nachricht ist eine Variable: Sie wird durch das erste ankommende Atom ersetzt. <code class="m">nota $1</code> + 64 → <code>nota 64</code>.</li>
 <li><code>mtof</code> wandelt eine MIDI-Note in Hz um: 60 ist das mittlere C (261,6 Hz), 69 ist A 440.</li></ul>`,
  tryit:['Klick auf 60, 64, 67, 72: ein C-Dur-Arpeggio.','Zieh die Zahl rechts und sieh, wie <code class="m">nota $1</code> den Satz in der Konsole baut.','Klick auf <code class="m">1 2 3 tres</code>: Eine Liste kann Zahlen und Wörter mischen.'],
  tip:['Im echten Pd','Die Konsole ist das Hauptfenster von Pd (Ctrl+R). Dort landen die prints und auch die Fehler: Behalte sie immer im Blick.']},
 frio:{short:'Heiß / kalt',eyebrow:'Logik · 02',title:'Heißer Inlet, kalter Inlet',
  lede:'Der linke Inlet löst aus; die anderen speichern nur. Das ist die wichtigste Regel der Pd-Logik.',
  body:`<ul>
 <li><code>+ 7</code> addiert seinen linken Eingang mit dem, was rechts gespeichert ist.</li>
 <li>Änderst du <b>B</b> (rechter Inlet, kalt), kommt nichts heraus: Der Wert bleibt gespeichert und wartet.</li>
 <li>Kommt links etwas an (<b>A</b>, heiß), rechnet es und gibt das Ergebnis aus.</li>
 <li>Ein <b>Bang</b> am heißen Inlet rechnet mit den gespeicherten Werten neu.</li>
 <li>Wozu: Du bereitest mehrere Werte vor und löst einmal aus, im richtigen Moment.</li></ul>`,
  tryit:['Stell B auf 12: Nichts ändert sich. Jetzt tippe auf das Bang: Es springt eine Oktave hoch.','Zieh A: Jede Änderung kommt sofort heraus.','Schau in die Konsole: Sie schreibt nur, wenn der linke Inlet auslöst.'],
  tip:['Gilt für fast alles','<code>f</code>, <code>*</code>, <code>metro</code>, <code>moses</code>, <code>random</code>, <code>pack</code>: Links ist heiß, der Rest kalt.']},
 orden:{short:'Reihenfolge',eyebrow:'Logik · 03',title:'Von rechts nach links',
  lede:'Hat ein Objekt mehrere Outlets, feuert zuerst der rechte. trigger (oder t) macht diese Reihenfolge explizit.',
  body:`<ul>
 <li><code>t b f</code> nimmt eine Note und verteilt sie: Zuerst geht das <b>f</b> (rechter Outlet) zu <code>mtof</code> → <code class="s">osc~</code>; danach löst das <b>b</b> (links) die Hüllkurve aus.</li>
 <li>So ist die Tonhöhe schon gesetzt, wenn der Klang startet. Andersherum hörtest du einen Anschlag mit der vorherigen Note.</li>
 <li>Verbindest du einen Outlet mit mehreren Zielen (<b>Fan-out</b>), garantiert Pd keine Reihenfolge. Ist sie wichtig, nimm <code>t</code>.</li>
 <li>Trigger-Buchstaben: <code>b</code> bang, <code>f</code> float, <code>s</code> symbol, <code>l</code> list, <code>a</code> anything.</li></ul>`,
  tryit:['Tippe auf das Bang rechts und folge den Punkten: erster, zweiter, dritter. Die Konsole bestätigt es.','Zieh „Note“: Jede Änderung ist neue Tonhöhe + Hüllkurven-Anschlag.','Schau dir das Oszilloskop im Hüllkurvenmodus an: Jeder Anschlag ist ein Berg.'],
  tip:['Faustregel','Jeder Outlet, der an mehr als ein Ziel geht, ist verdächtig. Setz ein <code>t</code> dazwischen und schlaf ruhig.']},
 senal:{short:'Signal',eyebrow:'Signal · 04',title:'Das Signal hört nie auf',
  lede:'Objekte mit ~ arbeiten mit Audiorate: Sie berechnen 44.100 Zahlen pro Sekunde, solange DSP eingeschaltet ist.',
  body:`<ul>
 <li><code class="s">osc~</code> erzeugt eine Sinuswelle zwischen −1 und 1. Eine Zahl im linken Inlet ändert die Frequenz.</li>
 <li><code class="s">*~</code> multipliziert: Es ist ein VCA. Ohne Argument erwartet der rechte Inlet ein Signal.</li>
 <li><code class="m">$1 30</code> + <code class="s">line~</code>: „geh in 30 ms zu diesem Wert“. Ohne Rampe klickt jeder Lautstärkesprung.</li>
 <li><code class="s">dac~</code> ist der Ausgang: linker Inlet L, rechter R. Bleib unter 1, sonst übersteuert es.</li></ul>`,
  tryit:['Beweg die Frequenz schnell und sieh, wie sich die Wellen im Oszilloskop zusammendrängen.','Lautstärke auf 0 und zurück: keine Klicks, dank line~.','Schalte das Oszilloskop auf „Spektrum“: Eine Sinuswelle ist ein einziger Balken.'],
  tip:['Im echten Pd','Ctrl+/ schaltet DSP ein, Ctrl+. aus. Hier schicken die Regler beim Einschalten ihren Wert; in Pd nimmst du dafür <code>loadbang</code>.']},
 aditiva:{short:'Additiv',eyebrow:'Synthese · 05',title:'Sinuswellen addieren',
  lede:'Jeder periodische Klang ist eine Summe von Sinuswellen. Mit vier osc~ in Vielfachen eines Grundtons baust du schon Klangfarben.',
  body:`<ul>
 <li>Mehrere Signalkabel in denselben Inlet <b>werden automatisch addiert</b>.</li>
 <li><code>* 2</code>, <code>* 3</code>, <code>* 4</code> berechnen die Obertöne im Steuerbereich.</li>
 <li>Jedes <code class="s">*~</code> ist die Lautstärke eines Obertons. Der Regler schreibt in den rechten Inlet (kalt, speichert die Verstärkung).</li>
 <li><code class="s">*~ 0.15</code> am Ende: Die Summe von vier Wellen kann über 1 gehen.</li></ul>`,
  tryit:['Alles runter außer 1: reiner Sinus, ein einziger Balken im Spektrum.','Nur 1 und 3 oben: hohler Klang, wie eine Klarinette.','Zieh den Grundton: Alle vier Oszillatoren folgen.'],
  tip:['Weiter gedacht','Mit <code>sinesum</code> in einem Array (Lektion 13) machst du dasselbe mit 64 Obertönen in einem einzigen Oszillator.']},
 ring:{short:'Ring / AM',eyebrow:'Synthese · 06',title:'Zwei Signale multiplizieren',
  lede:'Multiplizierst du ein Signal mit einem anderen, steuert eines die Amplitude des anderen. Langsam ist es Tremolo; schnell entstehen neue Frequenzen.',
  body:`<ul>
 <li><b>Ringmodulation</b>: <code class="s">*~</code> ohne Argument, ein Signal in jedem Inlet.</li>
 <li>Der Ausgang enthält <b>Träger + Modulator</b> und <b>Träger − Modulator</b>; der Träger verschwindet.</li>
 <li>Unter etwa 20 Hz hört das Ohr es als Tremolo, nicht als neue Töne.</li>
 <li>Für <b>klassische AM</b> gib dem Modulator einen Offset: <code class="s">*~ 0.5</code> → <code class="s">+~ 0.5</code>. Er ist nie negativ, und der Träger bleibt.</li></ul>`,
  tryit:['Modulator auf 4 Hz: Tremolo.','Bring ihn auf 150 Hz: metallischer Klang einer kaputten Glocke.','Im Spektrum siehst du zwei Spitzen links und rechts von der Stelle, wo der Träger war.'],
  tip:['Logarithmischer Regler','Der Modulator nutzt eine Log-Skala: mehr Weg bei den tiefen Frequenzen, wo die langsamen Dinge passieren.']},
 fm:{short:'FM',eyebrow:'Synthese · 07',title:'Tanzende Frequenz',
  lede:'Bei FM berührt der Modulator nicht die Lautstärke: Er bewegt die Frequenz des Trägers. Mit zwei Oszillatoren entstehen Glocken, Bässe und Blech.',
  body:`<ul>
 <li><code class="s">osc~ 110</code> → <code class="s">*~ 0</code>: ein Signal, das von −Index bis +Index schwingt (in Hz).</li>
 <li><code class="s">+~ 220</code> addiert die Trägerfrequenz.</li>
 <li>Dieses Signal geht in den linken Inlet des zweiten <code class="s">osc~</code>: Bekommt ein osc~ ein Signal, nutzt er es als Frequenz.</li>
 <li>Ganzzahliges Verhältnis (220/110 = 2) → harmonisch. Nicht ganzzahlig → unharmonisch: Glocken, Metall.</li></ul>`,
  tryit:['Index auf 0: reiner Sinus. Dreh ihn langsam hoch, und Glanz erscheint.','Modulator um 157 Hz: Glocke.','Modulator auf 3 Hz mit hohem Index: Sirene (übertriebenes Vibrato).'],
  tip:['Argument = Steuer-Inlet','<code class="s">*~ 0</code> mit Argument nimmt im rechten Inlet Zahlen an. <code class="s">*~</code> ohne Argument erwartet dort ein Signal.']},
 filtros:{short:'Filter',eyebrow:'Synthese · 08',title:'Mit Filtern formen',
  lede:'Du beginnst mit einer obertonreichen Welle und nimmst mit einem Filter etwas weg. phasor~ ist ein Sägezahn; vcf~ ist ein Filter, das ein Signal als Frequenz annimmt.',
  body:`<ul>
 <li>Der LFO <code class="s">osc~ 0.25</code> geht von −1 bis 1, einmal alle 4 Sekunden.</li>
 <li><b>Skalieren und verschieben</b>: <code class="s">*~ 900</code> bringt ihn auf ±900, <code class="s">+~ 1100</code> zentriert ihn bei 1100. Das Filter fährt zwischen 200 und 2000 Hz. Dieses Muster wirst du ständig brauchen.</li>
 <li><code class="s">vcf~</code> hat zwei Ausgänge: Bandpass (links) und Tiefpass (rechts). Hier nehmen wir den rechten.</li>
 <li>Der dritte Inlet ist die <b>Q</b>: höher heißt mehr Resonanz und mehr Pfeifen.</li></ul>`,
  tryit:['Q auf 20 mit langsamem LFO: Wah.','LFO auf 6 Hz: Blubbern.','Tonhöhe 40 Hz und viel Tiefe: Acid-Bass.'],
  tip:['Einfachere Filter','<code class="s">lop~</code>, <code class="s">hip~</code> und <code class="s">bp~</code> sind sparsamer und nehmen die Frequenz als Zahl.']},
 envolventes:{short:'Hüllkurven',eyebrow:'Zeit · 09',title:'Der Zeit eine Form geben',
  lede:'Eine Hüllkurve ist ein Signal, das steigt und fällt und den Klang multipliziert. vline~ zeichnet sie mit Nachrichten aus drei Zahlen: Ziel, Zeit und Verzögerung.',
  body:`<ul>
 <li>Jede Nachricht ist <code class="m">Ziel Zeit Verzögerung</code>, in Millisekunden.</li>
 <li>Das <b>Komma</b> trennt Nachrichten, die zusammen hinausgehen; die Verzögerung setzt sie in der Zeit.</li>
 <li><code class="m">1 2, 0 220 2</code> = steig in 2 ms auf 1; nach 2 ms fall in 220 ms auf 0.</li>
 <li>Mit mehr Segmenten baust du Attack, Decay, Sustain und Release. <code class="s">vline~</code> ist samplegenau; <code class="s">line~</code> kennt keine Verzögerung.</li></ul>`,
  tryit:['Schnelle Klicks auf „pluck“.','„pad“ auslösen und, während es klingt, „pluck“: Die neue Hüllkurve startet dort, wo die alte gerade war.','Überleg, wie man 50 ms Attack und 500 ms Abfall schreibt: <code class="m">1 50, 0 500 50</code>.'],
  tip:['Präzision','Die Zeiten von vline~ werden innerhalb des Audioblocks berechnet, deshalb „treten“ sich zwei schnelle Klicks nie mit Störgeräuschen auf die Füße.']},
 secuenciador:{short:'Sequenzer',eyebrow:'Zeit · 10',title:'Schritte zählen',
  lede:'Eine Uhr, ein Zähler und eine Tabelle: das Gerüst jedes Sequenzers.',
  body:`<ul>
 <li><code>metro</code> schickt alle N Millisekunden ein Bang, solange das Toggle auf 1 steht.</li>
 <li>Der klassische Zähler: <code>f</code> speichert eine Zahl; ihr Ausgang läuft durch <code>+ 1</code> und <code>mod 8</code> und zurück in den <b>kalten</b> Inlet von <code>f</code>.</li>
 <li>Weil er in den kalten zurückgeht, löst er nicht erneut aus: Er wartet aufs nächste Bang. Ginge er in den heißen, wäre es eine Endlosschleife (stack overflow).</li>
 <li><code>tabread seq</code> liest den Wert dieses Schritts. <code>t b f</code>: erst die Tonhöhe, dann der Anschlag.</li></ul>`,
  tryit:['Drück play und zeichne mit Maus oder Finger in die Tabelle <b>seq</b>, während es läuft.','Tempo auf 90 ms runter.','Ändere in Pd <code>mod 8</code> in <code>mod 5</code>: eine 5-Schritt-Schleife gegen eine mit 8 = Polyrhythmus.'],
  tip:['Harmloses Fan-out','Der Ausgang von <code>f</code> geht an drei Stellen. Die Reihenfolge ist hier egal, weil der Weg über <code>+ 1</code> in einem kalten Inlet endet.']},
 generativo:{short:'Zufall',eyebrow:'Zeit · 11',title:'Zufall mit Regeln',
  lede:'Reiner Zufall klingt wie Rauschen. Gefiltert durch eine Tonleiter und eine Wahrscheinlichkeit klingt er wie Musik.',
  body:`<ul>
 <li><code>random 100</code> → <code>moses 65</code>: Zahlen unter 65 gehen links hinaus (in 65 % der Fälle). Der Rest wird verworfen: Pausen.</li>
 <li><code>random 8</code> wählt eine Position der Tabelle <b>escala</b> (Tonleiter), die eine Pentatonik in Halbtönen enthält.</li>
 <li><code>+ 60</code> transponiert auf das mittlere C, und <code>mtof</code> rechnet in Hz um.</li>
 <li>Der Wahrscheinlichkeitsregler schreibt in den kalten Inlet von <code>moses</code>: die Schwelle.</li></ul>`,
  tryit:['Wahrscheinlichkeit 30 %: luftige Phrasen.','Zeichne eine andere Tonleiter in die Tabelle (jeder Balken ist ein Halbton über C).','Wahrscheinlichkeit 100 %: ein durchgehender Notenregen.'],
  tip:['Kontrolliert generativ','Ändere in Pd <code>random 8</code> in <code>random 4</code>, und der Umfang schrumpft: mehr Wiederholung, mehr Motiv.']},
 delay:{short:'Delay',eyebrow:'Zeit · 12',title:'Echos über unsichtbare Kabel',
  lede:'delwrite~ nimmt das Signal in einen benannten Speicher auf; delread~ liest es später. Sie sind über den Namen verbunden, nicht über ein Kabel.',
  body:`<ul>
 <li><code class="s">delwrite~ eco 2000</code> = ein Speicher namens „eco“ (Echo), 2 Sekunden lang.</li>
 <li><code class="s">delread~ eco 320</code> = lies diesen Speicher 320 ms in der Vergangenheit. Eine Zahl im Inlet ändert die Zeit.</li>
 <li><b>Feedback</b>: Was aus dem Delay kommt, geht mit weniger als 1 multipliziert zurück in delwrite~. Jedes Echo ist leiser als das vorige.</li>
 <li>Bei 1 oder mehr schaukelt es sich ewig auf. Derselbe Trick über Namen: <code class="s">send~</code>/<code class="s">receive~</code>, <code class="s">throw~</code>/<code class="s">catch~</code>.</li></ul>`,
  tryit:['Tippe mehrmals auf das Bang und hör die Abpraller.','Zeit 160 ms mit Feedback 0.8: rhythmische Echos.','Sehr kurze Zeit (30–40 ms): metallische Resonanz (Kammfilter).'],
  tip:['Die einzige erlaubte Schleife','Im Signalbereich kannst du mit normalen Kabeln keine Schleife bauen. Mit delwrite~/delread~ schon: Es gibt mindestens einen Block (64 Samples) Verzögerung.']},
 tablas:{short:'Tabellen',eyebrow:'Speicher · 13',title:'Eine Welle zeichnen',
  lede:'Ein Array ist eine Zahlenliste, die du sehen und zeichnen kannst. Mit tabosc4~ wird es zum Zyklus eines Oszillators.',
  body:`<ul>
 <li><code class="s">tabosc4~ onda</code> durchläuft die Tabelle in Schleife mit der gewünschten Frequenz. Es braucht 2ⁿ + 3 Punkte: 64 + 3 = 67.</li>
 <li>Nachrichten, die mit <code class="m">;</code> beginnen, werden <b>über Namen</b> verschickt, ohne Kabel.</li>
 <li><code class="m">; onda sinesum 64 1 0.5</code> sagt dem Array „onda“ (Welle): Füll dich mit Obertönen der Amplitude 1 und 0.5.</li>
 <li>Zeichne mit der Maus darüber: Die Klangfarbe ändert sich live.</li></ul>`,
  tryit:['Zeichne eine zackige Linie und hör, wie es schmutzig wird.','Klick auf „Rechteck“ und schalte das Oszilloskop auf Spektrum: nur ungerade Obertöne.','Frequenz auf 40 Hz: Du hörst die Wellenform fast als Rhythmus.'],
  tip:['sinesum normalisiert nicht','Ergeben die Amplituden zusammen mehr als 1, ragt die Welle aus dem Diagramm. <code class="m">; onda normalize 1</code> holt sie zurück in den Rahmen.']}
}};
