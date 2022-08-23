const { app, Menu, dialog } = require('electron')

const setMainMenu = (mainWindow) => {
	const template = [
		{
			label: 'First Electron App',
			submenu: [
				{ role: 'about' },
				{ type: 'separator' },
				{ role: 'services' },
				{ type: 'separator' },
				{ role: 'hide' },
				{ role: 'hideothers' },
				{ role: 'unhide' },
				{ type: 'separator' },
				{ role: 'quit' },
			],
		},
		{
			label: 'Edit',
			submenu: [
				{ role: 'undo' },
				{ role: 'redo' },
				{ type: 'separator' },
				{ role: 'cut' },
				{ role: 'copy' },
				{ role: 'paste' },
				{ role: 'pasteandmatchstyle' },
				{ role: 'delete' },
				{ role: 'selectall' },
			],
		},
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forcereload' },
                { role: 'toggledevtools' },
                { type: 'separator' },
                { role: 'resetzoom' },
                { role: 'zoomin' },
                { role: 'zoomout' },
                { type: 'separator' },
                { role: 'togglefullscreen' },
            ],
        },
        {
            role: 'Window',
            submenu: [
                { role: 'minimize' },
                { role: 'close' },
            ],
        },
        {
            role: 'Help',
            submenu: [
                {
                    label: 'Learn More',
                    click () { require('electron').shell.openExternal('https://electronjs.org') }
                },
            ],
        },
        {
            label: 'Themes',
            submenu: [
                {
                    label: 'Light',
                    click () { mainWindow.webContents.send('update-theme', 'light') }
                },
                {
                    label: 'Dark',
                    click () { mainWindow.webContents.send('update-theme', 'dark') }
                },
            ],
        },
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open',
                    click () { dialog.showOpenDialog(mainWindow, {
                        filters: [
                            { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
                        ],
                        properties: ['openFile', 'multiSelections']
                    }, (files) => {
                        if (files) {
                            mainWindow.webContents.send('open-files', files)
                        }
                    }) }
                },
            ],
        }
	]

	const menu = Menu.buildFromTemplate(template)
	Menu.setApplicationMenu(menu)
}

module.exports = { setMainMenu }
