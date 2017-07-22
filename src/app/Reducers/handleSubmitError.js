import { HANDLE_SUBMIT_ERROR } from '../constants';

export default (state = { submitFailed: null }, action) => {
    const { type } = action;

    switch (type) {
        case HANDLE_SUBMIT_ERROR: {
            return {
                ...state,
                submitFailed: true
            };
        }

        default: {
            return state;
        }
    }
};
