import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextInput from './TextInput';
import SimpleSelect from './SimpleSelect';
import Button from './Button';
import SnackNotification from './SnackNotification';

import { updateFormData, resetFormData, submitFormData, validateFormData } from '../AC/data';

class CardForm extends Component {
    constructor() {
        super();

        this.state = {
            displayValidationResult: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTryAgain = this.renderTryAgain.bind(this);
    }

    componentDidMount() {
        const {
            data,
            validateFormData
        } = this.props;

        validateFormData(data);
    }

    handleSubmit() {
        const {
            data,
            submitFormData,
            validateFormData,
            validationResult
        } = this.props;

        validateFormData(data);
        this.setState({
            displayValidationResult: true
        });
        console.log(validationResult);
        if (Object.keys(validationResult).length === 0) {
            submitFormData({ data, endPoint: 'http://localhost:5001/api/mock-api.json' });
        }
    }

    renderTryAgain() {
        return (
            <SnackNotification
                handleClick={this.handleSubmit}
                text={'Oops! Something wrong...'}
                label={'TRY AGAIN'}
                customClassName={'mt3'}
            />
        );
    }

    render() {
        const { data, updateFormData, resetFormData, firstCarcNumber, submitFormData, displayTryAgain, validationResult } = this.props;

        const { displayValidationResult } = this.state

        const visaClass = classNames({
            mr1: true,
            mt1: true,
            'o-50': firstCarcNumber !== 4
        });

        const masterClass = classNames({
            mt1: true,
            'o-50': firstCarcNumber !== 5
        });

        return (
            <form id="cardForm">
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-md-8 col-lg-6">

                            <div className="row">
                                <TextInput
                                    fieldName="cardNumber"
                                    handleChange={updateFormData}
                                    label="Card Number"
                                    value={data.cardNumber}
                                    type="number"
                                    validationResult={validationResult.cardNumber}
                                    displayValidationResult = {displayValidationResult}
                                />
                            </div>

                            <div className="row">
                                <TextInput
                                    fieldName="cardName"
                                    handleChange={updateFormData}
                                    label="Card Name"
                                    value={data.cardName}
                                    type="text"
                                    validationResult={validationResult.cardName}
                                    displayValidationResult = {displayValidationResult}
                                />
                            </div>

                            <div className="row">
                                <SimpleSelect
                                    content={['2017', '2018', '2019', '2020']}
                                    fieldName="cardYear"
                                    handleChange={updateFormData}
                                    label="Year"
                                    placeholder="Please fill in"
                                    value={data.cardYear}
                                    validationResult={validationResult.cardYear}
                                    displayValidationResult = {displayValidationResult}
                                />
                            </div>

                            <div className="row">
                                <SimpleSelect
                                    content={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
                                    fieldName="cardMonth"
                                    handleChange={updateFormData}
                                    label="Month"
                                    placeholder="Please fill in"
                                    value={data.cardMonth}
                                    validationResult={validationResult.cardMonth}
                                    displayValidationResult = {displayValidationResult}
                                />
                            </div>

                            <div className="row">
                                <TextInput
                                    fieldName="cardCvv"
                                    label="CVV"
                                    value={data.cardCvv}
                                    handleChange={updateFormData}
                                    type="number"
                                    validationResult={validationResult.cardCvv}
                                    displayValidationResult = {displayValidationResult}
                                />
                            </div>

                            <div className="row">
                                <div className="w-100 tc">
                                    <Button
                                        fieldName="clearButton"
                                        placeholder="CLEAR"
                                        customClassName={'ma1 btn__clear'}
                                        handleClick={resetFormData}
                                    />
                                    <Button
                                        fieldName="submitButton"
                                        placeholder="SUBMIT"
                                        customClassName={'ma1 btn__submit'}
                                        handleClick={this.handleSubmit}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="w-100">
                                    { displayTryAgain ? this.renderTryAgain() : null }
                                </div>
                            </div>

                            <div className="card-icons__container">
                                <img
                                    className={visaClass}
                                    src="../../gfx/svg/icons/visa.svg"
                                    alt="visa card icon"
                                />
                                <img
                                    className={masterClass}
                                    src="../../gfx/svg/icons/mc.svg"
                                    alt="master card icon"
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </form>
        );
    }
}

export default connect(state => {
    const { data, handleSubmitError, handleSubmitSuccess, validation } = state;
    const { submitFailed } = handleSubmitError;
    const { submitSucceeded } = handleSubmitSuccess;
    const { cardNumber } = data;

    let firstCarcNumber;
    let displayTryAgain = false;

    if (cardNumber) {
        firstCarcNumber = +cardNumber.slice(0, 1);
    }

    if (submitSucceeded) {
        window.location = 'https://www.actum.cz/';
    }

    if (submitFailed) {
        displayTryAgain = true;
    }

    return {
        data,
        firstCarcNumber,
        displayTryAgain,
        validationResult: validation
    };
}, {
    validateFormData,
    updateFormData,
    resetFormData,
    submitFormData
})(CardForm);

CardForm.defaultProps = {
};

CardForm.propTypes = {
};
