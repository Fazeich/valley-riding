# Valley Riding

A 3D open-world driving game built with react-three-fiber: a voxel car explores a procedurally streamed valley, collects energy crystals and relights five beacons (**Хранители маяков** expedition).

Play: https://fazeich.github.io/valley-riding/

Valley Riding 2.0.0 was split out of the [portfolio](https://github.com/Fazeich/portfolio) project. The Snake 3D and Letter Rain mini-games stay in the portfolio, and the altars in the valley link to them.

## Controls

| Key | Action |
|---|---|
| `WASD` / arrows | Drive |
| `E` | Enter an altar (opens the mini-game on the portfolio site) |
| `F` | Restore a beacon / complete the expedition |
| `R` | Rescue to camp |
| `M` | Atlas |
| `Esc` | Pause menu |

## Tech Stack

- **React 18** + **Vite** + **TypeScript** (strict)
- **Three.js** + **react-three-fiber**, **drei**, **@react-three/postprocessing**
- **Effector**: discrete expedition events
- **styled-components**: DOM overlays and theming
- **Vitest**: unit tests for car/crate physics, world generation and expedition rules

## Getting Started

```bash
npm install
npm run start      # dev server → http://localhost:3000/valley-riding/
```

Scripts: `npm run build`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run deploy` (manual GitHub Pages deploy).

Every push to `master` is built and published to the `gh-pages` branch by `.github/workflows/deploy.yml`.

## Links

- [Telegram](https://t.me/samsyaaa)
- [GitHub](https://github.com/fazeich)
- Email: vladislavchenko@inbox.ru
