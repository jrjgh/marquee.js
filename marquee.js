

const marqueeTitle = (function() {
    let lastInterval = 0
    const original = document.getElementsByTagName("title")[0].innerText
    return function (title, options) {
        let interval = options?.interval || 300
        let titleEl = document.getElementsByTagName("title")[0]

        clearInterval(lastInterval)
        if (options?.reset) {
            titleEl.innerText = original
            return
        }
        lastInterval = setInterval( function() {
            title = title.slice(1) + title[0]
            titleEl.innerHTML = title
        }, interval)
    }
})()