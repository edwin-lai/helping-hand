var React = require('react');

var NewSessionForm = React.createClass({
  getInitialState: function () {
    return {
      email: '',
      password: '',
    };
  },

  render: function () {
    return <form>
      <h1>Log In</h1>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" valueLink={this.linkState('email')} />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" valueLink={this.linkState('password')} />
    </form>;
  }
});

module.exports = NewSessionForm;
