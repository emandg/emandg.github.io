window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js")
        .then(registration => {
            console.debug("Service worker is registered", registration);
        })
        .catch(err => {
            console.error("Service worker registration failed", err);
        })
    }
});