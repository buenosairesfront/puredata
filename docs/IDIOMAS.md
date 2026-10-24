# Idiomas

| Código | Sigla en el selector | Idioma | Archivo |
|---|---|---|---|
| `es` | ES | Español (base) | `lang/es.js` |
| `en` | EN | English | `lang/en.js` |
| `de` | DE | Deutsch | `lang/de.js` |
| `ja` | 日本 | 日本語 | `lang/ja.js` |
| `zh` | 中文 | 中文（简体） | `lang/zh.js` |
| `hi` | हिं | हिन्दी | `lang/hi.js` |

Las siglas van en el alfabeto de cada idioma; el nombre completo aparece al pasar el mouse.

## Elegir idioma

- Botones arriba a la derecha (en el celular, arriba de la barra de lecciones).
- Por URL: `?lang=en`. Se puede combinar con una lección: `?lang=ja#fm`.
- La última elección queda guardada en el navegador (`localStorage`, clave `umapd-lang`). Sin `?lang=` ni elección previa, arranca en castellano.

## Qué se traduce

Todo el texto visible: interfaz, lecciones, “Probá esto”, consejos, reglas de oro, caja de objetos (descripciones y categorías), atajos, enlaces y **los comentarios y etiquetas dentro de los patches** (`labels`).

Lo que **no** se traduce, a propósito: los nombres de objetos y el contenido de los mensajes y tablas (`nota $1`, `print hola`, `escala`, `onda`, `eco`, `seq`). Son código de Pd: tienen que coincidir con lo que se exporta en el `.pd` y con lo que explica el texto. Cuando hace falta, el texto da la traducción entre paréntesis.

## Sumar un idioma

1. Copiá `lang/en.js` a `lang/<código>.js` y cambiá `PD_I18N.en` por `PD_I18N.<código>`.
2. Traducí los valores, no las claves. En `labels`, la clave es el texto en castellano que aparece en el patch.
3. Dejá igual el HTML (`<code class="s">`, `<b>`…) y los nombres de objetos.
4. En `js/i18n.js`, sumá una fila a `LANGS`: `['<código>','<sigla en su alfabeto>','<nombre en su idioma>']`.
5. Probalo con `?lang=<código>`. Si falta un texto, se muestra en castellano.

Para escrituras que no usan espacio entre letras (devanagari, árabe, tailandés…) revisá `css/style.css`: el hindi anula el `letter-spacing` de los títulos porque separa las letras unidas.
