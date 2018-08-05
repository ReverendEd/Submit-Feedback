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

const feedbackReducer = (state = defaultState, action)=>{
    switch (action.type) {
        case 'CHANGE_VALUES':
            state = {
                ...state,
                [action.payload.name]: action.payload.value
            }
        break;
        default:
        break;
    }
    console.log(state);
    return state;
}

const feedbackListReducer = (state = [], action)=>{
    if (action.type === 'SET_LIST') {
        state = action.payload
    }
    return state;
}




const storeInstance = createStore(
    combineReducers({
        feedbackReducer: feedbackReducer,
        feedbackListReducer: feedbackListReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
