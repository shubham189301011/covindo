import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store"

// const store = configureStore({
//   reducer:{
//     user: userReducer,
//     vaccine : vaccineReducer,
//     center : centerReducer
//   },
  
// })


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
    
  ,
  document.getElementById('root')
);

