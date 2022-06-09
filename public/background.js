/* global chrome */

chrome.alarms.create("drink water", {delayInMinutes: 1})

chrome.alarms.onAlarm.addListener(() => {
    createNotification(clearNotifications)
})

const createNotification = (callback) => {
    callback()

    chrome.notifications.create("popup", {
        type: "basic",
        iconUrl: "./icons/water128.png",
        title: "Hora de beber água",
        message: "Se mantenha hidratado, não esqueça de encher sua garrafinha.",
        requireInteraction: true,
        buttons: [{
            title: "Acabei de beber!"
        }]
    })
}

const clearNotifications = () => {
    chrome.notifications.clear("popup")
}
