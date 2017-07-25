import { HANDLE_SUBMIT_ERROR, RESET_FORM_DATA } from '../constants';

const defaultState = {
    submitFailed: null
};

export default (state = defaultState, action) => {
    const { type } = action;

    switch (type) {
        case HANDLE_SUBMIT_ERROR: {
            return {
                ...state,
                submitFailed: true
            };
        }

        case RESET_FORM_DATA: {
            return defaultState;
        }

        default: {
            return state;
        }
    }
};
