# Electron & SvelteKit

A minimal project template for Electron and SvelteKit.<br>
Currently the template is configured with ![adapter-static](https://www.npmjs.com/package/@sveltejs/adapter-static).

![Screenshot](https://github.com/Dax89/electron-sveltekit/blob/master/screenshot.png)

## Installation

```
npx degit Dax89/electron-sveltekit
```

## Commands
- `npm run dev`: Runs SvelteKit in dev mode
- `npm run start`: Runs SvelteKit in production mode
- `npm run electron`: Runs SvelteKit with electron in dev mode
- `npm run build`: Runs SvelteKit compiler
- `npm run dev:package`: Creates an Electron package (you can inspect the contents)
- `npm run package`: Create a distributable Electron package

## Bootstrap 5 and FontAwesome support

Download the template and install the dependencies:

```
npx degit Dax89/electron-sveltekit
npm install --save boostrap@next @fortawesome/fontawesome-free
```

Add these lines in `src/app.scss`:

```
@import "bootstrap/scss/bootstrap";
@import "@fortawesome/fontawesome-free/css/all.min.css";
```
