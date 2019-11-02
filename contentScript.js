const enabled = window.location.href.includes('google.com')

chrome.runtime.sendMessage({
    enabled,
}, resp => {
    if (enabled) {
        const floatBtn = document.createElement('BUTTON')
        floatBtn.innerHTML = 'CLick me'
        floatBtn.className = 'float-button'
        floatBtn.addEventListener('click', function() {
            console.log('hello world!')
        })
        document.documentElement.appendChild(floatBtn)
    }
})