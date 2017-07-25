import { UPDATE_FORM_DATA, RESET_FORM_DATA } from '../constants';

const defaultState = {
    cardNumber: '',
    cardName: '',
    cardYear: '',
    cardMonth: '',
    cardCvv: ''
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_FORM_DATA: {
            const { name, value } = payload;

            return {
                ...state,
                [name]: value
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
