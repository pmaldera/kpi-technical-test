import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Router } from "@reach/router"
import List from './components/list/List';
import Investment from "./components/investment/Investment"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <List path="/" />
      <Investment path="/investment/:investmentId" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
