# ROXY-web

Static marketing and documentation site for [ROXY](https://github.com/RoaraxAli/ROXY),
a native Rust desktop AI client.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing page: positioning, screenshots, stack overview, FAQ |
| `install.html` | Platform downloads, step-by-step install, checksum verification, troubleshooting, source build |
| `docs.html` | Concepts, providers, agent CLIs, OpenCode, 9Router priority routing, sessions, settings, data, shortcuts |
| `assets/styles.css` | Shared design system (dark, lime accent, system fonts only) |
| `assets/logo.svg` | Brand mark |

No build step, no framework, no external fonts or scripts. Open `index.html`
directly or serve the folder with any static host.

## Running locally

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Deploying

Any static host works: GitHub Pages, Cloudflare Pages, Netlify, Vercel, S3, or
nginx. The site has no absolute hostnames — links between pages are relative, so
it can live at a domain root or in a subfolder.

For GitHub Pages: repository → Settings → Pages → deploy from branch `main`,
folder `/` (root).

## Download links

`install.html` points at GitHub Releases:

```
https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-windows-x64.zip
https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy.exe
https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux
```

These resolve to the assets attached to the newest release of the ROXY
repository. Upload those three files (plus `SHA256SUMS.txt`) with every release.

## Keeping it current

When a release ships:

1. Update the version string on `index.html` and `install.html`.
2. Add the SHA-256 values to the release notes (the page links to them).
3. Update the `docs.html` table if the agent CLI list changed.

## License

MIT — see [LICENSE](LICENSE).
