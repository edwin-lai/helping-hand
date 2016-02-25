var FundraiserActions = require('../actions/fundraiser_actions.js');
var UserUtil = require('../util/user_util.js');

module.exports = {
  fetchFundraisers: function () {
    $.get('api/fundraisers', function (fundraisers) {
      FundraiserActions.receiveAllFundraisers(fundraisers);
    });
  },

  fetchSingleFundraiser: function (id) {
    $.get('api/fundraisers/' + id, function (fundraiser) {
      FundraiserActions.receiveSingleFundraiser(fundraiser);
    });
  },

  createFundraiser: function (data, callback) {
    $.post('api/fundraisers', { fundraiser: data });
    callback();
  },

  updateFundraiser: function (id, data, callback) {
    $.ajax({
      url: 'api/fundraisers/' + id,
      type: 'patch',
      data: { fundraiser: data },
      dataType: 'json'
    });
    callback();
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
