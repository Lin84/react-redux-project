import { combineReducers } from 'redux';
// import counter from '../components/plus-one/reducer';
import cardForm from './cardForm';
import data from './data';

const rootReducer = combineReducers({
    // counter,
    // cardForm,
    data
});

export default rootReducer;
