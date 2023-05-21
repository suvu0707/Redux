import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';  //0
import App from './App.js'; // import functionName from './filename';
import reportWebVitals from './reportWebVitals';

import Mystore from './mystore';  //14
import { Provider } from 'react-redux';   //15

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Mystore}>   {/*  //16.Open a component that is called provider and close it after App.Then go to the bookreducer */}
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  

reportWebVitals();

/*
    npm install bootstrap
    npm install react-router-dom
    npm install redux
*/
