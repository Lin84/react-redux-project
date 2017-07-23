import { combineReducers } from 'redux';
import data from './data';
import handleSubmitError from './handleSubmitError';
import handleSubmitSuccess from './handleSubmitSuccess';
import validation from './validation';

const rootReducer = combineReducers({
    handleSubmitError,
    handleSubmitSuccess,
    data,
    validation
});

export default rootReducer;
