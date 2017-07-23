import React from 'react';
import PropTypes from 'prop-types';
import arrays from '../utilities/arrays';

const Button = (props) => {
    const { placeholder, customClassName, handleClick } = props;
    const btnClass = arrays.join('btn', customClassName);

    return (
        <button
            type="button"
            className={btnClass}
            onClick={handleClick}
        >
            {placeholder}
        </button>
    );
};

export default Button;

Button.propTypes = {
};
