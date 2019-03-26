/* global module */
const React = require('react');
const PropTypes = require('prop-types');
const Tracker = require('./Tracker');

const trackerListStyle = {
  background: '#fff',
  position: 'absolute',
  top: '10px',
  margin: '0 auto',
  padding: '20px',
};

class TrackerList extends React.Component {
  static propTypes = {
    trackers: PropTypes.array,
  }

  state = {
    closed: false,
  }

  close = () => {
    this.setState({ closed: true });
  }

  render() {
    const { closed } = this.state;
    if (closed) {
      return null;
    }
    const renderedTrackers = this.props.trackers.map(tracker =>
      <Tracker
        key={tracker.id}
        id={tracker.id}
        label={tracker.label}
        track={tracker.track}
      />
    );
    return (
      <div style={trackerListStyle}>
        <h2>Manage tracking platforms</h2>
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Enabled</th>
            </tr>
          </thead>
          <tbody>
            {renderedTrackers}
          </tbody>
        </table>
        <button onClick={this.close}>Close</button>
      </div>
    );
  }
}

module.exports = TrackerList;
