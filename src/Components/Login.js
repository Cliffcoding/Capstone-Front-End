import React, { Component } from 'react';
import UserButton from './UserButton';

var CLIENT_ID = '189522769673-bop1e8puej6a1u415e6u0b8b454aisn0.apps.googleusercontent.com';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar";

class Login extends React.Component{

  render(){
    let authButton = <button id="authorize-button" onClick={this.handleAuthClick.bind(this)}>Authorize</button>
    let signOutButton = <button id="signout-button" onClick={this.handleSignoutClick.bind(this)}>Sign Out</button>
    return(
      <div className="container">
        {this.state.showAuthButton ? authButton : null}
        {this.state.showSignOutButton ? signOutButton : null}
      </div>
    )
  }
}

export default Login;
