import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import arrays from '../utilities/arrays';

const SnackNotification = (props) => {
    const snackNotificationClass = arrays.join('snack-notification', props.customClassName);

    return (
        <div className={snackNotificationClass}>
            <p className="snack-notification__text">{props.text}</p>
            <Button
                handleClick={props.handleClick}
                placeholder={'TRY AGAIN'}
                customClassName={'snack-notification__button ma0'}
            />
        </div>
    );
};

export default SnackNotification;

SnackNotification.propTypes = {
};
