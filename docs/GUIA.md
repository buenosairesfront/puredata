# Guía de la app

## Recorrido

1. **Inicio**: “▶ Encender audio y empezar” prende el audio y lleva a la lección 01. Los navegadores solo permiten sonido después de un toque, por eso el primer clic sobre cualquier patch con `dac~` prende su DSP.
2. **Barra superior**: lecciones numeradas (se marca la que estás leyendo) y los botones de idioma.
3. **Cada lección**: texto a la izquierda y el laboratorio a la derecha (abajo en el celular):
   - **Patch**: amarillo = mensajes, cian = señal, magenta = controles (clic en mensajes y bangs, arrastrar números y sliders, dibujar en las tablas).
   - **DSP**: prende o apaga el audio de ese patch. Suena un solo patch a la vez.
   - **Osciloscopio**: onda, espectro o envolvente.
   - **Ventana de Pd**: lo que imprimen los `print`.
   - **Ver como archivo .pd**: el patch como texto de Pd, para copiar o descargar.
4. **Reglas de oro** (después de la lección 03), **chuleta** de objetos con buscador, **atajos** y enlaces para seguir aprendiendo.
5. **Dock** (abajo a la derecha): estado del DSP, volumen general y “Silencio”.

## Lecciones e ids

Para enlazar una lección: `https://buenosairesfront.github.io/puredata/?lang=es#<id>`

| # | id | Lección | Archivo |
|---|---|---|---|
| 00 | `leer` | Cómo se lee un patch | `00-leer.pd` |
| 01 | `mensajes` | Todo es un mensaje | `01-mensajes.pd` |
| 02 | `frio` | Inlet caliente, inlet frío | `02-frio-caliente.pd` |
| 03 | `orden` | De derecha a izquierda | `03-orden.pd` |
| 04 | `senal` | La señal nunca para | `04-senal.pd` |
| 05 | `aditiva` | Sumar senoidales | `05-aditiva.pd` |
| 06 | `ring` | Multiplicar dos señales | `06-ring.pd` |
| 07 | `fm` | Frecuencia que baila | `07-fm.pd` |
| 08 | `filtros` | Esculpir con filtros | `08-sustractiva.pd` |
| 09 | `envolventes` | Darle forma al tiempo | `09-envolventes.pd` |
| 10 | `secuenciador` | Contar pasos | `10-secuenciador.pd` |
| 11 | `generativo` | Azar con reglas | `11-generativo.pd` |
| 12 | `delay` | Ecos con cables invisibles | `12-delay.pd` |
| 13 | `tablas` | Dibujar una onda | `13-wavetable.pd` |

Otras anclas: `#reglas` (reglas de oro) y `#ref` (chuleta).

## Abrir los patches en Pd

Descargá el `.pd` desde la lección (sale con los textos del idioma elegido) o desde la carpeta [`patches/`](../patches/) (en castellano) y abrilo con Pd vanilla 0.51 o posterior. Dos diferencias con la web:

- En la web los sliders mandan su valor al prender el DSP. En Pd agregá un `loadbang` o movelos una vez.
- En Pd hay que prender el DSP con **Ctrl+/** (Cmd+/ en Mac).
