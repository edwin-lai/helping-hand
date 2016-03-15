/* global cloudinary */

var React = require('react');
var Select = require('react-select');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var FundraiserUtil = require('../../../util/fundraiser_util.js');
var FundraiserStore = require('../../../stores/fundraiser.js');
var FundraiserActions = require('../../../actions/fundraiser_actions.js');
var ErrorStore = require('../../../stores/error.js');
var CATEGORIES = require('../../../constants/categories.js');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return this.props.fundraiser;
  },

  componentDidMount: function () {
    this.listener = ErrorStore.addListener(function () {
      this.setState({ error: ErrorStore.get() });
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  updateFundraiser: function (event) {
    event.preventDefault();
    FundraiserUtil.updateFundraiser(
      this.state.id,
      this.state,
      function (fundraiser) {
        FundraiserActions.receiveSingleFundraiser(fundraiser);
        this.context.router.push('/fundraisers/' + this.state.id);
      }.bind(this)
    );
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

  image: function () {
    if (this.state.thumbnail_url) {
      return <img src={this.state.thumbnail_url} />;
    }
  },

  changeCategory: function (category) {
    this.setState({category: category.value});
    console.log(this.state.category);
  },

  dropdownPlaceholder: function () {
    if (this.state.category === '' || this.state.category === undefined) {
      return 'Category';
    } else {
      return this.state.category;
    }
  },

  render: function () {
    return <form className="form long-form" onSubmit={this.updateFundraiser}>
      <h1>Edit Fundraiser</h1>
      <div className="error">
        {this.state.error}
      </div>
      <input
        type="text"
        id="title"
        valueLink={this.linkState('title')}
        placeholder="Title"/>
      <br />
      <input
        type="number"
        id="goal_amount"
        valueLink={this.linkState('goal_amount')}
        placeholder="Goal"/>
      <label htmlFor="goal_amount" className="CareCoins">CareCoins</label>
      <br />
      <Select
        id="category"
        name="Category"
        value="Category"
        placeholder={this.dropdownPlaceholder()}
        searchable={false}
        options={CATEGORIES}
        onChange={this.changeCategory}/>
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
      <input type="submit" value="Update Fundraiser" className="submit"/>
    </form>;
  }
});
