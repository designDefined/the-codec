# How I initiated "The-Codec" project

“The Codec” is a mono-repo project that stores all web clients, servers, and custom packages in a single repository. I will record every tips and tutorial I looked up when setting up this project. I hope this could be a full guide for initiating a huge, clean-architectured full-stack project one day

## Table of Content

- [Node](#node)
- [Git](#git)
- [Yarn](#yarn)
- [Prettier](#prettier)

## Node

Before starting this project, I upgraded my Node version to the latest LTS one(20.9.1). You can download Node.js [here](#https://nodejs.org/en) but I used the npm package [n](#https://github.com/tj/n) for easy version management.

- [Node.js](#https://nodejs.org/en)
- [n](#https://github.com/tj/n) (node version controller)
- [20.9.1 API Reference](#https://nodejs.org/dist/latest-v20.x/docs/api/)

## Git

Use [git](#https://git-scm.com/) for version control. My local git version is 2.39.2.

`.gitignore` can be easily generated in [here](#https://www.toptal.com/developers/gitignore/)

- [git](#https://git-scm.com/)
- [gitignore.io](#https://www.toptal.com/developers/gitignore/)

## Yarn

This project uses the cutting-edge version of Yarn(4.0.0.) as the package manager.
Despite the key feature of Yarn Berry(version 2.0 or later) being [plug-n-play](#https://yarnpkg.com/features/pnp) mode and it supports the mode so smoothly, I used old “node_modules” no different than yarn Classic or npm.

You can initialize a new yarn workspace with the `[yarn init](#https://yarnpkg.com/cli/init)` command.

- [Breaking Changes in Yarn 4](#https://github.com/yarnpkg/berry/issues/3591)
- [Configs of package.json](#https://yarnpkg.com/configuration/manifest)

## Prettier

Prettier is used as a default code-style formatter. A single Prettier configuration file in the root directory works for all workspaces. It’s because code style never depends on frameworks or libraries each workspace is using.

Add the commonly used directory patterns in `.prettierignore` to tell Prettier to ignore distribution files.

**current issue**
VSCode does not recognize the yaml syntax of `.prettierrc`.

- [All Configurations](#https://prettier.io/docs/en/options)

## Yarn Workspaces

- [Yarn Workspaces](https://yarnpkg.com/features/workspaces)
- [Tutorial 1(KR)](#https://www.testbank.ai/42b54c4b-2aa7-4bc7-b29b-b7219c700f22)
- [Tutorial 2(KR)](#https://blog.hwahae.co.kr/all/tech/11962)

## Husky

## Eslint

## Typescript
