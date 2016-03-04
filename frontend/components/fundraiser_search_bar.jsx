var React = require('react');
var FundraiserIndexItem = require('./fundraiser_index_item.jsx');
var CATEGORIES = require('../constants/categories.js');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      searchString: '',
      placeholder: 'Search'
    };
  },

  handleChange: function (e) {
    this.setState({searchString: e.target.value});
  },

  searchResults: function (fundraisers) {
    if (fundraisers.length) {
      return <ul className="fundraiser-search-results">
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

  setSearchString: function (query) {
    this.setState({searchString: query});
  },

  clearSearchString: function () {
    this.setState({searchString: ''});
  },

  categories: function () {
    var that = this;
    return CATEGORIES.slice(1).map(function (obj, idx) {
      return <li
        key={idx}
        className="category"
        onClick={that.setSearchString.bind(that, obj.value)}>
        {obj.label}
      </li>;
    });
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
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-bar"
          value={this.state.searchString}
          onChange={this.handleChange}
          placeholder={this.state.placeholder}
          onFocus={this.placeholderOn}
          onBlur={this.placeholderOff}/>
        <div onClick={this.clearSearchString} className="clear-search">×</div>
      </div>
      <ul className="categories">
        <h2>Categories</h2>
        {this.categories()}
      </ul>
      {this.searchResults(fundraisers)}
    </div>;
  }
});
