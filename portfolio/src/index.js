import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Route><App /></Route>, document.getElementById('root'));
serviceWorker.unregister();
