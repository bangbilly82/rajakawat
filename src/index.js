import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './Routes';

// Bulma CSS
import './static/css/bulma.css';
// Main CSS
import './static/css/main.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
