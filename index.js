/* global module */
const store = require('store');
const updatePlugin = require('store/plugins/update');

store.addPlugin(updatePlugin);

const storeKey = 'gatsby:trackers';

function registerTracker({ id, label }) {
  if (!getTracker(id)) {
    store.update(
      storeKey,
      {},
      (obj) => {
        obj[id] = { label, enabled: false }
      }
    );
  }
}

function updateTracker(id, enabled) {
  store.update(
    storeKey,
    {},
    (obj) => {
      if (typeof obj[id] === 'object') {
        obj[id].enabled = enabled
      }
    }
  );
}

function updateTrackers(enabled) {
  const trackers = getTrackers();
  if (!trackers) {
    return;
  }
  Object.keys(trackers).forEach(id => updateTracker(id, enabled));
}

function getTrackers() {
  return store.get(storeKey);
}

function getTracker(id) {
  const trackers = getTrackers();
  return trackers && trackers[id] || null;
}

function enableTracker(id) {
  updateTracker(id, true);
}

function enableTrackers() {
  updateTrackers(true);
}

function disableTracker(id) {
  updateTracker(id, false);
}

function disableTrackers() {
  updateTrackers(false);
}

module.exports = {
  registerTracker,
  getTrackers,
  getTracker,
  enableTracker,
  enableTrackers,
  disableTracker,
  disableTrackers,
};
