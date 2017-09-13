import React from 'react';

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <a href="/">Login/Signup</a>
    <a href="/dashboard">Dashboard</a>
  </div>
);

export default Header;
