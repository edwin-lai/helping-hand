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

  editLink: function (pageId) {
    return;
    if (this.state.user_id === window.current_user.id) {
      return <Link to={'/fundraisers/' + pageId + '/edit'}>Edit</Link>;
    }
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
        {this.editLink(this.props.params.id)}
        <br />
      </content>
    );
  }
});
