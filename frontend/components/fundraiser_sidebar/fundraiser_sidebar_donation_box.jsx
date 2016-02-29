var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  editLink: function (fundraiser) {
    if (fundraiser.user_id === window.currentUserId) {
      return <Link to={'/fundraisers/' + fundraiser.id + '/edit'} className="edit">
        Edit
      </Link>;
    }
  },

  render: function() {
    return <section className="donation-box">
      <content className="category">
        Category: {this.props.fundraiser.category}
      </content>
      <br />
      <section className="donation-status">
        <content className="total-donations">
          {this.props.fundraiser.total_donations}
        </content>
        <content className="goal">
          of {this.props.fundraiser.goal_amount} CareCoins
        </content>
      </section>
      <br />
      <content className="popularity">
        Raised by {this.props.fundraiser.num_donors}
      </content>
      {this.editLink(this.props.fundraiser)}
      <br />
    </section>;
  }
});
