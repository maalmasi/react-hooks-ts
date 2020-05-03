import { combineReducers } from 'redux';
import { authReducer } from 'components/login-register/reducers';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
});

export default rootReducer;
