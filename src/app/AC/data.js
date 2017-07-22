import axios from 'axios';
import { UPDATE_FORM_DATA, RESET_FORM_DATA, SUBMIT_FORM_DATA, HANDLE_SUBMIT_SUCESS, HANDLE_SUBMIT_ERROR } from '../constants';

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

export const submitFormData = ({ data, endPoint }) => {
    return (dispatch) => {

        dispatch({
            type: SUBMIT_FORM_DATA
        });

        axios(endPoint, {
            method: 'POST',
            data: JSON.stringify(data)
        })
        .then(response => {
            dispatch({
                type: HANDLE_SUBMIT_SUCESS
            });
        })
        .catch(error => {
            dispatch({
                type: HANDLE_SUBMIT_ERROR
            });
        });

    };
};
