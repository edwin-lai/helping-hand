var React = require('react');
var UserUtil = require('../util/user_util.js');

var NewUserForm = React.createClass({
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
    UserUtil.createUser(this.state);
  },

  render: function () {
    return <form onSubmit={this.createUser}>
      <h1>New User</h1>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" valueLink={this.linkState('firstName')} />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" valueLink={this.linkState('lastName')} />
      <br />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" valueLink={this.linkState('email')} />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" valueLink={this.linkState('password')} />
    </form>;
  }
});

module.exports = NewUserForm;
