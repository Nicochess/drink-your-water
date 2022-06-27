export const setAlarmTimer = (time: number | null) => {
  chrome.storage.local.set({ timer: time });
};

export const createAlarm = () => {
  chrome.storage.local.get(["timer"], ({ timer }) => {
    chrome.alarms.create("drink water", {
      periodInMinutes: Number(timer),
    });
  });
};
