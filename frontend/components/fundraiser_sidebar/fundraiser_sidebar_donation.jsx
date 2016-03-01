var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var Modal = require('react-modal');
var EditDonationForm = require('./edit_donation.jsx');

var appElement = document.getElementById('root');

Modal.setAppElement(appElement);

module.exports = React.createClass({
  getInitialState: function () {
    return { modalIsOpen: false };
  },

  openModal: function () {
    this.setState({modalIsOpen: true});
  },

  closeModal: function () {
    this.setState({modalIsOpen: false});
  },

  editCommentButton: function () {
    if (false /* this.props.donation.user.id === window.currentUserId */) {
      return <div>
        <button onClick={this.openModal}>Edit Comment</button>
        <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}>
          <button onClick={this.closeModal}>Close</button>
          <EditDonationForm
            fundraiser={this.props.fundraiser}
            donation={this.props.donation}/>
        </Modal>;
      </div>;
    }
  },

  render: function() {
    var donor = this.props.donation.user;
    return <li className="donation">
      <content className="amount">{this.props.donation.amount}</content>
      <content className="care-coins"> CareCoins</content>
      <br />
      <content className="donor-name">
        {donor.first_name} {donor.last_name}
      </content>
      <br />
      <content className="timestamp">{this.props.donation.created_at}</content>
      <br />
      <content className="comment">{this.props.donation.comment}</content>
      {this.editCommentButton()}
    </li>;
  }
});
