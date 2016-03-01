var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <content className="recipient">
      Created {this.props.fundraiser.created_at}
      By {this.props.fundraiser.user.first_name + ' '
        + this.props.fundraiser.user.last_name}
    </content>;
  }
});
