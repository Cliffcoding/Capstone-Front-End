import React, { Component } from 'react';
import UserButton from './UserButton';
class Login extends Component {
  render() {
    return (
      <div className="Login">
        <UserButton
          type="Login"
        />

        <a href ="/auth/google">Google</a>
      </div>
    );
  }
}

export default Login;
