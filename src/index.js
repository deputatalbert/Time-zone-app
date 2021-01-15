import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

