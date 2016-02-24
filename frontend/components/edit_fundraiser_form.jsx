var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var FundraiserUtil = require('../util/fundraiser_util.js');
var FundraiserStore = require('../stores/fundraiser.js');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      title: '',
      description: '',
      image_url: '',
      goal_amount: undefined,
      category: '',
      user_id: 1
    };
  },

  createFundraiser: function (event) {
    event.preventDefault();
    FundraiserUtil.createFundraiser(this.state);
  },

  render: function () {
    return <form className="fundraiserForm" onSubmit={this.createFundraiser}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" valueLink={this.linkState('title')} />
      <br />
      <label htmlFor="description">Description</label>
      <textarea id="description" valueLink={this.linkState('description')}/>
      <br />
      <label htmlFor="image_url">ImageURL</label>
      <input type="url" id="image_url" valueLink={this.linkState('image_url')}/>
      <br />
      <label htmlFor="goal_amount">Goal</label>
      <input type="number" id="goal_amount" valueLink={this.linkState('goal_amount')}/>
      <br />
      <label htmlFor="category">Category</label>
      <input type="text" id="category" valueLink={this.linkState('category')}/>
      <br />
      <input type="submit" value="Create Fundraiser" />
    </form>;
  }
});
