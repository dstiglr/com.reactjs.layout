import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/custom-antd.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk';

import reducers from './redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
