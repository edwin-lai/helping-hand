var React = require('react');
var Link = require('react-router').Link;
var Modal = require('react-modal');
var NewDonationForm = require('../new_donation_form.jsx');
var LoginForm = require('../new_session_form.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {modalIsOpen: false};
  },

  openModal: function () {
    this.setState({modalIsOpen: true});
  },

  closeModal: function () {
    this.setState({modalIsOpen: false});
  },

  newDonationButton: function () {
    return <div>
      <button onClick={this.openModal} className="huge-button">
        Donate Now!
      </button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}>
        <button className="small-button" onClick={this.closeModal}>
          Close
        </button>
        {this.requireLoggedIn()}
      </Modal>
    </div>;
  },

  requireLoggedIn: function () {
    if (window.currentUserId > 0) {
      return <NewDonationForm
        fundraiserId={this.props.fundraiser.id}
        closeModal={this.closeModal}
      />;
    } else {
      return <LoginForm />;
    }
  },

  render: function() {
    return <section className="donation-box">
      <content className="category">
        Category: {this.props.fundraiser.category}
      </content>
      <section className="donation-status">
        <content className="total-donations">
          {this.props.fundraiser.total_donations}
        </content>
        <content className="goal">
          of {this.props.fundraiser.goal_amount} CareCoins
        </content>
      </section>
      <content className="popularity">
        Raised by {this.props.fundraiser.num_donors} people
      </content>
      {this.newDonationButton()}
    </section>;
  }
});
