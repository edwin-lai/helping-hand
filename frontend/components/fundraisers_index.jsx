var React = require('react');
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserUtil = require('../util/fundraiser_util.js');
var FundraiserIndexItem = require('./fundraiser_index_item.jsx');
var Link = require('react-router').Link;

var FundraisersIndex = React.createClass({
  getInitialState: function () {
    return { fundraisers: FundraiserStore.all().filter(function (fundraiser) {
      return fundraiser.user_id === window.currentUserId;
    }) };
  },

  componentDidMount: function () {
    var that = this;
    this.listener = FundraiserStore.addListener(function () {
      that.setState({ fundraisers: FundraiserStore.all().filter(function (fundraiser) {
        return fundraiser.user_id === window.currentUserId;
      }) });
    });
    FundraiserUtil.fetchFundraisers();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  fundraisers: function () {
    return this.state.fundraisers.map(function (obj, idx) {
      return <FundraiserIndexItem key={idx} fundraiser={obj} source='idx' />;
    });
  },

  render: function () {
    if (window.currentUserId === -1 || window.currentUserId === undefined) {
      window.location.assign('/');
    }
    return <ul>
      <Link to={'fundraisers/new'}>New Fundraiser</Link>
      {this.fundraisers()}
    </ul>;
  }
});

module.exports = FundraisersIndex;
