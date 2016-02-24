var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    var fundraiser = this.props.fundraiser.fundraiser;
    return(
      <li>
        {fundraiser.title}
        <Link to={'fundraisers/' + fundraiser.id + 'edit'}>Edit</Link>
        <Link to={'fundraisers/new'}>Delete</Link>
      </li>
    );
  }
});
