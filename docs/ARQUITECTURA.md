# Arquitectura

Sitio estático, sin build ni dependencias. Orden de carga:

```
index.html → js/i18n.js → lang/es.js (+ lang/<idioma>.js) → js/engine.js → js/app.js
```

## `js/i18n.js`

- Decide el idioma: `?lang=` → `localStorage['umapd-lang']` → `es`.
- Carga `lang/es.js` siempre (es la base) y encima el idioma pedido. Si a un idioma le falta un texto, se ve en castellano.
- Arma el objeto global `T` (`ui`, `parts`, `labels`, `cats`, `ref`, `rules`, `keys`, `next`, `lessons`) y completa los elementos con `data-i18n`, `data-i18n-ph` (placeholder) y `data-i18n-aria`.
- `tl(texto)` traduce etiquetas de los patches; `ui(clave)` devuelve un texto de interfaz.
- Cambiar de idioma recarga la página con el nuevo `?lang=` y conserva el `#ancla`.
- `V` es la versión para el caché de los scripts: subila cuando publiques cambios (en `localhost` usa la hora, así no hay que recargar a mano).

## `js/engine.js`: el mini-Pd

- **Nodos**: `obj`, `msg`, `num` (floatatom), `bng`, `tgl`, `hsl`, `arr` (array dibujable), `txt` (comentario). Cada uno con posición `x, y` en coordenadas de Pd.
- **Cables**: `[desde, outlet, hasta, inlet]`. Un cable es de señal si sale de un outlet de señal (`ioSpec`).
- **Control**: `Patch.out()` recorre los cables en orden (depth-first) y anima un punto amarillo por cada mensaje. Los inlets distintos del 0 guardan y no disparan, igual que en Pd. `trigger` emite de derecha a izquierda.
- **Mensajes**: `$1…$9`, coma (varios mensajes) y `;` (envío por nombre a un array: `sinesum`, `const`, `normalize`).
- **Señal**: al prender el DSP, cada objeto `~` construye sus nodos de Web Audio (`build`), se conectan los cables de señal y los números/sliders marcados con `init` mandan su valor. Un solo patch suena a la vez.
- **Objetos de control**: `print`, `mtof`, `+ - * / mod`, `f`/`float`, `random`, `moses`, `metro`, `t`/`trigger`, `sel`/`select`, `tabread`.
- **Objetos de señal**: `osc~`, `phasor~`, `noise~`, `*~`, `+~`, `dac~`, `lop~`, `hip~`, `vcf~`, `line~`, `vline~` (con demora, precisión de muestra), `delwrite~`, `delread~`, `tabosc4~` (usa la tabla como forma de onda vía `PeriodicWave`).
- **Exportar**: `toPd(L)` escribe el patch como `.pd` vanilla (`#X obj`, `#X msg`, `floatatom`, `bng`, `tgl`, `hsl`, arrays con `#A`, `#X connect`).

## `js/app.js`

- `LESSONS`: por lección, `id`, `part`, `file`, `scope` (vista inicial del osciloscopio) y `patch` (`nodes` + `edges`). Los textos se mezclan desde `T.lessons[id]`.
- `REF`: `[objeto, categoría, ejemplo]`; la descripción viene de `T.ref` en el mismo orden.
- Arma la página: encabezados de parte, lecciones, reglas de oro, chuleta con filtros, navegación activa, dock y el dibujo del hero.

## Agregar una lección

1. En `js/app.js`, sumá un objeto a `LESSONS` con su patch. Helpers: `O()` objeto, `M()` mensaje, `C()` comentario, `NUM()`, `HS()` slider, `BG()` bang, `TG()` toggle, `AR()` array.
2. En **cada** `lang/*.js`, sumá `lessons.<id>` con `short`, `eyebrow`, `title`, `lede`, `body` (HTML), `tryit` (lista) y `tip` (`[título, texto]`). Si el patch tiene comentarios o etiquetas nuevas, agregalas a `labels` en cada idioma (la clave es el texto en castellano).
3. Si usa un objeto que el motor no conoce, agregalo en `ioSpec()` y `makeRT()` de `js/engine.js`.
4. Regenerá `patches/` (ver `docs/PUBLICAR.md`).
