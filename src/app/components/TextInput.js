import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ErrorBlock from './errorBlock';

export default class TextInput extends Component {
    constructor() {
        super();

        this.state = {
            isFocused: false
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
            isValid,
            validationResult,
            displayValidationResult,
            type
        } = this.props;

        const { isFocused } = this.state;
        const isFilled = value.trim().length !== 0;

        const formGroupClass = classNames({
            'form-group': true,
            error: displayValidationResult && !validationResult.valid
        });

        const formGroupContainerClass = classNames({
            'form-group__container': true,
            'form-group__container_focus': isFocused || isFilled
        });

        const labelClass = classNames({
            'form-group__label': true,
            'form-group__label_focus': isFocused || isFilled
        });

        return (
            <div className={formGroupClass}>
                <div className={formGroupContainerClass}>

                    <label htmlFor={fieldName} className="label">
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
                        type={type}
                    />

                </div>
                <ErrorBlock errorMsg={validationResult ? validationResult.message : null} />
            </div>
        );
    }
}

TextInput.defaultProps = {
    value: '',
    placeholder: ''
};

TextInput.propTypes = {
};
