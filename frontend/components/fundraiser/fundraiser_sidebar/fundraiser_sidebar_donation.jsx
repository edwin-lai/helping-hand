var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var Modal = require('react-modal');
var EditDonationForm = require('./edit_donation.jsx');
var Time = require('react-time');


module.exports = React.createClass({
  getInitialState: function () {
    return { modalIsOpen: false };
  },

  comment: function () {
    if (this.props.donation.comment) {
      return <content className="comment">
        {this.props.donation.comment}
      </content>;
    }
  },

  donorName: function () {
    if (this.props.donation.visible) {
      var donor = this.props.donation.user;
      return donor.first_name + ' ' + donor.last_name;
    } else {
      return 'Anonymous';
    }
  },

  openModal: function () {
    this.setState({modalIsOpen: true});
  },

  closeModal: function () {
    this.setState({modalIsOpen: false});
  },

  editCommentButton: function () {
    if (this.props.donation.user.id === window.currentUserId
      && this.props.donation.visible
    ) {
      return <div>
        <button onClick={this.openModal} className="small-button">
          Edit Comment
        </button>
        <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}>
          <button onClick={this.closeModal} className="close-button">
            ✕
          </button>
          <EditDonationForm
            fundraiser={this.props.fundraiser}
            donation={this.props.donation}
            closeModal={this.closeModal}
          />
        </Modal>
      </div>;
    }
  },

  units: function (amount) {
    if (amount === 1) {
      return ' CareCoin';
    } else {
      return ' CareCoins';
    }
  },

  render: function() {
    return <li className="donation">
      <content className="amount">
        {this.props.donation.amount + this.units(this.props.donation.amount)}
      </content>
      <content className="donor-name">
        {this.donorName()}
      </content>
      <Time
        value={this.props.donation.created_at}
        className="timestamp"
        relative
      />
      {this.comment()}
      {this.editCommentButton()}
    </li>;
  }
});
