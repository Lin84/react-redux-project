import { HANDLE_SUBMIT_SUCCESS } from '../constants';

export default (state = { submitSucceeded: null }, action) => {
    const { type } = action;

    switch (type) {
        case HANDLE_SUBMIT_SUCCESS: {
            return {
                ...state,
                submitSucceeded: true
            };
        }

        default: {
            return state;
        }
    }
};
