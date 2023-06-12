# OHCRN Consent Platform

[![TypeScript](https://img.shields.io/badge/types-%20TypeScript-blue)](https://www.typescriptlang.org/)
<!-- [![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://prettier.io/) -->

<!-- | Release    | Build Status                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Edge**   | [![Build Status](https://jenkins.qa.cancercollaboratory.org/buildStatus/icon?job=ARGO%2Fui%2Fdevelop)](https://jenkins.qa.cancercollaboratory.org/job/ARGO/job/ui/job/develop/) |
| **Latest** | [![Build Status](https://jenkins.qa.cancercollaboratory.org/buildStatus/icon?job=ARGO%2Fui%2Fmaster)](https://jenkins.qa.cancercollaboratory.org/job/ARGO/job/ui/job/master/)   | -->

This monorepo contains the UI, API, and shared TypeScript types for the OHCRN Consent Platform - a portal through which patients can self-register and clinicians can register their patients to consent to participate in the OHCRN study.

This project is a monorepo managed by pnpm (TODO: insert link to pnpm).

The directory structure is as follows:
```
.
├── apps
│   ├── api     <- Node.js Express API
│   │   ├── prisma
│   │   └── src
│   └── ui      <- Next.js UI
│       ├── public
│       └── src
└── packages
    └── common  <- shared TypeScript type definitions
        └── src
```

## Local development

<!-- ### Starting local back-end services

A [docker-compose](https://docs.docker.com/compose/) setup is available in the [`compose`](./compose) folder.
Navigate to `/compose` (`cd ./compose`) and Follow the instructions found in [`compose/README.md`](compose/README.md) to start a local cluster of Argo Platform micro services. -->

### Setup

- Install pnpm: `brew install pnpm`
- Install dependencies: `pnpm install`
<!-- - Set up environment: copy `.env.schema` to `.env` and update environment accordingly. Out-of-the-box values are meant for local development. -->
- Dev commands:
  - `pnpm run dev` starts local dev servers for UI (localhost:3000) and API (localhost:8080)
  - `pnpm run build` builds type defs, production UI build, API build

### Writing commits

To keep commit messages consistent, we use [gitmoji](https://gitmoji.dev). To easily access emojis on Mac, press ctrl+cmd+space.
<!-- 
### Type checking

- `npm run type-check`: trigger TypeScript type check for whole repo
- `npm run type-check -- --watch`: runs the above with watch mode
  - Any `npm run type-check` triggers `tsc`, so any flag layed out [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html) can be used
- If using [vscode](https://code.visualstudio.com/) (recommended), `tsc` can also be run as a task in the editor:
  - `Cmd+Shift+B`, then select `tsc:build - tsconfig.json`
  - This will report errors in vscode's `PROBLEMS` tab -->
