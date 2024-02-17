// TO DO LIST:
// * Make the notification api more customizable, check the Electron documentation on Notification API
//
// * After figuring out all the functions that I need and wrote them as I want, add verification on parameters and other data to ensure that
// the right data is being passed. Ex: if(typeOf message !== 'object') throw new Error("Invalid Parameter: 'don't give to many info about the error here so that a hacker won't be able to debug the error' ")

const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

function createMainWindow() {
	const window = new BrowserWindow({
		width: isDev ? 1200 : 800, // for devTools
		height: 600,
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
