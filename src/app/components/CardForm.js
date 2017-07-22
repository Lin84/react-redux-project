import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextInput from './TextInput';
import SimpleSelect from './SimpleSelect';
import Button from './Button';

// import { initCardForm, resetFormData } from '../AC/cardForm';
import { updateFormData, resetFormData } from '../AC/data';

/*eslint-disable*/
class CardForm extends Component {
/*eslint-enable*/
    // componentDidMount() {
    //     this.props.initCardForm();
    // }

    render() {
        const { data, updateFormData, resetFormData, firstCarcNumber } = this.props;

        const visaClass = classNames({
            mr1: true,
            mt1: true,
            'o-50': firstCarcNumber !== 4
        });

        const masterClass = classNames({
            mr1: true,
            'o-50': firstCarcNumber !== 5
        });

        return (
            <form id="cardForm">
                <div className="container">
                    <div className="row">
                        <div className="col-8 col-md-6 col-xl-5">
                            <div className="row">
                                <TextInput
                                    fieldName="cardNumber"
                                    handleChange={updateFormData}
                                    isValid
                                    label="Card Number"
                                    value={data.cardNumber}
                                    type="number"
                                />
                            </div>

                            <div className="row">
                                <TextInput
                                    fieldName="cardName"
                                    handleChange={updateFormData}
                                    isValid
                                    label="Card Name"
                                    value={data.cardName}
                                    type="number"
                                />
                            </div>

                            <div className="row">
                                <SimpleSelect
                                    content={['2017', '2018', '2019', '2020']}
                                    fieldName="cardYear"
                                    handleChange={updateFormData}
                                    isValid
                                    label="Year"
                                    placeholder="Please fill in"
                                    value={data.cardYear}
                                />
                            </div>

                            <div className="row">
                                <SimpleSelect
                                    content={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
                                    fieldName="cardMonth"
                                    handleChange={updateFormData}
                                    isValid
                                    label="Month"
                                    placeholder="Please fill in"
                                    value={data.cardMonth}
                                />
                            </div>

                            <div className="row">
                                <TextInput
                                    fieldName="cardCvv"
                                    label="CVV"
                                    value={data.cardCvv}
                                    handleChange={updateFormData}
                                    isValid
                                    type="number"
                                />
                            </div>

                            <div className="row">
                                <div className="w-100 tc">
                                    <Button
                                        fieldName="clearButton"
                                        placeholder="CLEAR"
                                        customClassName={'btn__clear'}
                                        handleClick={resetFormData}
                                    />
                                    <Button
                                        fieldName="submitButton"
                                        placeholder="SUBMIT"
                                        customClassName={'btn__submit'}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
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
            </form>
        );
    }
}

export default connect(state => {
    const { data } = state;
    const { cardNumber } = data;

    let firstCarcNumber;
    if (cardNumber) {
        firstCarcNumber = +cardNumber.slice(0, 1);
    }

    return {
        data,
        firstCarcNumber
    };
}, {
    // initCardForm,
    updateFormData,
    resetFormData
})(CardForm);

CardForm.propTypes = {
};
