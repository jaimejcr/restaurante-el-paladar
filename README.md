# El Paladar de Ajalvir

Sitio estático (HTML/CSS/JS) basado en el diseño del restaurante.

## Wip
Proyecto en evolución. main se mantiene estable. Cambios y verificaciones en /docs

## Estado
- MVP: Home + Arroces + Carnes + placeholders (Contacto/Eventos)
- En progreso: migración a estructura /pages y /assets

## Scripts rápidos
- Servidor local (Python):
  - python3 -m http.server 5173
  - Abrir: http://localhost:5173/

## Objetivo
Sitio web estático (HTML/CSS/JS) para un restaurante. Proyecto de portfolio orientado a entrevista: refuerzo de accesibilidad, semántica, SEO técnico y buenas prácticas front, documentando mejoras con evidencias.

## Stack
- HTML5, CSS3, JavaScript (sin build por ahora)
- Live Server (VS Code)

## Cómo ejecutar
1. Abre el proyecto en VS Code
2. `index.html` → “Open with Live Server”

## Estructura
- `index.html`
- `pages/`
- `assets/`
- `docs/` (plan, devlog, checklist QA, evidencias)

## Roadmap (Milestones)
- [x] M0 — Preparación y enfoque (objetivo/MVP)
- [x] M1 — Repo y estándar de trabajo + evidencias iniciales
- [x] M2 — Estructura limpia + higiene del repo
- [x] M3 — Base semántica y accesible (en progreso)
- [ ] M4 — SEO técnico base
- [ ] M5 — Performance y buenas prácticas front
- [ ] M6 — Quality gates (W3C/Lighthouse/axe/teclado)
- [ ] M7 — Documentación lista para entrevista
- [ ] M8 — Publicación (GitHub Pages)

## Evidencias y QA
- Evidencias por milestone: `docs/evidence/`
- Checklist QA: `docs/qa-checklist.md`
- Diario de cambios: `docs/devlog.md`

## Cambios clave realizados (resumen)
- Corrección de rutas y eliminación de 404 en assets.
- Dedupe de CSS (Home → `base.css` + overrides).
- Accesibilidad: skip link, `main#main-content`, foco visible y `aria-label` en navegación.
- Semántica: landmarks `header/nav/main/footer` (en progreso).
- Añadido JSON_LD en index.html
- Validado con schema Markup Validator (0errores, 0 advertencias) captura en docs/validation/schema-restaurant.png