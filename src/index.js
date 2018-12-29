import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore , applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import './index.css';
import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddlware= applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddlware(reducers)}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
