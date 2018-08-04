import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger'

const defaultState = {
    id: 0,
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
    flagged: false,
    date: ''
}






const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
