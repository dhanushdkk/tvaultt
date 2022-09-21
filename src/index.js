import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import configure from '../src/Redux/configure';

const store=configureStore({
  reducer:{
    users:configure,
    users1:configure,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
