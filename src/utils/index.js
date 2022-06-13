/* global chrome */

export const setAlarmTimer = (time) => {
  chrome.storage.local.set({ timer: time });
};

export const createAlarm = () => {
  chrome.storage.local.get(["timer"], ({ timer }) => {
    
    chrome.alarms.create("drink water", {
      delayInMinutes: Number(timer),
    });

  });
};
