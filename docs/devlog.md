# Devlog

- 2026-02-10 — Corrección de rutas, 404 y scaffolds
  - Problema
    Había recursos con rutas absolutas (`/assets/...`) que rompían en Live Server y en GitHub Pages.
  - Existía inconsistencia de carpeta de imágenes (`galery`   vs `galeria`) causando borrados/404.
  - Favicon apuntaba a una ruta inexistente en páginas internas.

  - Cambios
    Normalicé rutas a relativas (sin `/assets/...`) y corregí referencias a imágenes reales en `assets/img/galeria/`.
  - Unifiqué la carpeta de galería a `assets/img/galeria`.
  - Corregí favicon para páginas en `/pages` usando `../    assets/logo-favicon/favicon.png`.
  - Añadí scaffolds de `pages/contacto.html` y `pages/    eventos.html` (estructura base con header/nav/main/footer y skip link).

  - Solución
Live Server + DevTools (Network): 0 recursos 404 en `index.html`, `pages/arroces.html`, `pages/carnes.html`.
- `git grep` sin coincidencias para rutas absolutas `"/assets/"`.

  

## 2026-02-10
- Inicialización de docs y estructura base del repo.
