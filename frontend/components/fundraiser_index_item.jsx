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
        <li className="my-fundraisers-item">
          <Link to={'/fundraisers/' + fundraiser.id} className="fundraiser-link">{fundraiser.title}</Link>
          <button onClick={this.destroyFundraiser}>Delete</button>
          <Link to={'/fundraisers/' + fundraiser.id + '/edit'} className="button">Edit</Link>
        </li>
      );
    } else {
      return(
        <li className="fundraiser-index-item">
          <Link to={'/fundraisers/' + fundraiser.id}>
            <img src={fundraiser.thumbnail_url} />
          </Link>
          <Link to={'/fundraisers/' + fundraiser.id}>{fundraiser.title}</Link>
          <br />
          <section className="recipient-name">
            {this.props.fundraiser.user.first_name + ' ' +
              this.props.fundraiser.user.last_name}
          </section>
          <section className="goal">
            Goal: {this.props.fundraiser.goal_amount} CareCoins
          </section>
        </li>
      );
    }
  }
});
