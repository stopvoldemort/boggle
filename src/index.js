import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/home.css'
import './style/timer.css'
import './style/game.css'
import './style/navbar.css'
import './style/rules.css'
import './style/highscores.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
