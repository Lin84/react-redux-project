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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTryAgain = this.renderTryAgain.bind(this);

        this.validationRules = {
            cardNumber: {
                required: true,
                pattern: '^(0|[1-9][0-9]*)$',
                patternMsg: 'Please fill in only Number'
            },
            cardName: {
                required: true,
                pattern: '^[a-zA-Z]*$',
                patternMsg: 'Please fill in only Letters'
            },
            cardYear: {
                required: true,
                maxLength: 4
            },
            cardMonth: {
                required: true,
                maxLength: 2
            },
            cardCvv: {
                required: true,
                maxLength: 3,
                pattern: '^(0|[1-9][0-9]*)$',
                patternMsg: 'Please fill in only Number'
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        const { cardForm, submitFormData } = this.props;
        if (nextProps.allowSubmit) {
            submitFormData({ data: cardForm, endPoint: 'http://localhost:5003/cardFormDatabase' });
        }
    }

    handleSubmit() {
        const {
            cardForm,
            validateFormData
        } = this.props;

        validateFormData({ data: cardForm, validationRules: this.validationRules });
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
        const {
            cardForm,
            updateFormData,
            resetFormData,
            firstCarcNumber,
            submitFormData,
            displayTryAgain,
            validationResult
        } = this.props;

        // highlight visa icon if card number start with 4
        const visaClass = classNames({
            mr1: true,
            mt1: true,
            'o-50': firstCarcNumber !== 4
        });

         // highlight visa icon if master number start with 5
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
                                    type="text"
                                    validationResult={validationResult.cardNumber}
                                    value={cardForm.cardNumber}
                                />
                            </div>

                            <div className="row">
                                <TextInput
                                    fieldName="cardName"
                                    handleChange={updateFormData}
                                    label="Card Name"
                                    type="text"
                                    validationResult={validationResult.cardName}
                                    value={cardForm.cardName}
                                />
                            </div>

                            <div className="row">
                                <SimpleSelect
                                    content={['2017', '2018', '2019', '2020']}
                                    fieldName="cardYear"
                                    handleChange={updateFormData}
                                    label="Year"
                                    placeholder="Please fill in"
                                    validationResult={validationResult.cardYear}
                                    value={cardForm.cardYear}
                                />
                            </div>

                            <div className="row">
                                <SimpleSelect
                                    content={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
                                    fieldName="cardMonth"
                                    handleChange={updateFormData}
                                    label="Month"
                                    placeholder="Please fill in"
                                    validationResult={validationResult.cardMonth}
                                    value={cardForm.cardMonth}
                                />
                            </div>

                            <div className="row">
                                <TextInput
                                    fieldName="cardCvv"
                                    handleChange={updateFormData}
                                    label="CVV"
                                    type="text"
                                    validationResult={validationResult.cardCvv}
                                    value={cardForm.cardCvv}
                                />
                            </div>

                            <div className="row">
                                <div className="w-100 tc">
                                    <Button
                                        customClassName={'ma1 btn__clear'}
                                        fieldName="clearButton"
                                        handleClick={resetFormData}
                                        placeholder="CLEAR"
                                    />
                                    <Button
                                        customClassName={'ma1 btn__submit'}
                                        fieldName="submitButton"
                                        handleClick={this.handleSubmit}
                                        placeholder="SUBMIT"
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
    const {
        cardForm,
        handleSubmitError,
        handleSubmitSuccess,
        validation
    } = state;
    const { submitFailed } = handleSubmitError;
    const { submitSucceeded } = handleSubmitSuccess;
    const { cardNumber } = cardForm;
    const { validationResult, allowSubmit } = validation;

    let firstCarcNumber;
    let displayTryAgain = false;

    // take first number, if number is 4 = Visa card, 5 = master card:
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
        allowSubmit,
        cardForm,
        displayTryAgain,
        firstCarcNumber,
        validationResult
    };
}, {
    resetFormData,
    submitFormData,
    updateFormData,
    validateFormData
})(CardForm);

CardForm.defaultProps = {
};

CardForm.propTypes = {
};
