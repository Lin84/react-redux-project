import { combineReducers } from 'redux';
import data from './data';
import handleSubmitError from './handleSubmitError';

const rootReducer = combineReducers({
    handleSubmitError,
    data
});

export default rootReducer;
