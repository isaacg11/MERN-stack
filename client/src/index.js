import React from 'react';
import { render } from 'react-dom';
import { Login, Dashboard } from './screens';

const Index = ({ pathname }) => {
  switch(pathname) {
    case "/dashboard":
      return <Dashboard />;
    default:
      return <Login />;
  }
};

let pathname = window.location.pathname;

render(<Index pathname={pathname} />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});
