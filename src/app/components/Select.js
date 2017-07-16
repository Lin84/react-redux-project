import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorBlock from '../components/errorBlock';
import toggledComponent from './hoc/ToggledComponent';

class Select extends Component {
    constructor() {
        super();

        this.state = {
            isFilled: false
        };

        this.handleClickOption = this.handleClickOption.bind(this);
        this.handleClickOption = this.handleClickOption.bind(this);
    }

    handleClickOption(e) {
        const { handleChange, fieldName } = this.props;
        const value = e.target.getAttribute('data-value');
        handleChange({ name: fieldName, value });
    }

    renderCustomOption() {
        const { isOpen, content, fieldName } = this.props;
        let options = null;

        if (content || fieldName) {
            options = content.map((value) => {
                return (
                    /*eslint-disable*/
                    <div role="button" className="select__custom_option" key={value} data-value={value} onClick={(e) => this.handleClickOption(e)}>{value}</div>
                    /*eslint-enable*/
                );
            });
        }
        return options;
    }

    renderOption() {
        const { isOpen, content, fieldName } = this.props;
        let options = null;

        if (content || fieldName) {
            options = content.map((value) => {
                return (
                    <option className="select__custom_option" key={value} data-value={value} onClick={(e) => this.handleClickOption(e)}>{value}</option>
                );
            });
        }
        return options;
    }

    render() {
        const {
            label,
            placeholder,
            value,
            fieldName,
            isValid,
            isOpen,
            handleToggle,
            openComponent,
            closeComponent
        } = this.props;

        const isFilled = value.trim().length !== 0;

        return (
            <div className={`form-group ${!isValid ? 'error' : ''}`}>
                <div className={`form-group__container ${isOpen || isFilled ? 'form-group__container_focus' : ''}`}>
                    <label
                        htmlFor={fieldName}
                        className={`form-group__label ${isOpen || isFilled ? 'form-group__label_focus' : ''}`}
                    >
                        { label }
                    </label>
                    {/*eslint-disable*/}
                    <div
                        className={`select__custom_select ${isOpen || isFilled ? 'select__custom_select_focus' : ''}`}
                        tabIndex={0}
                        onClick={handleToggle}
                    >
                    {/*eslint-enable*/}
                        <p className="select__custom_select-content">{value}</p>
                        <div className={`select__custom_option-wrapper ${isOpen ? '' : 'u-hidden'}`}>
                            {this.renderCustomOption()}
                        </div>
                    </div>
                    <select name={fieldName} id={fieldName} className="select__select">
                        {this.renderOption()}
                    </select>
                </div>
                <ErrorBlock errorMsg="this field is required" />
            </div>
        );
    }

}

export default toggledComponent(Select);

Select.defaultProps = {
    value: '',
    placeholder: ''
};
