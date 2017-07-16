import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorBlock from './errorBlock';

class Input extends Component {
    constructor() {
        super();

        this.state = {
            isFocused: false,
            isFilled: false
        };

        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleOnFocus() {
        this.setState({
            isFocused: true
        });
    }

    handleOnBlur() {
        this.setState({
            isFocused: false
        });
    }

    render() {
        const {
            errorMessage,
            fieldName,
            handleChange,
            label,
            placeholder,
            value,
            isValid
        } = this.props;

        const { isFocused } = this.state;
        const isFilled = value.trim().length !== 0;

        return (
            <div className={`form-group ${!isValid ? 'error' : ''}`}>
                <div className={`form-group__container ${isFocused || isFilled ? 'form-group__container_focus' : ''}`}>
                    <label
                        htmlFor={fieldName}
                        className={`form-group__label ${isFocused || isFilled ? 'form-group__label_focus' : ''}`}
                    >
                        { label }
                    </label>

                    <input
                        className="text-input__input"
                        name={fieldName}
                        onBlur={this.handleOnBlur}
                        onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                        onFocus={this.handleOnFocus}
                        placeholder={placeholder}
                        value={value}
                    />
                </div>
                <ErrorBlock errorMsg="this field is required" />
            </div>
        );
    }
}

export default Input;

Input.defaultProps = {
    value: '',
    placeholder: ''
};

Input.propTypes = {
};
