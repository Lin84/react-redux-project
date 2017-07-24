import { VALIDATE_FORM_DATA, RESET_FORM_DATA } from '../constants';

const defaultState = {
    validationResult: {},
    allowSubmit: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case VALIDATE_FORM_DATA: {
            const { validationResult, allowSubmit } = payload;
            return {
                ...state,
                ...validationResult,
                allowSubmit
            };
        }

        case RESET_FORM_DATA: {
            return {
                ...state,
                ...defaultState
            };
        }

        default: {
            return state;
        }
    }
};
