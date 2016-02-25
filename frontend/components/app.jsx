var React = require('react');
var FundraisersIndex = require('./fundraisers_index.jsx');
var NavBar = require('./navbar.jsx');

module.exports = React.createClass({
  render: function () {
    return <content>
      <NavBar />
      {this.props.children}
    </content>;
  }
});
