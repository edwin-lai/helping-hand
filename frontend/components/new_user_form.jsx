var React = require('react');
var UserUtil = require('../util/user_util.js');
var UserActions = require('../actions/user_actions.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionUtil = require('../util/session_util.js');

var NewUserForm = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  },

  createUser: function (event) {
    event.preventDefault();
    UserUtil.createUser(this.state, function (user) {
      window.currentUserId = user.id;
      UserActions.receiveCurrentUser(user);
      this.context.router.push('/fundraisers');
    }.bind(this));
  },

  guestLogin: function (event) {
    event.preventDefault();
    SessionUtil.signIn(
      {
        email: 'guest.user@helping-hand.com',
        password: 'password'
      },
      function (user) {
        window.currentUserId = user.id;
        UserActions.receiveCurrentUser(user);
        this.context.router.push('/fundraisers');
      }.bind(this)
    );
  },

  render: function () {
    return <form onSubmit={this.createUser} className="form">
      <h1>New User</h1>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" valueLink={this.linkState('first_name')} />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" valueLink={this.linkState('last_name')} />
      <br />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" valueLink={this.linkState('email')} />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" valueLink={this.linkState('password')} />
      <br />
      <input type="submit" value="Sign Up" className="submit" />
      <button onClick={this.guestLogin} className="guest-login">
        Guest Login
      </button>
    </form>;
  }
});

module.exports = NewUserForm;
