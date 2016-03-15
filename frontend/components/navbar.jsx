var React = require('react');
var Link = require('react-router').Link;
var SessionUtil = require('../util/session_util.js');
var UserActions = require('../actions/user_actions.js');
var UserUtil = require('../util/user_util.js');
var UserStore = require('../stores/user.js');
var Modal = require('react-modal');
var LoginForm = require('./new_session_form.jsx');
var NewUserForm = require('./new_user_form.jsx');
var AddCareCoinsForm = require('./add_carecoins_form.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      currentUser: UserStore.currentUser(),
      loginModalOpen: false,
      signUpModalOpen: false,
      bankModalOpen: false
    };
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
      this.setState({
        loginModalOpen: false,
        signUpModalOpen: false
      });
      this.context.router.push('/');
    }.bind(this));
  },

  openLoginModal: function () {
    this.setState({loginModalOpen: true});
  },

  closeLoginModal: function () {
    this.setState({loginModalOpen: false});
  },

  loginButton: function () {
    return <div>
      <button onClick={this.openLoginModal} className="auth">Login</button>
      <Modal
        isOpen={this.state.loginModalOpen}
        onRequestClose={this.closeLoginModal}>
          <button onClick={this.closeLoginModal} className="close-button">
            ✕
          </button>
          <LoginForm setUser={this.setUser}/>
      </Modal>
    </div>;
  },

  openSignUpModal: function () {
    this.setState({signUpModalOpen: true});
  },

  closeSignUpModal: function () {
    this.setState({signUpModalOpen: false});
  },

  signUpButton: function () {
    return <div>
      <button onClick={this.openSignUpModal} className="auth">Sign Up</button>
      <Modal
        isOpen={this.state.signUpModalOpen}
        onRequestClose={this.closeSignUpModal}>
          <button onClick={this.closeSignUpModal} className="close-button">
            ✕
          </button>
          <NewUserForm setUser={this.setUser}/>
      </Modal>
    </div>;
  },

  openBankModal: function () {
    this.setState({bankModalOpen: true});
  },

  closeBankModal: function () {
    this.setState({bankModalOpen: false});
  },

  addCareCoinsButton: function (buttonText) {
    return <div>
      <button onClick={this.openBankModal} className="bank">
        {buttonText}
      </button>
      <Modal
        isOpen={this.state.bankModalOpen}
        onRequestClose={this.closeBankModal}>
        <button onClick={this.closeBankModal} className="close-button">
          ✕
        </button>
        <AddCareCoinsForm closeModal={this.closeBankModal}/>
      </Modal>
    </div>;
  },

  render: function () {
    if (this.state.currentUser.id) {
      return <nav className="navbar">
        <Link name="logo" to="/" className="logo">Helping Hand</Link>
        <Link to="/fundraisers">My Fundraisers</Link>
        <Link to="/my_donations">My Donations</Link>
        <Link to="/received_donations">Received Donations</Link>
        <nav className="navbar-dropdown-label" htmlFor="dropdown">
          Hello, {this.state.currentUser.first_name}　▾
          <ul id="dropdown" className="navbar-dropdown">
            <li>
              {this.addCareCoinsButton(this.state.currentUser.bank + " CareCoins")}
            </li>
            <li>
              {this.addCareCoinsButton("Add CareCoins")}
            </li>
            <li>
              <button onClick={this.logout} className="logout">Logout</button>
            </li>
          </ul>
        </nav>
      </nav>;
    } else {
      return <nav className="navbar">
        <Link className="logo" to="/">Helping Hand</Link>
        {this.loginButton()}
        {this.signUpButton()}
      </nav>;
    }
  }
});
