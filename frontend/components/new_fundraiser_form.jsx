/* global cloudinary */

var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var FundraiserUtil = require('../util/fundraiser_util.js');
var FundraiserActions = require('../actions/fundraiser_actions.js');
var ErrorStore = require('../stores/error.js');

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
      user_id: window.currentUserId
    };
  },

  componentDidMount: function () {
    this.listener = ErrorStore.addListener(function () {
      this.setState({ error: ErrorStore.get() });
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  createFundraiser: function (event) {
    event.preventDefault();
    FundraiserUtil.createFundraiser(this.state, function (fundraiser) {
      FundraiserActions.receiveSingleFundraiser(fundraiser);
      this.context.router.push('/fundraisers/' + fundraiser.id);
    }.bind(this));
  },

  image: function () {
    if (this.state.thumbnail_url) {
      return <img src={this.state.thumbnail_url} />;
    }
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
    return <form className="form long-form" onSubmit={this.createFundraiser}>
      <h1>New Fundraiser</h1>
      <div className="error">
        {this.state.error}
      </div>
      <input
        type="text"
        id="title"
        valueLink={this.linkState('title')}
        placeholder="Title"
      />
      <br />
      <input
        type="number"
        id="goal_amount"
        valueLink={this.linkState('goal_amount')}
        placeholder="Goal"
      />
      <label className="CareCoins" htmlFor="goal_amount">CareCoins</label>
      <br />
      <input
        type="text"
        id="category"
        valueLink={this.linkState('category')}
        placeholder="Category"
      />
      <br />
      <br />
      <textarea
        id="description"
        valueLink={this.linkState('description')}
        placeholder="Tell us about your cause..."
      />
      <br />
      <div className="upload">
        <button onClick={this.openUploadWidget} className="upload-button">
          Upload Image
        </button>
        {this.image()}
      </div>
      <br />
      <input type="submit" value="Create Fundraiser" className="submit"/>
    </form>;
  }
});
