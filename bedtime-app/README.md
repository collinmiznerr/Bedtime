# Bedtime App Prototype

An interactive click-through prototype of the Bedtime app onboarding flow, built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site to the `dist` folder.

## Deploy to Netlify

**Option A — connect your GitHub repo (recommended):**
1. Push this entire folder's contents to your GitHub repo (not just `App.jsx` — everything: `package.json`, `vite.config.js`, `index.html`, `netlify.toml`, and the `src/` folder).
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick this repo.
3. Netlify should auto-detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**. Netlify will give you a live URL like `https://your-site-name.netlify.app`.

**Option B — drag and drop (fastest, no GitHub needed):**
1. Run `npm install` then `npm run build` on your machine.
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder onto the page. You'll get a live URL instantly.

## Project structure

```
bedtime-app/
├── index.html          entry HTML file
├── package.json         dependencies + scripts
├── vite.config.js        build tool config
├── netlify.toml          Netlify build settings
└── src/
    ├── main.jsx          mounts the app
    └── App.jsx           the Bedtime prototype component
```
