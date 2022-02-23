# SvelteKit + Electron

<p align="center">
  <img src="https://github.com/Dax89/electron-sveltekit/blob/master/icon.png" width="256">
</p>
<p align="center">
  A minimal project template for Electron and SvelteKit configured with <a href="https://www.npmjs.com/package/@sveltejs/adapter-static">adapter-static</a>.
</p>

## Screenshot 
![Screenshot](https://github.com/Dax89/electron-sveltekit/blob/master/screenshot.png)

## Installation

```
npx degit Dax89/electron-sveltekit
```

## Commands
- `npm run dev`: Runs SvelteKit in dev mode
- `npm run preview`: Runs SvelteKit in production mode
- `npm run electron`: Runs SvelteKit with electron in dev mode
- `npm run build`: Runs SvelteKit compiler
- `npm run dev:package`: Creates an Electron package (you can inspect the contents)
- `npm run package`: Creates a distributable Electron package

## Bootstrap 5 and FontAwesome support

Download the template and install the dependencies:

```
npx degit Dax89/electron-sveltekit
npm install --save bootstrap@next @fortawesome/fontawesome-free
```

Add these lines in `src/app.scss`:

```
@import "bootstrap/scss/bootstrap";
@import "@fortawesome/fontawesome-free/css/all.min.css";
```
