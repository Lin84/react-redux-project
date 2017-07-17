import React from 'react';
import PropTypes from 'prop-types';
import arrays from '../utilities/arrays';

const Button = (props) => {
    const { placeholder, customClassName } = props;
    const btnClass = arrays.join('btn', customClassName);

    return (
        <button
            type="button"
            className={`ma1 ${btnClass}`}
        >
            {placeholder}
        </button>
    );
};

export default Button;

Button.propTypes = {
};
