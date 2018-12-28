import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './auth.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      login: '',
      email: ''
    };
  }

  handleSaveName = e => {
    e.preventDefault();
    const name = e.target.value;
    this.setState({
      name: name
    });
  };

  handleSaveLogin = e => {
    e.preventDefault();
    const login = e.target.value;
    this.setState({
      login: login
    });
  };

  handleSaveEmail = e => {
    e.preventDefault();
    const email = e.target.value;
    this.setState({
      email: email
    });
  };

  handleSignUp = () => {
    if (this.state.name === '' || this.state.login === '' || this.state.email === '') {
      return false;
    }
    const user = {
      id: this.props.lastUserId + 1,
      name: this.state.name,
      login: this.state.login,
      email: this.state.email
    };
    this.props.createUser(user);
    this.props.changeAuthState(true, user);
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');
  };

  render = () => {
    return (
      <div className="auth">
        <div className="auth__title">Registration</div>
        <div className="auth__content">
          <div className="auth__row">
            <input
              className="auth__field auth__field--mg-right"
              type="text"
              onChange={this.handleSaveName}
              placeholder="Type your name"
            />
          </div>
          <div className="auth__row">
            <input
              className="auth__field auth__field--mg-right"
              type="text"
              onChange={this.handleSaveLogin}
              placeholder="Type login you wish"
            />
          </div>
          <div className="auth__row">
            <input
              className="auth__field auth__field--mg-right"
              type="text"
              onChange={this.handleSaveEmail}
              placeholder="Type your e-mail here"
            />
          </div>
          <div className="auth__row">
            <div className="auth__btn auth__btn--filled" onClick={this.handleSignUp}>
              Sign up
            </div>
          </div>
        </div>
      </div>
    );
  };
}

Register.propTypes = {
  lastUserId: PropTypes.number.isRequired,
  createUser: PropTypes.func.isRequired
}

export default Register;
