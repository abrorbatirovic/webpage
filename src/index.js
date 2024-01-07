import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import {Toaster} from "react-hot-toast";
ReactDOM.render(
  <Fragment>
    <App />
      <Toaster
          position="top-center"
          reverseOrder={false}
      />
  </Fragment>,
  document.getElementById('root')
);

