import React, { Component } from 'react';
import UserButton from './UserButton';
class NavBar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div >
        <header>
        <h3>MirrorMirror</h3>
          {!this.props.showSignUp &&
            <button onClick={this.props.signUpButton}>Sign Up</button>
          }
          {!this.props.showLogin &&
             <button onClick={this.props.loginButton}>Login</button>
           }
        </header>
      </div>
    );
  }
}

export default NavBar;
