import { UPDATE_FORM_DATA, RESET_FORM_DATA } from '../constants';

export const updateFormData = ({ name, value }) => {
    return {
        type: UPDATE_FORM_DATA,
        payload: {
            name,
            value
        }
    };
};

export const resetFormData = () => {
    return {
        type: RESET_FORM_DATA
    };
};
