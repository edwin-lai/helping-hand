var React = require('react');
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserUtil = require('../util/fundraiser_util.js');
var FundraiserSidebar = require('./fundraiser_sidebar/fundraiser_sidebar.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
    this.listener = FundraiserStore.addListener(function () {
      if (FundraiserStore.find(parseInt(this.props.params.id)) !== undefined) {
        this.setState(FundraiserStore.find(parseInt(this.props.params.id)));
      }
    }.bind(this));
    FundraiserUtil.fetchSingleFundraiser(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    if (!this.state.user) {
      return <div>loading...</div>;
    }

    return(
      <content className="fundraiser">
        <h1>{this.state.title}</h1>
        <br />
        <main className="main">
          <img src={this.state.image_url} />
          <br />
          <content className="description">
            {this.state.description}
          </content>
          <br />
        </main>
        <FundraiserSidebar fundraiser={this.state} />
      </content>
    );
  }
});
