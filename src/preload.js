const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
    onUpdateTheme: (callback) => ipcRenderer.on('update-theme', callback),
    onOpenFiles: (callback) => ipcRenderer.on('open-files', callback),
})