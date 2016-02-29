/* global cloudinary */

var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var FundraiserUtil = require('../util/fundraiser_util.js');
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserActions = require('../actions/fundraiser_actions.js');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      title: '',
      description: '',
      image_url: '',
      thumbnail_url: '',
      goal_amount: undefined,
      category: '',
      user_id: 1
    };
  },

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

  updateFundraiser: function (event) {
    event.preventDefault();
    FundraiserUtil.updateFundraiser(this.state.id, this.state, function (fundraiser) {
      FundraiserActions.receiveSingleFundraiser(fundraiser);
      this.context.router.push('/fundraisers/' + this.props.params.id);
    }.bind(this));
  },

  openUploadWidget: function(event) {
    event.preventDefault();
    cloudinary.openUploadWidget({
      cloud_name: 'helping-hand',
      upload_preset: 'i3xy67j1'
    },
    function (error, success) {
      this.setState({
        image_url: success[0].url,
        thumbnail_url: success[0].thumbnail_url
      });
    }.bind(this));
  },

  render: function () {
    return <form className="form" onSubmit={this.updateFundraiser}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" valueLink={this.linkState('title')} />
      <br />
      <label htmlFor="goal_amount">Goal</label>
      <input type="number" id="goal_amount" valueLink={this.linkState('goal_amount')}/>
      <br />
      <label htmlFor="category">Category</label>
      <input type="text" id="category" valueLink={this.linkState('category')}/>
      <br />
      <label htmlFor="description">Description</label>
      <br />
      <textarea id="description" valueLink={this.linkState('description')}/>
      <br />
      <button onClick={this.openUploadWidget}>Upload Image</button>
      <img src={this.state.thumbnail_url} />
      <br />
      <input type="submit" value="Update Fundraiser" className="submit" />
    </form>;
  }
});
