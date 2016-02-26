var React = require('react');
var Link = require('react-router').Link;
var FundraiserUtil = require('../util/fundraiser_util.js');
var UserStore = require('../stores/user.js');

module.exports = React.createClass({
  destroyFundraiser: function (event) {
    event.preventDefault();
    FundraiserUtil.destroyFundraiser(this.props.fundraiser.id);
  },

  render: function () {
    var fundraiser = this.props.fundraiser;
    var userId;
    if (window.currentUserId) {
      userId = window.currentUserId;
    } else {
      userId = -1;
    }

    if (userId === fundraiser.user_id && this.props.source === 'idx') {
      return(
        <li>
          <img src={fundraiser.thumbnail_url} />
          <br />
          <Link to={'/fundraisers/' + fundraiser.id}>{fundraiser.title}</Link>
          <Link to={'/fundraisers/' + fundraiser.id + '/edit'}>Edit</Link>
          <button onClick={this.destroyFundraiser}>Delete</button>
        </li>
      );
    } else {
      return(
        <li>
          <img src={fundraiser.thumbnail_url} />
          <Link to={'/fundraisers/' + fundraiser.id}>{fundraiser.title}</Link>
          {this.props.fundraiser.first_name}
          {this.props.fundraiser.last_name}
        </li>
      );
    }
  }
});
