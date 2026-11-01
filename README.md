# Posteos estático Festival

Generador de los posteos de Instagram (1080x1350) de cada participante del
festival Te Conozco Chacarita, a partir de la planilla de la agenda.

## Archivos

- `post_template.html`: diseño del posteo, calibrado píxel a píxel contra
  `referencia.png`. Bebas Neue (horario, título, fecha/web) y Georgia
  (subtítulo).
- `tcc_logo_official.png`: logo de Te Conozco Chacarita.
- `tools/gen_posts.py`: arma un JPG por ítem de la planilla.
- `tools/build_psd.js`: arma el PSD con capas de un posteo (lo llama
  `gen_posts.py` con la opción `--psd`).
- `tools/measure.py`: mide posición y tamaño de cada elemento de un posteo
  (sirve para comparar contra la referencia si se toca el diseño).

## Cómo generar

1. Exportar la planilla como CSV a `sheet.csv`.
2. Poner en `assets/` la foto y el logo de cada ítem, con el mismo nombre que
   la columna `item` de la planilla: `<item>.jpg` y `<item>_logo.jpg`
   (también acepta `-logo`, `.png`, mayúsculas, tildes y comillas).
3. Correr:

   ```
   python3 tools/gen_posts.py sheet.csv . out
   ```

   Para generar solo algunos ítems, agregar sus nombres al final:

   ```
   python3 tools/gen_posts.py sheet.csv . out 'CAMINATA "PAISAJEANTE"'
   ```

   Para generar también el PSD con capas de cada posteo, agregar `--psd`
   (la primera vez, correr `npm install` en esta carpeta):

   ```
   python3 tools/gen_posts.py sheet.csv . out --psd
   ```

Los JPG (y PSD) quedan en `out/`. Necesita Chromium (headless), ImageMagick
y, para los PSD, Node.js.

## PSD

Cada PSD tiene una capa por elemento: fondo, foto, barrita de colores, caja
del horario, logo del participante, logo de Te Conozco Chacarita, punto rojo
y los textos (horario, título, subtítulo, fecha y web) como capas de texto
editables en Bebas Neue y Georgia Bold.

Al abrirlo, Photoshop avisa que hay que actualizar las capas de texto: hay que
elegir "Actualizar". Para que se vean bien, Bebas Neue y Georgia tienen que
estar instaladas en la computadora.

## Reglas del diseño

- El color del horario sale de la categoría, con el mismo orden de colores que
  la agenda.
- Si el título no entra en una línea se parte en dos y se achica lo justo para
  que entren las dos líneas.
- El subtítulo usa la columna `subtitulo_post` si existe y tiene texto; si no,
  `item_subtitulo`. Si es muy largo se achica y, como último recurso, se corta
  en la última palabra que entra y se agrega "…".
- Logos cuadrados se recortan en círculo; logos no cuadrados van dentro de un
  círculo blanco.
- Si un ítem no tiene foto en `assets/`, se saltea.
