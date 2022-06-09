/* global chrome */

chrome.alarms.create("drink water", {delayInMinutes: 120})

chrome.alarms.onAlarm.addListener(() => {
    createNotification("popup", clearNotifications)
})

const createNotification = (id, callback) => {
    callback(id)

    chrome.notifications.create(id, {
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

const clearNotifications = (id) => {
    chrome.notifications.clear(id)
}
