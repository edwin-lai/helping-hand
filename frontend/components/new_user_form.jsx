var React = require('react');
var UserUtil = require('../util/user_util.js');
var UserActions = require('../actions/user_actions.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionUtil = require('../util/session_util.js');
var ErrorStore = require('../stores/error.js');

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
      password_confirmation: '',
    };
  },

  componentDidMount: function () {
    this.listener = ErrorStore.addListener(function () {
      this.setState({ error: ErrorStore.get() });
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  createUser: function (event) {
    event.preventDefault();
    UserUtil.createUser(this.state, function (user) {
      window.currentUserId = user.id;
      UserActions.receiveCurrentUser(user);
      this.context.router.push('/');
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
        this.context.router.push('/');
      }.bind(this)
    );
  },

  render: function () {
    return <form onSubmit={this.createUser} className="form">
      <h1>New User</h1>
      <div className="error">
        {this.state.error}
      </div>
      <input
        type="text"
        id="firstName"
        valueLink={this.linkState('first_name')}
        placeholder="First Name"
      />
      <br />
      <input
        type="text"
        id="lastName"
        valueLink={this.linkState('last_name')}
        placeholder="Last Name"
      />
      <br />
      <input
        type="text"
        id="email"
        valueLink={this.linkState('email')}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        id="password"
        valueLink={this.linkState('password')}
        placeholder="Password"
      />
      <br />
      <input
        type="password"
        id="password_confirmation"
        valueLink={this.linkState('password_confirmation')}
        placeholder="Confirm Password"
      />
      <br />
      <input type="submit" value="Sign Up" className="submit" />
      <button onClick={this.guestLogin} className="guest-login">
        Guest Login
      </button>
    </form>;
  }
});

module.exports = NewUserForm;
