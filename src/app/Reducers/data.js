import { UPDATE_FORM_DATA } from '../constants';

export default (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_FORM_DATA: {
            const { name, value } = payload;

            return {
                ...state,
                [name]: value
            };
        }

        default: {
            return state;
        }
    }
};
