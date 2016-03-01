var React = require('react');
var Link = require('react-router').Link;
var Modal = require('react-modal');
var NewDonationForm = require('../new_donation_form.jsx');

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
        <button onClick={this.closeModal}>Close</button>
        <NewDonationForm fundraiserId={this.props.fundraiser.id} />
      </Modal>
    </div>;
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
        Raised by {this.props.fundraiser.num_donors} people
      </content>
      <br />
      {this.newDonationButton()}
    </section>;
  }
});
