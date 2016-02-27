var React = require('react');
var Link = require('react-router').Link;
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserUtil = require('../util/fundraiser_util.js');

module.exports = React.createClass({
  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
    this.listener = FundraiserStore.addListener(function () {
      if (FundraiserStore.find(parseInt(this.props.params.id)) !== undefined) {
        this.setState(FundraiserStore.find(parseInt(this.props.params.id)));
      }
    }.bind(this));
    FundraiserUtil.fetchSingleFundraiser(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  editLink: function (fundraiser) {
    if ( fundraiser.user_id === window.currentUserId) {
      return <Link to={'/fundraisers/' + fundraiser.id + '/edit'} className="edit">
        Edit
      </Link>;
    }
  },

  render: function () {
    if (!this.state.user) {
      return <div>loading...</div>;
    }

    return(
      <content className="fundraiser">
        <h1>{this.state.title}</h1>
        <br />
        <img src={this.state.image_url} />
        <br />
        <content className="recipient">
          By {this.state.user.first_name + ' ' + this.state.user.last_name}
        </content>
        <content className="goal">
          Goal: {this.state.goal_amount} CareCoins
        </content>
        {this.editLink(this.state)}
        <content className="category">
          Category: {this.state.category}
        </content>
        <br />
        <content className="description">
          {this.state.description}
        </content>
        <br />
      </content>
    );
  }
});
