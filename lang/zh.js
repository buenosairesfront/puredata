/* 中文（简体） */
PD_I18N.zh={
ui:{
 docTitle:'Pd 实验室 · U-MA',
 metaDesc:'Pure Data 互动课程：14 个在浏览器里发声的实时 patch。',
 kicker:'实验室 · 中级',
 h1sub:'会发声的 patch',
 lede:'一门理解 Pd 思维方式的课程：消息、信号、执行顺序、合成、包络、音序、延迟和表。每个例子都是实时 patch：你可以操作方框，看着消息流动，并直接在浏览器里听到声音。',
 start:'▶ 打开音频并开始',
 cheat:'对象速查表',
 statPatches:'实时 patch', statSr:'采样 / 秒', statSig:'= 信号',
 keyYel:'<b style="color:var(--yel)">黄色</b>：在控制连线上传递的消息',
 keyCyan:'<b style="color:var(--cyan)">青色</b>：音频信号（粗连线，带 ~ 的对象）',
 keyMag:'<b style="color:var(--mag)">品红</b>：可以点击、拖动或绘制的东西',
 keyGrey:'灰色细线：静止的控制连线',
 refTitle:'对象速查表',
 refIntro:'Pd vanilla 中最常用的对象。在 Pd 里，右键点击任何对象 → <b style="color:var(--fg)">帮助</b>，会打开带示例的帮助 patch。',
 refSearch:'搜索：osc、delay、random…', refSearchAria:'搜索对象',
 keysTitle:'键盘快捷键', keysNote:'在 Mac 上用 Cmd 代替 Ctrl。',
 nextTitle:'继续学习',
 footer:'Pd 实验室 · U-MA 宇宙 · 本页的 patch 可导出为 vanilla .pd 文件',
 dspOff:'DSP 关闭', panic:'静音', volAria:'总音量',
 tryTitle:'试试看',
 scopeView:'示波器视图', mWave:'波形', mSpec:'频谱', mEnv:'包络', sWave:'示波器',
 scopeIdle:'DSP 关闭 · 点任意品红或黄色方框',
 pdWindow:'Pd 窗口',
 viewPd:'以 .pd 文件查看', copy:'复制', copied:'已复制', selected:'已选中：Ctrl+C', download:'下载',
 saveAs:'在 Pd 中打开，或粘贴到文本文件并保存为',
 navRef:'速查表',
 rulesTitle:'Pd 逻辑的黄金法则', rulesIntro:'六个概念，几乎能解释 patch 里所有的“为什么不工作？”。',
 ruleFires:'触发', ruleStores:'保存',
 patchAria:'Pure Data patch：', msgAria:'消息 '
},
parts:{leer:['第一部分','语言的逻辑'],senal:['第二部分','信号与合成'],tiempo:['第三部分','时间、音序与记忆']},
labels:{
 'mensaje: clic':'消息：点击','número: arrastrá':'数字：拖动','slider':'滑块','objeto':'对象',
 'control: cable fino':'控制：细线','señal: cable grueso':'信号：粗线','nota':'音符',
 'A · caliente':'A · 热','B · frío':'B · 冷','disparar':'触发','frecuencia Hz':'频率 Hz','volumen':'音量',
 'fundamental':'基频','portadora Hz':'载波 Hz','moduladora Hz':'调制波 Hz','índice Hz':'调制指数 Hz','portadora':'载波',
 'altura Hz':'音高 Hz','profundidad':'深度','paso':'步','probabilidad %':'概率 %','tocar':'演奏',
 'tiempo ms':'时间 ms','seno':'正弦','sierra':'锯齿','cuadrada':'方波'
},
cats:{Todos:'全部',Control:'控制','Matemática':'数学',Tiempo:'时间','Señal':'信号',Filtros:'滤波器',Envolventes:'包络',Memoria:'记忆',Tablas:'表'},
rules:[
 ['左边是热的','左侧入口触发输出，其他入口只保存数值。'],
 ['从右到左','出口从右到左依次输出，每个分支完整执行完毕后才轮到下一个（深度优先）。'],
 ['~ 表示信号','带波浪号：连续音频，只在 DSP 打开时运行。不带：消息，在事件发生时传递。'],
 ['扇出 → trigger','一个出口连到多个地方，顺序没有保证。顺序重要时，加一个 <code>t</code>。'],
 ['回环接冷入口','向上回连的线总是接到冷入口，否则就是无限循环。'],
 ['$1 是变量','在消息中，<code class="m">$1</code> 取第一个传入的原子，<code class="m">$2</code> 取第二个。']],
keys:[['Ctrl E','编辑模式 ↔ 运行模式'],['Ctrl 1','新建对象'],['Ctrl 2','新建消息'],['Ctrl 3','新建数字'],['Ctrl 5','注释'],
 ['Shift Ctrl B','Bang'],['Shift Ctrl T','Toggle'],['Ctrl /','打开 DSP（音频）'],['Ctrl .','关闭 DSP'],['Ctrl D','复制所选'],
 ['Ctrl R','调出 Pd 窗口（控制台）'],['右键','对象帮助']],
next:[['下载 Pd vanilla','Miller Puckette 发布的官方版本，支持 Mac、Windows 和 Linux。'],
 ['Theory and Technique of Electronic Music','Puckette 的书，免费，所有示例都用 Pd 完成。'],
 ['puredata.info','社区、论坛、外部对象和文档。']],
ref:[
 '把收到的内容写到控制台。',
 '“现在！”消息。不带数据地触发。',
 '打开 patch 时发送一个 bang。用于初始化。',
 '按从右到左的顺序分发一条消息。',
 '保存一个数字。收到 bang 时再次输出。',
 '同 f，但截取为整数。',
 '数字匹配时，从对应出口输出 bang。',
 '按第一个原子分配消息。',
 '按阈值分流数字：小的走左边，其余走右边。',
 '闸门：右入口 ≠ 0 时放行。',
 '只有数字变化时才放行。',
 '组合与拆分列表。',
 's / r：按名称连接的隐形连线。',
 '运算。左边热，右边保存。',
 '整数除法的余数。适合做计数器。',
 '每次 bang 输出 0 到 N−1 之间的随机整数。',
 '在一个方框里写 C 风格的公式。',
 'MIDI 音符 ↔ 频率（Hz）。',
 '分贝（0–100）转为线性振幅。',
 '时钟：每 N 毫秒一个 bang。1 开始，0 停止。',
 'N 毫秒后输出一个 bang。',
 '测量两个 bang 之间的时间。',
 '控制域中的斜坡（用于 GUI）。',
 '正弦波。频率可用数字或信号。',
 '0→1 斜坡：锯齿波、读表。',
 '白噪声。',
 '音频运算。带参数时，右入口接收控制。',
 '声卡的音频输出与输入。',
 '把数字变成恒定信号。',
 '把信号限制在两个值之间。',
 '以数字形式跟踪信号的音量（dB）。',
 '收到 bang 时获取信号的当前值。',
 '按名称连接的信号线（一对多）。',
 '多对一：汇总到一条总线。',
 '单极低通 / 高通。',
 '带频率和 Q 的带通滤波器。',
 '频率由信号控制的共振滤波器。输出 bp 和 lp。',
 '信号斜坡：目标值与时间。',
 '带延迟的斜坡，精确到采样。',
 '按名称写入和读取延迟线。',
 '插值读取，时间由信号控制（合唱、镶边）。',
 '可以看见、可以绘制的数字列表。',
 '读写数组的某个索引。',
 '循环读取数组的振荡器（2ⁿ+3 个点）。',
 '把音频文件载入数组并播放。'],
lessons:{
 leer:{short:'阅读',eyebrow:'开始之前',title:'如何阅读一个 patch',
  lede:'在 Pd 里你不写代码行：你画方框，再用连线把它们连起来。这幅图就是程序，而且在你看着它的时候它就在运行。',
  body:`<ul>
 <li><b>对象</b>（矩形）：完成一项工作。名称和参数写在里面：<code>metro 500</code>、<code class="s">osc~ 220</code>。</li>
 <li><b>消息</b>（旗形）：存放数据。点击后从出口发出。</li>
 <li><b>数字</b>（切角）：显示最近的值；拖动即可修改。</li>
 <li><b>GUI</b>：bang（圆圈，“现在！”）、toggle（0/1）、滑块。</li>
 <li><b>入口在上，出口在下。</b>数据沿连线向下流动。</li>
 <li>在 Pd 中，你在<b>编辑模式</b>（Ctrl+E）里搭建，在<b>运行模式</b>里演奏。这里始终处于运行模式。</li></ul>
 <div class="lanes">
  <svg viewBox="0 0 320 96" aria-hidden="true">
   <line x1="0" y1="24" x2="320" y2="24" stroke="#9aa1ad" stroke-width="1"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:0s"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:-.9s"/>
   <circle class="lane-dot" cx="0" cy="24" r="4" fill="#ffe04d" style="animation-delay:-2.6s"/>
   <g class="lane-wave"><path d="M0 72 q10 -16 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#1fe2ff" stroke-width="3"/></g>
  </svg>
  <div class="cap"><span><b>控制</b>：离散事件，在某事发生时出现</span><span><b class="c">信号 ~</b>：每秒 44,100 个数字，从不停歇</span></div>
 </div>`,
  tryit:['点击消息 <code class="m">440</code>：下面的数字框会收到它。','点右边的 bang，再看控制台：会出现 <code>hola: bang</code>。','注意方框的颜色：黄色 = 消息，青色 = 信号，品红 = 可以操作的控件。'],
  tip:['那些小方块','青色的入口和出口是信号，灰色的是控制。Pd 不允许把信号出口连到只接受控制的入口。']},
 mensajes:{short:'消息',eyebrow:'逻辑 · 01',title:'一切都是消息',
  lede:'消息是一串原子：数字（float）和单词（symbol）。只有在被触发时它才会传递：一次点击、一个时钟、另一个对象。',
  body:`<ul>
 <li><b>float</b>：一个数字，<code class="m">60</code>。<b>symbol</b>：一个单词。<b>list</b>：多个原子，<code class="m">1 2 3 tres</code>。</li>
 <li><code>print</code> 把收到的内容写到 Pd 窗口，前面加上它的名字。</li>
 <li>消息里的 <code class="m">$1</code> 是变量：会被第一个传入的原子替换。<code class="m">nota $1</code> + 64 → <code>nota 64</code>。</li>
 <li><code>mtof</code> 把 MIDI 音符转成 Hz：60 是中央 C（261.6 Hz），69 是 A 440。</li></ul>`,
  tryit:['依次点击 60、64、67、72：一个 C 大调琶音。','拖动右边的数字，看 <code class="m">nota $1</code> 如何在控制台里拼出句子。','点击 <code class="m">1 2 3 tres</code>：列表可以混合数字和单词。'],
  tip:['在真正的 Pd 里','控制台就是 Pd 的主窗口（Ctrl+R）。print 的输出和错误都会出现在那里：要随时留意。']},
 frio:{short:'热 / 冷',eyebrow:'逻辑 · 02',title:'热入口与冷入口',
  lede:'左侧入口负责触发，其他入口只负责保存。这是 Pd 逻辑中最重要的规则。',
  body:`<ul>
 <li><code>+ 7</code> 把左侧输入与右侧保存的值相加。</li>
 <li>改变 <b>B</b>（右入口，冷）不会有任何输出：数值被保存起来，等待着。</li>
 <li>当左边（<b>A</b>，热）收到内容时，它才计算并输出结果。</li>
 <li>热入口收到 <b>bang</b> 时，会用保存的值重新计算。</li>
 <li>用途：先准备好几个数值，在恰当的时刻只触发一次。</li></ul>`,
  tryit:['把 B 调到 12：什么都没变。现在点 bang：升高一个八度。','拖动 A：每次变化都会立即输出。','看控制台：只有左入口触发时才会打印。'],
  tip:['几乎处处适用','<code>f</code>、<code>*</code>、<code>metro</code>、<code>moses</code>、<code>random</code>、<code>pack</code>：左边热，其余冷。']},
 orden:{short:'顺序',eyebrow:'逻辑 · 03',title:'从右到左',
  lede:'一个对象有多个出口时，最右边的先输出。trigger（或 t）把这种顺序明确写出来。',
  body:`<ul>
 <li><code>t b f</code> 接收一个音符并分发：先由 <b>f</b>（右出口）送到 <code>mtof</code> → <code class="s">osc~</code>；然后 <b>b</b>（左出口）触发包络。</li>
 <li>这样声音开始时音高已经设好了。反过来的话，你会听到用上一个音符发出的敲击声。</li>
 <li>如果把一个出口连到多个地方（<b>扇出</b>），Pd 不保证顺序。顺序重要时，用 <code>t</code>。</li>
 <li>trigger 的字母：<code>b</code> bang、<code>f</code> float、<code>s</code> symbol、<code>l</code> list、<code>a</code> anything。</li></ul>`,
  tryit:['点右边的 bang 并跟着小点看：第一、第二、第三。控制台会确认。','拖动“音符”：每次变化 = 新音高 + 一次包络敲击。','把示波器切到包络模式：每次敲击都是一座小山。'],
  tip:['经验法则','任何连到多个地方的出口都值得怀疑。加一个 <code>t</code>，就能安心了。']},
 senal:{short:'信号',eyebrow:'信号 · 04',title:'信号从不停止',
  lede:'带 ~ 的对象以音频速率工作：只要 DSP 开着，它们每秒计算 44,100 个数字。',
  body:`<ul>
 <li><code class="s">osc~</code> 产生 −1 到 1 之间的正弦波。左入口的数字改变频率。</li>
 <li><code class="s">*~</code> 做乘法：它就是一个 VCA。没有参数时，右入口等待信号。</li>
 <li><code class="m">$1 30</code> + <code class="s">line~</code>：“在 30 毫秒内到达这个值”。没有斜坡，每次音量跳变都会产生咔嗒声。</li>
 <li><code class="s">dac~</code> 是输出：左入口 L，右入口 R。保持总体低于 1，否则会削波。</li></ul>`,
  tryit:['快速改变频率，看示波器里的波形如何挤在一起。','把音量拉到 0 再拉回来：多亏 line~，没有咔嗒声。','把示波器切到“频谱”：正弦波只有一根柱子。'],
  tip:['在真正的 Pd 里','Ctrl+/ 打开 DSP，Ctrl+. 关闭。这里滑块会在开启时发送当前值；在 Pd 中你会用 <code>loadbang</code> 来做这件事。']},
 aditiva:{short:'加法',eyebrow:'合成 · 05',title:'叠加正弦波',
  lede:'任何周期性声音都是正弦波之和。用四个处于基频整数倍的 osc~，就已经能做出音色。',
  body:`<ul>
 <li>多条信号线进入同一个入口时<b>会自动相加</b>。</li>
 <li><code>* 2</code>、<code>* 3</code>、<code>* 4</code> 在控制域计算谐波。</li>
 <li>每个 <code class="s">*~</code> 是一个谐波的音量。滑块写入右入口（冷，保存增益）。</li>
 <li>最后的 <code class="s">*~ 0.15</code>：四个波相加可能超过 1。</li></ul>`,
  tryit:['除了 1 之外全部调低：纯正弦波，频谱里只有一根柱子。','只保留 1 和 3：空洞的声音，像单簧管。','拖动基频：四个振荡器都会跟随。'],
  tip:['更进一步','在数组上用 <code>sinesum</code>（第 13 课），一个振荡器就能实现 64 个谐波。']},
 ring:{short:'环形 / AM',eyebrow:'合成 · 06',title:'两个信号相乘',
  lede:'一个信号乘以另一个信号，其中一个就控制另一个的振幅。慢的时候是颤音；快的时候会出现新的频率。',
  body:`<ul>
 <li><b>环形调制</b>：不带参数的 <code class="s">*~</code>，两个入口各接一个信号。</li>
 <li>输出包含<b>载波 + 调制波</b>与<b>载波 − 调制波</b>；载波本身消失。</li>
 <li>低于约 20 Hz 时，耳朵听到的是颤音，而不是新的音符。</li>
 <li>做<b>经典 AM</b> 时给调制波加偏移：<code class="s">*~ 0.5</code> → <code class="s">+~ 0.5</code>。它永远不为负，载波得以保留。</li></ul>`,
  tryit:['调制波 4 Hz：颤音。','调到 150 Hz：像破钟一样的金属声。','在频谱中你会看到原来载波位置两侧的两个峰。'],
  tip:['对数滑块','调制波使用对数刻度：低频区行程更长，慢速变化就发生在那里。']},
 fm:{short:'FM',eyebrow:'合成 · 07',title:'跳舞的频率',
  lede:'在 FM 中，调制波不碰音量：它移动载波的频率。两个振荡器就能做出钟声、贝斯和铜管。',
  body:`<ul>
 <li><code class="s">osc~ 110</code> → <code class="s">*~ 0</code>：一个在 −指数 到 +指数（Hz）之间摆动的信号。</li>
 <li><code class="s">+~ 220</code> 加上载波频率。</li>
 <li>这个信号进入第二个 <code class="s">osc~</code> 的左入口：osc~ 收到信号时会把它当作频率。</li>
 <li>整数比（220/110 = 2）→ 谐和。非整数 → 非谐和：钟、金属。</li></ul>`,
  tryit:['指数为 0：纯正弦波。慢慢调高，亮度就出现了。','调制波在 157 Hz 附近：钟声。','调制波 3 Hz、指数很高：警笛（夸张的颤音）。'],
  tip:['参数 = 控制入口','带参数的 <code class="s">*~ 0</code> 在右入口接收数字。不带参数的 <code class="s">*~</code> 在那里等待信号。']},
 filtros:{short:'滤波器',eyebrow:'合成 · 08',title:'用滤波器雕刻',
  lede:'从一个富含谐波的波形开始，用滤波器削去一部分。phasor~ 是锯齿波；vcf~ 是接受信号作为频率的滤波器。',
  body:`<ul>
 <li>LFO <code class="s">osc~ 0.25</code> 在 −1 到 1 之间运动，每 4 秒一次。</li>
 <li><b>缩放与偏移</b>：<code class="s">*~ 900</code> 把它变成 ±900，<code class="s">+~ 1100</code> 让它以 1100 为中心。滤波器在 200 到 2000 Hz 之间扫动。这个模式你会经常用到。</li>
 <li><code class="s">vcf~</code> 有两个输出：带通（左）和低通（右）。这里用右边的。</li>
 <li>第三个入口是 <b>Q</b>：越高共振越强，哨音越明显。</li></ul>`,
  tryit:['Q 设为 20，LFO 放慢：哇音。','LFO 6 Hz：冒泡声。','音高 40 Hz、深度调高：酸性贝斯。'],
  tip:['更简单的滤波器','<code class="s">lop~</code>、<code class="s">hip~</code> 和 <code class="s">bp~</code> 更省资源，频率用数字设置。']},
 envolventes:{short:'包络',eyebrow:'时间 · 09',title:'给时间塑形',
  lede:'包络是一个上升又下降的信号，用来乘以声音。vline~ 用三个数字的消息来画它：目标值、时间和延迟。',
  body:`<ul>
 <li>每条消息是 <code class="m">目标值 时间 延迟</code>，单位为毫秒。</li>
 <li><b>逗号</b>分隔一起发出的消息；延迟把它们安排在时间上。</li>
 <li><code class="m">1 2, 0 220 2</code> = 在 2 毫秒内升到 1；2 毫秒后，用 220 毫秒降到 0。</li>
 <li>段数更多就能做出起音、衰减、延音和释音。<code class="s">vline~</code> 精确到采样；<code class="s">line~</code> 不接受延迟。</li></ul>`,
  tryit:['快速点击“pluck”。','触发“pad”，在它发声时再点“pluck”：新的包络从当前位置开始。','想想如何写出 50 毫秒起音、500 毫秒下降：<code class="m">1 50, 0 500 50</code>。'],
  tip:['精度','vline~ 的时间在音频块内部计算，所以两次快速点击绝不会因为噪声而“互相踩踏”。']},
 secuenciador:{short:'音序器',eyebrow:'时间 · 10',title:'数步子',
  lede:'一个时钟、一个计数器和一张表：所有音序器的骨架。',
  body:`<ul>
 <li>只要 toggle 为 1，<code>metro</code> 就每 N 毫秒发送一个 bang。</li>
 <li>经典计数器：<code>f</code> 保存一个数字；它的输出经过 <code>+ 1</code> 和 <code>mod 8</code>，再回到 <code>f</code> 的<b>冷</b>入口。</li>
 <li>因为回到的是冷入口，它不会再次触发：等待下一个 bang。如果回到热入口，就会无限循环（stack overflow）。</li>
 <li><code>tabread seq</code> 读取这一步的值。<code>t b f</code>：先音高，后敲击。</li></ul>`,
  tryit:['按 play，在播放时用鼠标或手指在表 <b>seq</b> 上画。','把速度降到 90 毫秒。','在 Pd 里把 <code>mod 8</code> 改成 <code>mod 5</code>：5 步循环对 8 步循环 = 复节奏。'],
  tip:['无害的扇出','<code>f</code> 的输出去往三个地方。这里顺序无所谓，因为 <code>+ 1</code> 那条路径终止于冷入口。']},
 generativo:{short:'随机',eyebrow:'时间 · 11',title:'有规则的随机',
  lede:'纯粹的随机听起来像噪声。经过音阶和概率过滤后，它听起来就像音乐。',
  body:`<ul>
 <li><code>random 100</code> → <code>moses 65</code>：小于 65 的数从左边输出（65% 的时候）。其余被丢弃：休止。</li>
 <li><code>random 8</code> 在表 <b>escala</b>（音阶）中选一个位置，表里存着以半音计的五声音阶。</li>
 <li><code>+ 60</code> 把它移到中央 C，<code>mtof</code> 再转换成 Hz。</li>
 <li>概率滑块写入 <code>moses</code> 的冷入口：也就是阈值。</li></ul>`,
  tryit:['概率 30%：留有空隙的乐句。','在表里画另一个音阶（每根柱子是 C 之上的半音数）。','概率 100%：连绵不断的音符雨。'],
  tip:['受控的生成','在 Pd 中把 <code>random 8</code> 改成 <code>random 4</code>，范围就会缩小：重复更多，更像动机。']},
 delay:{short:'延迟',eyebrow:'时间 · 12',title:'隐形连线的回声',
  lede:'delwrite~ 把信号录进一个有名字的记忆里；delread~ 稍后再读出来。它们靠名字连接，而不是靠连线。',
  body:`<ul>
 <li><code class="s">delwrite~ eco 2000</code> = 一段名为“eco”（回声）、长 2 秒的记忆。</li>
 <li><code class="s">delread~ eco 320</code> = 读取 320 毫秒之前的记忆。入口里的数字可以改变时间。</li>
 <li><b>反馈</b>：延迟的输出乘以小于 1 的数后再送回 delwrite~。每次回声都比上一次更轻。</li>
 <li>等于或大于 1 就会无限累积。同样靠名字的技巧：<code class="s">send~</code>/<code class="s">receive~</code>、<code class="s">throw~</code>/<code class="s">catch~</code>。</li></ul>`,
  tryit:['多点几次 bang，听听反弹。','时间 160 毫秒、反馈 0.8：有节奏的回声。','极短的时间（30–40 毫秒）：金属共鸣（梳状滤波器）。'],
  tip:['唯一允许的回环','在信号世界里不能用普通连线做回环。用 delwrite~/delread~ 就可以：至少有一个块（64 个采样）的延迟。']},
 tablas:{short:'表',eyebrow:'记忆 · 13',title:'画一个波形',
  lede:'数组是一串可以看见、可以绘制的数字。用 tabosc4~，它就成了振荡器的一个周期。',
  body:`<ul>
 <li><code class="s">tabosc4~ onda</code> 按你给的频率循环读取这张表。它需要 2ⁿ + 3 个点：64 + 3 = 67。</li>
 <li>以 <code class="m">;</code> 开头的消息<b>按名称</b>发送，不需要连线。</li>
 <li><code class="m">; onda sinesum 64 1 0.5</code> 告诉数组“onda”（波）：用振幅为 1 和 0.5 的谐波把自己填满。</li>
 <li>用鼠标在上面画：音色会实时改变。</li></ul>`,
  tryit:['画一条尖刺状的线，听声音如何变脏。','点击“方波”，把示波器切到频谱：只有奇次谐波。','频率 40 Hz：你几乎能把波形当作节奏听出来。'],
  tip:['sinesum 不做归一化','如果振幅之和超过 1，波形会超出图表。<code class="m">; onda normalize 1</code> 能把它拉回框内。']}
}};
