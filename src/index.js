import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './05_songs/components/App/App';
import * as serviceWorker from './serviceWorker';
import reducers from "./05_songs/reducers";

const store = createStore(reducers);
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


