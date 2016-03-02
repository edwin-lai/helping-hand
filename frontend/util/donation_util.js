var DonationActions = require('../actions/donation_actions.js');
var ErrorActions = require('../actions/error_actions.js');

module.exports = {
  createDonation: function (data, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/donations',
      data: { donation: data },
      dataType: 'json',
      success: callback,
      error: function (error) {
        ErrorActions.receiveError(error.responseJSON);
      }
    });
  },

  updateDonation: function (data, callback) {
    $.ajax({
      type: 'PATCH',
      url: 'api/donations/' + data.id,
      data: { donation: data },
      dataType: 'json',
      success: callback,
      error: function (error) {
        ErrorActions.receiveError(error.responseJSON);
      }
    });
  },

  fetchDonation: function (id) {
    $.ajax({
      type: 'GET',
      url: 'api/donations/' + id,
      success: function (donation) {
        DonationActions.receiveDonation(donation);
      },
      error: function () {
        console.log(arguments);
      }
    });
  }
};
