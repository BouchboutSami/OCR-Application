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
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/src/Home-page/home.html`);
});

function quitApplication() {
  alert("Cliquez sur OK pour quitter");
  self.close();
}
