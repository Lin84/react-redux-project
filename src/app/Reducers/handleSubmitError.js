import { HANDLE_SUBMIT_ERROR, RESET_FORM_DATA } from '../constants';

export default (state = { submitFailed: null }, action) => {
    const { type } = action;

    switch (type) {
        case HANDLE_SUBMIT_ERROR: {
            return {
                ...state,
                submitFailed: true
            };
        }

        case RESET_FORM_DATA: {
            return {
                ...state,
                submitFailed: false
            };
        }

        default: {
            return state;
        }
    }
};
