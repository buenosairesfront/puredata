# Publicar y enlazar

## GitHub Pages

La app se sirve con GitHub Pages desde la rama `main`, carpeta raíz:

**https://buenosairesfront.github.io/puredata/**

Para activarlo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**. El archivo `.nojekyll` evita que GitHub procese el sitio con Jekyll. Cada push a `main` actualiza la página en uno o dos minutos.

Al cambiar archivos, subí la versión `V` en `js/i18n.js` y los `?v=` de `index.html`, así los celulares que ya la tienen en caché toman la versión nueva.

Si cambiás un patch, regenerá los `.pd` de `patches/` desde la app: abrí la lección en castellano, **Ver como archivo .pd → Descargar**, y reemplazá el archivo.

## Landing de Buenos Aires Front (Instagram)

Para sumar la app a la sección de apps web de la landing, agregá una fila **Laboratorio Pd** con estas dos claves del objeto `LINKS`, igual que el resto de las apps:

```js
repos: { puredata: "https://github.com/buenosairesfront/puredata", ... },
demos: { puredata: "https://buenosairesfront.github.io/puredata/", ... },
```

Texto sugerido para la tarjeta:

- **Título:** Laboratorio Pd
- **Bajada:** Aprendé Pure Data tocando: 14 patches vivos que suenan en el navegador, de los mensajes a la FM, delays y wavetables. Se exportan a .pd. ES · EN · DE · 日本 · 中文 · हिं
- **Imagen:** `https://buenosairesfront.github.io/puredata/og.png` (1200 × 630)
- **Ícono:** `https://buenosairesfront.github.io/puredata/icon-512.png`

**Probar ↗** abre la app (sin `?lang=` abre en castellano o en el último idioma elegido). **Código** abre este repositorio. Para enlazar un idioma concreto:

```
https://buenosairesfront.github.io/puredata/?lang=es
https://buenosairesfront.github.io/puredata/?lang=en
https://buenosairesfront.github.io/puredata/?lang=de
https://buenosairesfront.github.io/puredata/?lang=ja
https://buenosairesfront.github.io/puredata/?lang=zh
https://buenosairesfront.github.io/puredata/?lang=hi
```

También se puede enlazar directo a una lección (`#fm`, `#delay`…), a las reglas (`#reglas`) o a la chuleta (`#ref`). Lista completa en [`GUIA.md`](GUIA.md).

## Instagram

`og.png` es la imagen que aparece al compartir el enlace. El link en bio puede ir a la landing o directo a `https://buenosairesfront.github.io/puredata/`. El navegador interno de Instagram reproduce audio después del primer toque, como cualquier navegador móvil; si no suena, revisá que el celular no esté en silencio (en iPhone, el interruptor lateral también silencia la web).
