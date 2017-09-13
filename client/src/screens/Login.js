import React, { Component } from 'react';
import axios from 'axios';
import Btn from '@atlaskit/button';

const Button = props => <Btn {...props} />;

class UserAccount extends Component {

  signup() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    axios.post('/users/signup', {username: username.value, password: password.value}).then(() => {
      window.location.pathname = '/dashboard';
    })
  }

  login() {
    let credential1 = document.getElementById('cred1');
    let credential2 = document.getElementById('cred2');

    axios.post('/users/login', {username: credential1.value, password: credential2.value}).then((result) => {
      localStorage.setItem('token', result.data.token);
      window.location.pathname = '/dashboard';
    })
  }

  render() {
    return (
      <div>
        <h1>New Account</h1>
        <div>
          <input type="text" id="username" placeholder="username..." required />
        </div>
        <div>
        <input type="password" id="password" placeholder="password..." required />
        </div>
        <div>
          <button onClick={() => this.signup()}>Submit</button>
        </div>

        <h1>Login</h1>
        <div>
          <input type="text" id="cred1" placeholder="username..." required />
        </div>
        <div>
        <input type="password" id="cred2" placeholder="password..." required />
        </div>
        <div>
          <button onClick={() => this.login()}>Submit</button>
        </div>

        <h1>Third party library - test</h1>
        <Button appearance="primary">Submit</Button>

      </div>
    );
  }

}

const Login = () => <UserAccount />

export default Login;
