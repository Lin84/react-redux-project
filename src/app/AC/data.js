import axios from 'axios';

import { maxLength, ifFilled, ifCorrectPattern } from '../utilities/validationRules';
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

export const validateFormData = ({ data, validationRules }) => {
    return (dispatch) => {
        const fieldKeys = Object.keys(data);
        const validationResult = {};
        let validFields = 0;
        let allowSubmit = false;

        fieldKeys.map(key => {
            if (ifFilled({ text: data[key] }) && validationRules[key].required) {
                return validationResult[key] = {
                    message: validationResult[key] = ifFilled({ text: data[key], validationMsg: 'Please fill in' }),
                    valid: false
                };
            }

            if (maxLength({ text: data[key], length: validationRules[key].maxLength }) && validationRules[key].maxLength) {
                return validationResult[key] = {
                    message: maxLength({ text: data[key], length: validationRules[key].maxLength, validationMsg: `Filled in value should not be longer then ${validationRules[key].maxLength}` }),
                    valid: false
                };
            }

            if (ifCorrectPattern({ text: data[key], pattern: validationRules[key].pattern }) && validationRules[key].pattern) {
                return validationResult[key] = {
                    message: ifCorrectPattern({ text: data[key], pattern: validationRules[key].pattern, validationMsg: validationRules[key].patternMsg }),
                    valid: false
                };
            }

            validationResult[key] = {
                message: '',
                valid: true
            };

            validFields += 1;
            return validationResult;
        });

        if (validFields === fieldKeys.length) {
            allowSubmit = true;
        }

        dispatch({
            type: VALIDATE_FORM_DATA,
            payload: {
                validationResult,
                allowSubmit
            }
        });

    };
};
