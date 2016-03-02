var React = require('react');
var SessionUtil = require('../util/session_util.js');
var UserUtil = require('../util/user_util.js');
var UserActions = require('../actions/user_actions.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ErrorStore = require('../stores/error.js');

var NewSessionForm = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      email: '',
      password: '',
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

  login: function (event) {
    event.preventDefault();
    SessionUtil.signIn(this.state, function (user) {
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
    return <form onSubmit={this.login} className="form">
      <h1>Log In</h1>
      <div className="error">
        {this.state.error}
      </div>
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
      <input type="submit" value="Log In" className="submit" />
      <button onClick={this.guestLogin} className="guest-login">
        Guest Login
      </button>
    </form>;
  }
});

module.exports = NewSessionForm;
