export const maxLength = ({ text = '', length, validationMsg = 'Filled in value is too long' }) => {
    return text.length <= length ? null : validationMsg;
};

export const ifFilled = ({ text = '', validationMsg = 'Please fill in' }) => {
    return text.length < 1 ? validationMsg : null;
};

export const ifCorrectPattern = ({ text = '', validationMsg = 'Please fill in correct format', pattern }) => {
    const reg = new RegExp(pattern);
    return text.length !== 0 && !reg.test(text) ? validationMsg : null;
};
