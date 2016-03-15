var React = require('react');
var NavBar = require('./navbar.jsx');

module.exports = React.createClass({
  render: function () {
    return <content>
      <NavBar />
      <div className="spacer"></div>
      {this.props.children}
    </content>;
  }
});
