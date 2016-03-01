var React = require('react');
var Link = require('react-router').Link;
var SessionUtil = require('../util/session_util.js');
var UserActions = require('../actions/user_actions.js');
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
      window.currentUserId = -1;
      UserActions.receiveCurrentUser({});
      this.context.router.push('/');
    }.bind(this));
  },

  render: function () {
    if (this.state.currentUser.id) {
      return <nav className="navbar">
        <Link to="/">Helping Hand</Link>
        <Link to="/fundraisers">My Fundraisers</Link>
        <button onClick={this.logout} className="auth">Logout</button>
      </nav>;
    } else {
      return <nav className="navbar">
        <Link to="/">Helping Hand</Link>
        <Link to="/login" className="auth">Login</Link>
        <Link to="/users/new" className="auth">New User</Link>
      </nav>;
    }
  }
});
