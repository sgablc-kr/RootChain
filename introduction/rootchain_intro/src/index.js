import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Google Analytics
import ReactGA from "react-ga";
ReactGA.initialize('UA-188024314-1');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.event({category: 'Benefit', action: 'click'});
ReactGA.event({category: 'Case', action: 'click'});
ReactGA.event({category: 'Technology', action: 'click'});
ReactGA.event({category: 'ContactUs', action: 'click'});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
