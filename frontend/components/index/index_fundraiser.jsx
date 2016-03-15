var React = require('react');
var Link = require('react-router').Link;
var FundraiserUtil = require('../../util/fundraiser_util.js');
var UserStore = require('../../stores/user.js');
var Modal = require('react-modal');

module.exports = React.createClass({
  render: function () {
    var fundraiser = this.props.fundraiser;

    return <li className="fundraiser-index-item">
        <Link to={'/fundraisers/' + fundraiser.id}>
          <img src={fundraiser.thumbnail_url} />
          <content className="title">{fundraiser.title}</content>
          <br />
          <section className="recipient-name">
            {this.props.fundraiser.user.first_name + ' ' +
              this.props.fundraiser.user.last_name}
          </section>
          <section className="goal">
            Goal: {this.props.fundraiser.goal_amount} CareCoins
          </section>
        </Link>
      </li>;
  }
});
