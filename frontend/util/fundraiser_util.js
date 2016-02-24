var FundraiserActions = require('../actions/fundraiser_actions.js');

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

  createFundraiser: function (data) {
    $.post('api/fundraisers', { fundraiser: data });
  },

  updateFundraiser: function (id, data) {
    $.ajax({
      url: 'api/fundraisers/' + id,
      type: 'patch',
      data: { fundraiser: data },
      dataType: 'json'
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
