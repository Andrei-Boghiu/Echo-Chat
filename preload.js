const { ipcRenderer, contextBridge } = require("electron");

// Expose in renderer process electron APIs
contextBridge.exposeInMainWorld("electron", {
	notification: {
		send(message) {
			ipcRenderer.send("notification", message);
		},
	},
});
