# OHCRN Consent Platform

[![TypeScript](https://img.shields.io/badge/types-%20TypeScript-blue)](https://www.typescriptlang.org/)

<!-- [![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://prettier.io/) -->

<!-- | Release    | Build Status                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Edge**   | [![Build Status](https://jenkins.qa.cancercollaboratory.org/buildStatus/icon?job=ARGO%2Fui%2Fdevelop)](https://jenkins.qa.cancercollaboratory.org/job/ARGO/job/ui/job/develop/) |
| **Latest** | [![Build Status](https://jenkins.qa.cancercollaboratory.org/buildStatus/icon?job=ARGO%2Fui%2Fmaster)](https://jenkins.qa.cancercollaboratory.org/job/ARGO/job/ui/job/master/)   | -->

This monorepo contains the UI, API, and shared TypeScript types for the OHCRN Consent Platform - a portal through which patients can self-register and clinicians can register their patients to consent to participate in the OHCRN study.

This project is a monorepo managed by [pnpm](https://pnpm.io/motivation)

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

## Local development

To run the setup locally, ensure you have provided the **required** environment variables, as described in [Environment Variables](#environment-variables). Each package has an `.env.schema` file for reference.

- In the [`/apps/api/` folder](./apps/api/), create an `.env` file
- In the [`/apps/ui/` folder](./apps/ui/), create and `.env.local` file

## Environment Variables

| Package | Name           | Description                                                                                                                                                                          | Type     | Required | Default |
| ------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------- | ------- |
| `api`   | `DATABASE_URL` | URL for the Postgres DB. Syntax should match `postgresql://USER:PASSWORD@HOST:PORT/DATABASE`. For local dev, the values should match what is used in the `docker-compose.yaml` file. | `string` | Required | -       |
| `api`   | `PORT`         | the port number for the API service                                                                                                                                                  | `number` | Optional | `8080`  |

## Setup

- Install pnpm: `brew install pnpm`
- Install dependencies: `pnpm install`

## Quickstart - DB, Migrations, and Local Servers

This project uses [Postgres](https://www.postgresql.org/) and [Prisma](https://www.prisma.io/docs) for database management. A local postgres db is provided in the [docker-compose](./docker-compose.yaml). The Prisma client is initialized when the `@prisma/client` dependency is installed with `pnpm install`. You can get everything started via manually running [scripts](#with-packagejson-scripts) or using a [Make command](#using-the-makefile):

> **Note**: The `prisma migrate dev` command is for **development mode only** [(See docs reference)](https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production#create-and-apply-migrations)

### With package.json scripts

> **Note**: Run all below commands from the root folder.

You can initialize a development postgres DB by running the docker-compose.yaml file, with:

`docker-compose up -d`

Once the database is ready, you will need to apply the prisma schema migrations:

`pnpm run migrate-dev`

If successful, the script output should indicate which migrations have been applied, and you should see this message: `Your database is now in sync with your schema.`

Once this is complete, you can start the local API and UI on their default ports:

`pnpm run dev`

> **Note**: If you see a `'Error: @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.'` message in the console when trying to run in dev, you may need to manually run the `pnpm run generate` script, and then start the local servers again. This script runs the `prisma generate` command.

### Using the Makefile

You can run all of the above steps with the `make start` command.

To shut down the docker-compose and remove any orphan containers, run `make stop`.

<!-- ### Starting local back-end services

A [docker-compose](https://docs.docker.com/compose/) setup is available in the [`compose`](./compose) folder.
Navigate to `/compose` (`cd ./compose`) and Follow the instructions found in [`compose/README.md`](compose/README.md) to start a local cluster of Argo Platform micro services. -->

<!-- - Set up environment: copy `.env.schema` to `.env` and update environment accordingly. Out-of-the-box values are meant for local development. -->

Verify everything is running correctly by navigating to [`http://localhost:3000`](http://localhost:3000) for the UI and [`http://localhost:8080`](http://localhost:8080/health) for the API.

### Dev commands:

- `pnpm run dev` starts local dev servers for UI (localhost:3000) and API (localhost:8080)
- `pnpm run build` builds type defs, production UI build, API build
