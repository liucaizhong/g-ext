const enabled = window.location.href.includes('baidu.com')

chrome.runtime.sendMessage({
    enabled,
})