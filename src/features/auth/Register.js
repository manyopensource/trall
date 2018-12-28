import React, { Component } from 'react';
import './auth.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: ''
    };
  }

  handleSaveValue = event => {
    event.preventDefault();
    const login = event.target.value;
    this.setState({
      login: login
    });
  };

  handleSignUp = () => {
    this.props.changeAuthState(true);
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
              onChange={this.handleSaveValue}
              placeholder="Type your name"
            />
          </div>
          <div className="auth__row">
            <input
              className="auth__field auth__field--mg-right"
              type="text"
              onChange={this.handleSaveValue}
              placeholder="Type login you wish"
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

export default Register;
