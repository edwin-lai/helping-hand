var React = require('react');
var Link = require('react-router').Link;
var FundraiserUtil = require('../util/fundraiser_util.js');

module.exports = React.createClass({
  destroyFundraiser: function (event) {
    event.preventDefault();
    FundraiserUtil.destroyFundraiser(this.props.fundraiser.id);
  },

  editDeleteButtons: function () {
    var fundraiser = this.props.fundraiser;
    if (window.currentUser.id === fundraiser.user_id) {
      return <nav>
        <Link to={'fundraisers/' + fundraiser.id + '/edit'}>Edit</Link>
        <button onClick={this.destroyFundraiser}>Delete</button>
      </nav>;
    }
  },

  render: function () {
    var fundraiser = this.props.fundraiser;
    return(
      <li>
        <Link to={'fundraisers/' + fundraiser.id}>{fundraiser.title}</Link>
        {this.editDeleteButtons}
      </li>
    );
  }
});
