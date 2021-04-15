import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import {store} from "./redux/store";
import {BrowserRouter} from "react-router-dom"
ReactDOM.render(
  <React.StrictMode>  
    <BrowserRouter>
      <Provider store={store}>
       <App />
      </Provider>
    </BrowserRouter> 
=======
import { store } from "./redux/store"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
>>>>>>> cb1b6411f50301e8eb2c69c52411ff3afb6fc559
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
