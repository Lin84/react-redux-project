export const maxLength = ({ text = '', length }) => {
    return text.length <= length ? null : 'Filled in value is too long';
};

export const ifFilled = (text = '') => {
    return text.length < 1 ? 'Please fill in' : null;
};
