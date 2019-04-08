/* global module */
const React = require('react');
const PropTypes = require('prop-types');

const {
  enableTracker,
  disableTracker,
} = require('.');

class Tracker extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    enabled: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      enabled: props.enabled,
    };
  }

  enable = () => {
    const { id } = this.props;
    enableTracker(id);
    this.setState({ enabled: true });
  }

  disable = () => {
    const { id } = this.props;
    disableTracker(id);
    this.setState({ enabled: false });
  }

  render() {
    const styles = {
      enabled: { color: 'green' },
      disabled: { color: 'red' },
    }
    const { label } = this.props;
    const button = (
      this.state.enabled
      ? <button style={styles.enabled} onClick={this.disable}>Yes</button>
      : <button style={styles.disabled} onClick={this.enable}>No</button>
    );
    return (
      <tr>
        <td>
          {label}
        </td>
        <td>
          {button}
        </td>
      </tr>
    );
  }
}

module.exports = Tracker;
