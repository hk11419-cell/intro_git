const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');

let mainWindow;
let tray;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 420,
    height: 520,
    resizable: false,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile('index.html');
  mainWindow.setSkipTaskbar(false);
}

app.whenReady().then(() => {
  createWindow();

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '常に最前面',
      type: 'checkbox',
      checked: true,
      click: (menuItem) => {
        mainWindow.setAlwaysOnTop(menuItem.checked);
      },
    },
    { type: 'separator' },
    {
      label: '終了',
      click: () => app.quit(),
    },
  ]);

  mainWindow.webContents.on('context-menu', () => {
    contextMenu.popup();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});
