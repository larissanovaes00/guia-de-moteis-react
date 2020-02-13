import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Components/Header/Header"

ReactDOM.render(

    <Header />, 
    

    document.getElementById('root')
);


serviceWorker.unregister();
