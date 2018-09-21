import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MyApp from './MY-App_sec1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
