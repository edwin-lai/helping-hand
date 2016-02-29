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

  giantButtonLink: function () {
    if (window.currentUserId === -1 || window.currentUserId === undefined) {
      return "/users/new";
    } else {
      return "/fundraisers/new";
    }
  },

  giantButtonText: function () {
    if (window.currentUserId === -1 || window.currentUserId === undefined) {
      return "Sign Up Today!";
    } else {
      return "Make a New Fundraiser!";
    }
  },

  render: function () {
    return <ul className="index">
      <h1 className="tagline">Show That You Care</h1>
      <h1>
        <Link to={this.giantButtonLink()} className="giant-button">
          {this.giantButtonText()}
        </Link>
      </h1>
      {this.fundraisers()}
    </ul>;
  }
});

module.exports = FundraisersIndex;
