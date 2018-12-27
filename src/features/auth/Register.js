import React, { Component } from 'react';
// import './Register.scss';

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
    setTimeout(() => {
      this.props.changeAuthState(true);
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('padding-right');
    }, 333);
  }

  render = () => {
    return (
      <div className="register">
        <div className="register__title">Registration</div>
        <input type="text" onChange={this.handleSaveValue} placeholder="Type your name" />
          <div onClick={this.handleSignUp}>Sign up</div>
        <form action="#" method="post" className="register__form">
          
        </form>
      </div>
    );
  };
}

export default Register;
