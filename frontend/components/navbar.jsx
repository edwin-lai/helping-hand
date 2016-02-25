var React = require('react');
var Link = require('react-router').Link;
var SessionUtil = require('../util/session_util.js');
var UserUtil = require('../util/user_util.js');
var UserStore = require('../stores/user.js');

module.exports = React.createClass({
  getInitialState: function () {
    return {currentUser: UserStore.currentUser()};
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(function () {
      this.setState({currentUser: UserStore.currentUser()});
    }.bind(this));
    UserUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  logout: function () {
    SessionUtil.signOut(function () {
      UserUtil.fetchCurrentUser();
    });
  },

  render: function () {
    if (this.state.currentUser.id) {
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
