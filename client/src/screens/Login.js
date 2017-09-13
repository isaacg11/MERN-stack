import React, { Component } from 'react';
import axios from 'axios';
import jquery from 'jquery';
const $ = jquery;

class UserAccount extends Component {

  test() {
    alert($('#test').val());
  }

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
        <div>
        <input type="text" id="test" placeholder="test..." required />
        </div>
        <div>
          <button onClick={() => this.test()}>Test</button>
        </div>

      </div>
    );
  }

}

const Login = () => <UserAccount />

export default Login;
