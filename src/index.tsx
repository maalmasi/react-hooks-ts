import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from 'reducers';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { firebaseConfig } from 'common/config';
import firebase from 'firebase/app';
import 'firebase/auth';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

export type RootState = ReturnType<typeof rootReducer>;

firebase.initializeApp(firebaseConfig);

const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch,
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
