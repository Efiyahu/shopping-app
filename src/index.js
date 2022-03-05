import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './context/cart-context';

ReactDOM.render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>,
  document.getElementById('root')
);
