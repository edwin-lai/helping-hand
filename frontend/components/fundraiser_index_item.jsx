var React = require('react');
var Link = require('react-router').Link;
var FundraiserUtil = require('../util/fundraiser_util.js');

module.exports = React.createClass({
  destroyFundraiser: function (event) {
    event.preventDefault();
    FundraiserUtil.destroyFundraiser(this.props.fundraiser.id);
  },

  render: function () {
    var fundraiser = this.props.fundraiser;
    var userId;
    if (window.currentUser) {
      userId = window.currentUser.id;
    } else {
      userId = -1;
    }

    if (userId === fundraiser.user_id) {
      return(
        <li>
          <Link to={'fundraisers/' + fundraiser.id}>{fundraiser.title}</Link>
          <Link to={'fundraisers/' + fundraiser.id + '/edit'}>Edit</Link>
          <button onClick={this.destroyFundraiser}>Delete</button>
        </li>
      );
    } else {
      return(
        <li>
          <Link to={'fundraisers/' + fundraiser.id}>{fundraiser.title}</Link>
        </li>
      );
    }
  }
});
