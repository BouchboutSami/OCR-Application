const electron = require("electron");
const { app, BrowserWindow } = electron;
const path = require("path");
var fs = require("fs");

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = true;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 680,
    minWidth: 940,
    minHeight: 560,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  splash = new BrowserWindow({
    width: 1200,
    height: 680,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
  });
  splash.loadFile("./src/splashScreen/SplashScreen.html"); //chargeement du fichier html
  setTimeout(function () {
    splash.destroy();
    mainWindow.loadFile("./src/Home-page/home.html");
    mainWindow.show();
  }, 6000);
  mainWindow.loadURL(`file://${__dirname}/src/Home-page/home.html`);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

function quitApplication() {
  alert("Cliquez sur OK pour quitter");
  self.close();
}
