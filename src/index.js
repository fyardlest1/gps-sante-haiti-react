import React from 'react';
import ReactDOM from 'react-dom';
import "font-awesome/css/font-awesome.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-social/bootstrap-social.css";
import "typeface-lobster";
import "typeface-open-sans";
import "typeface-courgette";
import "typeface-tangerine";
import "typeface-caveat";
import "typeface-dancing-script";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
