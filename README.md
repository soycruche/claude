# Posteos estático Festival

Generador de los posteos de Instagram (1080x1350) de cada participante del
festival Te Conozco Chacarita, a partir de la planilla de la agenda.

## Archivos

- `post_template.html`: diseño del posteo, calibrado píxel a píxel contra
  `referencia.png`. Bebas Neue (horario, título, fecha/web) y Georgia
  (subtítulo).
- `tcc_logo_official.png`: logo de Te Conozco Chacarita.
- `tools/gen_posts.py`: arma un JPG por ítem de la planilla.
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

Los JPG quedan en `out/`. Necesita Chromium (headless) e ImageMagick.

## Reglas del diseño

- El color del horario sale de la categoría, con el mismo orden de colores que
  la agenda.
- Si el título no entra en una línea se parte en dos y se achica lo justo para
  que entren las dos líneas.
- El subtítulo usa la columna `subtitulo_post` si existe y tiene texto; si no,
  `item_subtitulo`. Si es muy largo se achica y, como último recurso, se corta
  con "…".
- Logos cuadrados se recortan en círculo; logos no cuadrados van dentro de un
  círculo blanco.
- Si un ítem no tiene foto en `assets/`, se saltea.
