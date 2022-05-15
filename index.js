const electron = require("electron");
const { app, BrowserWindow } = electron;

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = true;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 680,
    minWidth: 940,
    minHeight: 560,
  });
  mainWindow.loadURL(`file://${__dirname}/src/Home-page/home.html`);
});

function quitApplication() {
  alert("Cliquez sur OK pour quitter");
  self.close();
}
