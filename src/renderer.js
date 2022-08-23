document.querySelector('#hello-button').addEventListener('click', function () {
	alert('Hello World!')
})

window.electron.onUpdateTheme((event, theme) => {
	document.body.classList.add(theme)
	console.log({
		event,
		theme,
	})
    const root = document.documentElement
    root.style.setProperty('--scheme', theme)
})

window.electron.onOpenFiles((event, files) => {
    console.log({
        event,
        files,
    })
})
