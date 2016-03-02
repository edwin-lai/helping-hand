var React = require('react');
var FundraiserIndexItem = require('./fundraiser_index_item.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { searchString: '' };
  },

  handleChange: function (e) {
    this.setState({searchString: e.target.value});
  },

  searchResults: function (fundraisers) {
    if (fundraisers.length) {
      return <ul>
        {fundraisers.map(function (fundraiser) {
          return <FundraiserIndexItem
            key={fundraiser.id}
            fundraiser={fundraiser}
          />;
        })}
      </ul>;
    } else {
      return <h1 className="no-results">
        No results.
        <br />
        Try searching for something else!
      </h1>;
    }
  },

  render: function () {
    var fundraisers = this.props.fundraisers;
    var searchString = this.state.searchString.trim().toLowerCase();
    var name;

    if (searchString.length > 0) {
      fundraisers = fundraisers.filter(function (fundraiser) {
        name = fundraiser.user.first_name + ' ' + fundraiser.user.last_name;
        return fundraiser.title.toLowerCase().match(searchString)
          || name.toLowerCase().match(searchString)
          || fundraiser.category.toLowerCase().match(searchString);
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
      {this.searchResults(fundraisers)}
    </div>;
  }
});
