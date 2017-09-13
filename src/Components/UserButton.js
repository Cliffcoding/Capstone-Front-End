import React, { Component } from 'react';

class UserButton extends Component {
  render() {
    return (
      <div className="UserButton">
        <form>
          {this.props.type === "Create Account" &&
            <div>
              <input placeholder="First Name"/>
              <input placeholder="Last Name"/>
            </div>
          }
          <input placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>{this.props.type}</button>
        </form>
      </div>
    );
  }
}

export default UserButton;
