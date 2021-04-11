const {app, ipcMain, BrowserWindow} = require("electron");
const serve = require("electron-serve");
const ws = require("electron-window-state");
try { require("electron-reloader")(module); } catch {}

const loadURL = serve({directory: "."});
const port = process.env.PORT || 3000;
const isdev = !app.isPackaged || (process.env.NODE_ENV == "development");
let mainwindow;

function loadVite(port) {
  mainwindow.loadURL(`http://127.0.0.1:${port}`).catch((err) => {
    setTimeout(() => { loadVite(port); }, 200);
  });
}

function createMainWindow() {
  let mws = ws({
    defaultWidth: 1000,
    defaultHeight: 800
  });

  mainwindow = new BrowserWindow({
    x: mws.x,
    y: mws.y,
    width: mws.width,
    height: mws.height,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: isdev
    }
  });

  mainwindow.once("close", () => { mainwindow = null; });

  if(!isdev) mainwindow.removeMenu();
  else mainwindow.webContents.openDevTools();

  mws.manage(mainwindow);

  if(isdev) loadVite(port);
  else loadURL(mainwindow);
}

app.once("ready", createMainWindow);
app.on("activate", () => { if(!mainwindow) createMainWindow(); });
app.on("window-all-closed", () => { if(process.platform !== "darwin") app.quit(); });

