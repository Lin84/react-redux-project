import { INIT_CARD_FORM } from '../constants';

const defaultState = {
    cardNumber: '',
    cardName: '',
    cardYear: '',
    cardMonth: '',
    cardCcv: ''
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case INIT_CARD_FORM: {
            return state;
        }

        default: {
            return state;
        }
    }
};
