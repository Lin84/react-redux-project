import { VALIDATE_FORM_DATA } from '../constants';
export default (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case VALIDATE_FORM_DATA: {
            const { validationResult } = payload;
            return {
                ...state,
                ...validationResult
            };
        }

        default: {
            return state;
        }
    }
};
