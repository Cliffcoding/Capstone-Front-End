import React, { Component } from 'react';
import UserButton from './UserButton';
class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <UserButton
          type="Create Account"
        />
        <a href ="/auth/google">Google</a>
      </div>
    );
  }
}

export default SignUp;
