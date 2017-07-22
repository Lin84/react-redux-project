import { combineReducers } from 'redux';
import data from './data';
import handleSubmitError from './handleSubmitError';
import handleSubmitSuccess from './handleSubmitSuccess';

const rootReducer = combineReducers({
    handleSubmitError,
    handleSubmitSuccess,
    data
});

export default rootReducer;
