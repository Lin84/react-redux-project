import { HANDLE_SUBMIT_SUCCESS } from '../constants';

export default (state = { success: null }, action) => {
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
