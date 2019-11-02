const setIconAndPopup = (enabled, tabId) => {
    const suffix = enabled ? 'enabled' : 'disabled'
    chrome.browserAction.setIcon({
        tabId,
        path: {
            '16': `icons/16-${suffix}.png`,
            '32': `icons/32-${suffix}.png`,
            '48': `icons/48-${suffix}.png`,
            '128': `icons/128-${suffix}.png`,
        },
    })
    chrome.browserAction.setPopup({
        tabId,
        popup: `popups/${suffix}.html`,
    })
}

chrome.runtime.onMessage.addListener((req, sender) => {
    // console.log('enabled', request.enabled)
    // console.log('sender', JSON.stringify(sender))
    setIconAndPopup(req.enabled, sender.tab.id)
})