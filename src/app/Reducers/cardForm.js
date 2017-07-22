import { INIT_CARD_FORM_DATA, RESET_FORM_DATA } from '../constants';

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
        case INIT_CARD_FORM_DATA: {
            return state;
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
