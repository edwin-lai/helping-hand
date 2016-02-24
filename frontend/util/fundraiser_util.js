var FundraiserActions = require('../actions/fundraiser_actions.js');

module.exports = {
  fetchFundraisers: function () {
    $.get('fundraisers', function (fundraisers) {
      FundraiserActions.receiveAllFundraisers(fundraisers);
    });
  },

  fetchSingleFundraiser: function (id) {
    $.get('fundraisers/' + id, function (fundraiser) {
      FundraiserActions.receiveSingleFundraiser(fundraiser);
    });
  },

  createFundraiser: function (data) {
    $.post('fundraisers', { fundraiser: data });
  },

  updateFundraiser: function (id, data) {
    $.ajax({
      url: 'fundraisers/' + id,
      type: 'patch',
      data: { fundraiser: data },
      dataType: 'json'
    });
  },

  destroyFundraiser: function (id) {
    $.ajax({
      url: 'fundraisers/' + id,
      type: 'delete',
      success: function () {
        FundraiserActions.deleteFundraiser(id);
      }
    });
  }
};
