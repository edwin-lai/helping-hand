var DonationActions = require('../actions/donation_actions.js');

module.exports = {
  createDonation: function (data, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/donations',
      data: { donation: data },
      dataType: 'json',
      success: callback,
      error: function () {
        console.log(arguments);
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
      error: function () {
        console.log(arguments);
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
