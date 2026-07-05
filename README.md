# Jim G — GTA V Live Map

GTA V Leaflet map (Atlas / Satellite / Grid). See [THIRD_PARTY.md](./THIRD_PARTY.md) for open-source attributions.

## Setup

Add tile folders to `public/mapStyles/`:

- `styleAtlas/`
- `styleSatelite/`
- `styleGrid/`

```bash
npm install
npm run dev
```

Open `http://localhost:5173/`

## GitHub Pages

1. Push to GitHub
2. Settings → Pages → Source: GitHub Actions
3. Push to `main` deploys `preview-dist/`
4. Live URL: `https://<user>.github.io/<repo>/`

Tiles are not in git (too large). Host them separately for a public demo (Release, CDN, etc.).

## Layout

```
index.html
main.js
src/jim-gta-map.js
public/leaflet.css
public/mapStyles/
LICENSE
THIRD_PARTY.md
```
