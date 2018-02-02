import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = {
    fieldSquares: [[0, 1, 2], [2, 3, 4], [0, 2, 4]]
};

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, initialState)}>
        <App/>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();