import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from './app'

const app = (
  <HashRouter hashType="noslash">
    <App />
  </HashRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// font-family: 'Architects Daughter', cursive;

// fontFamily: "'Raleway', sans-serif",

// fontFamily: "'Open Sans', sans-serif",

