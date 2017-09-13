import React, { Component } from 'react';
import UserButton from './UserButton';
import NavBar from './NavBar.js'
import SignUp from './SignUp';
import Login from './Login';
class WebPage extends Component {
  constructor(props) {
    super(props)
    this.handleSignUp = this.handleSignUp.bind(this);
    this.signUpButton = this.signUpButton.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.state= {
      loggedIn: false,
      showSignUp: false,
      showLogin: false,
    }
  }
  signUpButton(){
    this.state.showSignUp === true ? this.setState({ showSignUp: false, showLogin: false }) : this.setState({ showSignUp: true, showLogin: false})
  }
  loginButton(){
    this.state.showLogin === true ? this.setState({ showLogin: false, showSignUp: false }) : this.setState({ showLogin: true, showSignUp: false})
  }
  handleSignUp(){

  }
  render() {
    return (
      <div className="WebPage">
        <NavBar
        showSignUp={this.state.showSignUp}
        showLogin={this.state.showLogin}
        signUpButton={this.signUpButton}
        loginButton={this.loginButton}
        />
        {this.state.loggedIn
          ? <Login /> :
          <div>
            {this.state.showSignUp  &&
              <div>
                <SignUp/>
                <p>have an account?</p>
                <button onClick={this.loginButton}>Login</button>
              </div>
            }
            { this.state.showLogin &&
              <div>
                <Login />
                <p>Need to create an account?</p>
                 <button onClick={this.signUpButton}>Sign Up</button>
              </div>
            }
          </div>

      }


      </div>
    );
  }
}

export default WebPage;
