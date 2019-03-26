/* global module */
const React = require('react');
const PropTypes = require('prop-types');

const TrackerList = require('./TrackerList');

const {
  getTrackers,
} = require('.');

const transformEntries = (entries = []) => {
  const entryNames = Object.keys(entries);
  return entryNames.map(
    id => ({
      id,
      label: entries[id].label,
      enabled: entries[id].enabled,
    })
  );
};

const wrapPageElement = ({ element }) => {
  const trackers = transformEntries(getTrackers());
  return (
    <React.Fragment>
      {element}
      <TrackerList trackers={trackers} />
    </React.Fragment>
  );
};

wrapPageElement.propTypes = {
  element: PropTypes.element,
}

module.exports = {
  wrapPageElement,
}
