import { INIT_CARD_FORM_DATA, RESET_FORM_DATA, UPDATE_FORM_DATA } from '../constants';

export const initCardForm = () => {
    return {
        type: INIT_CARD_FORM_DATA
    };
};

export const resetFormData = () => {
    return {
        type: RESET_FORM_DATA
    };
};

export const updateFormData = ({ value, name }) => {
    return {
        type: UPDATE_FORM_DATA,
        payload: {
            name,
            value
        }
    };
};
