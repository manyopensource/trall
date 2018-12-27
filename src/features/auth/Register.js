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
    const login = event.target.value;
    this.setState({
      login: login
    });
  };

  render = () => {
    return (
      <div className="register">
        <div className="register__title">Registration</div>
        <form className="register__form">
          <input type="text" onChange={this.handleSaveValue} placeholder="Type your name" />
          <button>Sign up</button>
        </form>
      </div>
    );
  };
}

export default Register;
