import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ErrorBlock = (props) => {
    return (
        <div className="errorBlock">{props.errorMsg}</div>
    );
};

export default ErrorBlock;

ErrorBlock.defaultProps = {
    errorMsg: ''
};
