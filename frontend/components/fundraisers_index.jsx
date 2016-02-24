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
      return <FundraiserIndexItem key={idx} fundraiser={obj} />;
    });
  },

  goto: function (path) {
    debugger;
    this.history.push(path);
  },

  render: function () {
    return <ul>
      <Link to={'fundraisers/new'}>New Fundraiser</Link>
      {this.fundraisers()}
    </ul>;
  }
});

module.exports = FundraisersIndex;
