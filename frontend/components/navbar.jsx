var React = require('react');
var Link = require('react-router').Link;
var SessionUtil = require('../util/session_util.js');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  logout: function () {
    SessionUtil.signOut();
    this.context.router.push('/');
  },

  render: function () {
    if (window.currentUser) {
      return <nav>
        <button onClick={this.logout}>Logout</button>
      </nav>;
    } else {
      return <nav>
        <Link to="/users/new">New User</Link>
        <Link to="/login">Login</Link>
      </nav>;
    }
  }
});
