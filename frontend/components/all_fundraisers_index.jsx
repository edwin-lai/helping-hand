var React = require('react');
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserUtil = require('../util/fundraiser_util.js');
var FundraiserIndexItem = require('./fundraiser_index_item.jsx');
var Link = require('react-router').Link;

var FundraisersIndex = React.createClass({
  getInitialState: function () {
    return { fundraisers: FundraiserStore.all() };
  },

  componentDidMount: function () {
    var that = this;
    this.listener = FundraiserStore.addListener(function () {
      that.setState({ fundraisers: FundraiserStore.all() });
    });
    FundraiserUtil.fetchFundraisers();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  fundraisers: function () {
    return this.state.fundraisers.map(function (obj, idx) {
      return <FundraiserIndexItem key={idx} fundraiser={obj} userId={obj.user}/>;
    });
  },

  render: function () {
    return <ul className="index">
      <h1 className="tagline">Show That You Care</h1>
      <h1><Link to="/users/new" className="giant-button">Sign Up Today!</Link></h1>
      {this.fundraisers()}
    </ul>;
  }
});

module.exports = FundraisersIndex;
