import axios from 'axios';

import { maxLength, ifFilled } from '../utilities/validationRules';
import { createLoadingCircle, showLoadingCircle, removeLoadingCircle } from '../utilities/loadingCircle';

import {
    UPDATE_FORM_DATA,
    RESET_FORM_DATA,
    SUBMIT_FORM_DATA,
    HANDLE_SUBMIT_SUCCESS,
    HANDLE_SUBMIT_ERROR,
    VALIDATE_FORM_DATA
} from '../constants';

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

        createLoadingCircle();
        showLoadingCircle();

        setTimeout(() => {
            // use GET METHOD to mock SUCCESS POST or POST to mock POST FAILED:
            axios(endPoint, {
                method: 'POST',
                data: JSON.stringify(data)
            })
            .then(response => {
                dispatch({
                    type: HANDLE_SUBMIT_SUCCESS
                });
                removeLoadingCircle();
            })
            .catch(error => {
                dispatch({
                    type: HANDLE_SUBMIT_ERROR
                });
                removeLoadingCircle();
            });
        }, 300);
    };
};

export const validateFormData = (data) => {
    return (dispatch) => {
        const copy = { ...data };
        const fieldKeys = Object.keys(copy);
        const validationResult = {};

        fieldKeys.map(key => {
            if (ifFilled(copy[key])) {
                return validationResult[key] = ifFilled(copy[key]);
            }

            if (maxLength({ text: copy[key], length: 4 })) {
                return validationResult[key] = maxLength({ text: copy[key], length: 4 });
            }

            validationResult[key] = '';

            return validationResult;
        });

        dispatch({
            type: VALIDATE_FORM_DATA,
            payload: {
                validationResult
            }
        });
    };
};
