var React = require('react');
var Link = require('react-router').Link;
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserUtil = require('../util/fundraiser_util.js');

module.exports = React.createClass({
  componentDidMount: function () {
    var that = this;
    this.listener = FundraiserStore.addListener(function () {
      if (FundraiserStore.find(parseInt(that.props.params.id)) !== undefined) {
        that.setState(FundraiserStore.find(parseInt(that.props.params.id)));
      }
    });


    FundraiserUtil.fetchSingleFundraiser(parseInt(that.props.params.id));
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    var fundraiser = FundraiserStore.find(parseInt(this.props.params.id));

    if (!fundraiser) {
      return <div>loading...</div>;
    }
    return(
      <content>
        {fundraiser.title}
        <br />
        <img src={fundraiser.image_url} />
        <br />
        Goal Amount: {fundraiser.goal_amount}
        <br />
        Category: {fundraiser.category}
        <br />
        {fundraiser.description}
        <br />
        <Link to={'/fundraisers/8/edit'}>Edit</Link>
        <br />
      </content>
    );
  }
});
