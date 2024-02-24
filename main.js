const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

function createMainWindow() {
	const window = new BrowserWindow({
		width: isDev ? 1400 : 1200, // for devTools
		height: 800,
		backgroundColor: "#1f1f1f",
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			devTools: isDev ? true : false,
			nodeIntegration: false,
			contextIsolation: true,
		},
	});

	window.loadFile("index.html");

	isDev && window.webContents.openDevTools();
}

app.whenReady().then(createMainWindow);

ipcMain.on("notification", (_, data) => {
	// To Do: data should be an object with the configuration of the notification, check electron docs
	new Notification({ title: "new notification", body: data }).show();
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createMainWindow();
	}
});
