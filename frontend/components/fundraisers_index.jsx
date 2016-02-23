var React = require('react');
var FundraiserStore = require('../stores/fundraiser.js');

var FundraisersIndex = React.createClass({
  getInitialState: function () {
    return { fundraisers: FundraiserStore.all() };
  },

  componentDidMount: function () {
    var that = this;
    this.listener = FundraiserStore.addListener(function () {
      that.setState({ fundraisers: FundraiserStore.all() });
    });
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  fundraisers: function () {
    return this.state.fundraisers.map(function (obj) {
      return <li>obj.description</li>;
    });
  },

  render: function () {
    return <ul>{this.fundraisers}</ul>;
  }
});

module.exports = FundraisersIndex;
