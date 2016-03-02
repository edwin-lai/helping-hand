var React = require('react');
var FundraiserIndexItem = require('./fundraiser_index_item.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { searchString: '' };
  },

  handleChange: function (e) {
    this.setState({searchString: e.target.value});
  },

  render: function () {
    var fundraisers = this.props.fundraisers;
    var searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      fundraisers = fundraisers.filter(function (fundraiser) {
        return fundraiser.title.toLowerCase().match(searchString);
      });
    }

    return <div>
      <input
        type="text"
        className="search-bar"
        value={this.state.searchString}
        onChange={this.handleChange}
        placeholder="Search"
      />
      <ul>
        {fundraisers.map(function (fundraiser) {
          return <FundraiserIndexItem
            key={fundraiser.id}
            fundraiser={fundraiser}
          />;
        })}
      </ul>
    </div>;
  }
});
