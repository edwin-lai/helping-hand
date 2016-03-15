var React = require('react');
var Time = require('react-time');

module.exports = React.createClass({
  render: function() {
    return <content className="recipient">
      Created <Time
        value={this.props.fundraiser.created_at}
        className="timestamp"
        relative
      />
      <br />
      By {this.props.fundraiser.user.first_name + ' '
        + this.props.fundraiser.user.last_name}
    </content>;
  }
});
