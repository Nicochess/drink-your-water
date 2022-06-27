chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ timer: 120 });

  chrome.alarms.create("drink water", {
    periodInMinutes: 120,
  });
});

chrome.alarms.onAlarm.addListener(() => {
  createNotification("popup");
});

const createNotification = (id) => {
  chrome.notifications.clear(id);

  chrome.notifications.create(id, {
    type: "basic",
    iconUrl: "./icons/water128.png",
    title: "Hora de beber água",
    message: "Se mantenha hidratado, não esqueça de encher sua garrafinha.",
    requireInteraction: true,
    buttons: [
      {
        title: "Acabei de beber!",
      },
    ],
  });
};
