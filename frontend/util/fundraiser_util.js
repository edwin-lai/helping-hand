var FundraiserActions = require('../actions/fundraiser_actions.js');
var ErrorActions = require('../actions/error_actions.js');

module.exports = {
  fetchFundraisers: function () {
    $.get('api/fundraisers', function (fundraisers) {
      FundraiserActions.receiveAllFundraisers(fundraisers);
    });
  },

  fetchSingleFundraiser: function (id, callback) {
    $.get('api/fundraisers/' + id, function (fundraiser) {
      FundraiserActions.receiveSingleFundraiser(fundraiser);
      if (callback) { callback (); }
    });
  },

  createFundraiser: function (data, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/fundraisers',
      data: { fundraiser: data },
      dataType: 'json',
      success: callback,
      error: function (error) {
        ErrorActions.receiveError(error.responseJSON);
      }
    });
  },

  updateFundraiser: function (id, data, callback) {
    $.ajax({
      url: 'api/fundraisers/' + id,
      type: 'patch',
      data: { fundraiser: data },
      dataType: 'json',
      success: callback,
      error: function (error) {
        console.log(error.responseJSON)
        ErrorActions.receiveError(error.responseJSON);
      }
    });
  },

  destroyFundraiser: function (id) {
    $.ajax({
      url: 'api/fundraisers/' + id,
      type: 'delete',
      success: function () {
        FundraiserActions.deleteFundraiser(id);
      }
    });
  }
};
