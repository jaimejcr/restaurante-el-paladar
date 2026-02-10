## Objetivo 1
Web estática para [cliente], usada como caso práctico para mejorar [A11y/semántica/SEO/performance/JS], documentando el antes/después para portfolio.




# Plan (MVP)



## MVP
- Home (index)
- Arroces
- Carnes
- Contacto 
- Eventos 

## Estructura objetivo
/ (root)
- index.html
/pages
- arroces.html
- carnes.html
- contacto.html
- eventos.html
/assets
- /css
- /js
- /img
- /logo-fav-icons

## Hitos
- Milestone 1: Repo + docs + .gitignore + primer commit
- Milestone 2: Reestructurar con git mv + ajustar rutas
- Milestone 3: QA (W3C/Lighthouse/axe/teclado) + release

## Inventario actual

### Páginas
- Home: `index.html`
- Carta / Arroces: `pages/arroces.html`
- Carta / Carnes: `pages/carnes.html`
- Contacto (scaffold): `pages/contacto.html`
- Eventos (scaffold): `pages/eventos.html`

### CSS
- Base global: `assets/css/base.css`
- Componentes: `assets/css/components.css`
- Por página:
  - Home: `assets/css/home.css`
  - Arroces: `assets/css/arroces.css`
  - Carnes: `assets/css/carnes.css`
  - Contacto (vacío): `assets/css/contacto.css`
  - Eventos (vacío): `assets/css/eventos.css`

### JavaScript
- Base (vacío): `assets/js/base.js`
- Arroces: `assets/js/arroces.js`
- Contacto (stub): `assets/js/contacto.js`

### Assets
- Logos/favicons: `assets/logo-favicon/`
- Imágenes: `assets/img/` (incluye `galeria/` y `hero/`)
- Iconos SVG: `assets/icons/`

### Observaciones (para backlog)
- `contacto.css`, `eventos.css` y `base.js` están vacíos (pendiente de implementar o eliminar si no se usan).
- Hay nombres de imágenes con espacios y caracteres especiales (posible refactor a naming consistente más adelante).
