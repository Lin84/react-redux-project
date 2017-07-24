import { combineReducers } from 'redux';
import cardForm from './cardForm';
import handleSubmitError from './handleSubmitError';
import handleSubmitSuccess from './handleSubmitSuccess';
import validation from './validation';

const rootReducer = combineReducers({
    handleSubmitError,
    handleSubmitSuccess,
    cardForm,
    validation
});

export default rootReducer;
