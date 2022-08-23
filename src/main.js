const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu.js')
const path = require('path')

const createWindow = () => {
	// Create the browser window.
	const window = new BrowserWindow({
		width: 800,
		height: 600,
		minWidth: 800,
		minHeight: 600,
		webPreferences: {
			nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
		},
	})

	// and load the index.html of the app.
	window.loadFile('src/index.html')
    setMainMenu(window)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'win32') {
        app.quit()
    }
})