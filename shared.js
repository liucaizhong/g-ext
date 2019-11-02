document.addEventListener('DOMContentLoaded', () => {
    // Make links work
    const links = document.getElementsByTagName('a')
    for (let i = 0; i < links.length; i++) {
        (() => {
            const ln = links[i]
            const location = ln.href
            ln.onclick = () => {
                chrome.tabs.create({ active: true, url: location })
            }
        })()
    }
})