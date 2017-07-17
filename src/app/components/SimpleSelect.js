import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ErrorBlock from '../components/errorBlock';
import toggledComponent from './hoc/ToggledComponent';

class SimpleSelect extends Component {
    constructor() {
        super();

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
                    <div
                        className="select__option"
                        key={value}
                        data-value={value}
                        onClick={(e) => this.handleClickOption(e)}
                    >
                        {value}
                    </div>
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
                    <option
                        className="select__option"
                        key={value}
                        data-value={value}
                        onClick={(e) => this.handleClickOption(e)}
                    >
                        {value}
                    </option>
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

        const formGroupClass = classNames({
            'form-group': true,
            error: !isValid
        });

        const formGroupContainerClass = classNames({
            'form-group__container': true,
            'form-group__container_focus': isOpen || isFilled
        });

        const selectContainerClass = classNames({
            select__container: true,
            select__container_focus: isOpen
        });

        const optionWrapperClass = classNames({
            'select__option-wrapper': true,
            'select__option-wrapper_display': isOpen
        });

        return (
            <div className={formGroupClass}>
                <div className={formGroupContainerClass} tabIndex={0} onBlur={closeComponent} >

                    <label htmlFor={fieldName} className="label">
                        { label }
                    </label>

                    {/*eslint-disable*/}
                    <div className={selectContainerClass} onClick={handleToggle}>
                    {/*eslint-enable*/}
                        <p className="select__content">{value}</p>
                        <div className={optionWrapperClass}>
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

export default toggledComponent(SimpleSelect);

SimpleSelect.defaultProps = {
    value: '',
    placeholder: '',
    isOpen: false
};

SimpleSelect.propTypes = {
    isOpen: PropTypes.bool.isRequired
};
