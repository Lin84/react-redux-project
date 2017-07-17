import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import SimpleSelect from './SimpleSelect';
import Button from './Button';
import { initCardForm } from '../AC/cardForm';
import { updateFormData } from '../AC/data';
/*eslint-disable*/
class CardForm extends Component {
/*eslint-enable*/
    // componentDidMount() {
    //     this.props.initCardForm();
    // }

    render() {
        const { data, updateFormData } = this.props;

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
                                />
                            </div>

                            <div className="row">
                                <TextInput
                                    fieldName="cardName"
                                    handleChange={updateFormData}
                                    isValid
                                    label="Card Name"
                                    value={data.cardName}
                                />
                            </div>

                            <div className="row">
                                <SimpleSelect
                                    content={['2017', '2018', '2019', '2020']}
                                    fieldName="year"
                                    handleChange={updateFormData}
                                    isValid
                                    label="Year"
                                    placeholder="Please fill in"
                                    value={data.year}
                                />
                            </div>

                            <div className="row">
                                <SimpleSelect
                                    content={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                                    fieldName="month"
                                    handleChange={updateFormData}
                                    isValid
                                    label="Month"
                                    placeholder="Please fill in"
                                    value={data.month}
                                />
                            </div>

                            <div className="row">
                                <TextInput
                                    fieldName="cvv"
                                    label="CVV"
                                    value={data.cvv}
                                    handleChange={updateFormData}
                                    isValid
                                />
                            </div>

                            <div className="row">
                                <div className="w-100 tc">
                                    <Button fieldName="clearButton" placeholder="CLEAR" customClassName={'btn__clear'} />
                                    <Button fieldName="submitButton" placeholder="SUBMIT" customClassName={'btn__submit'} />
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <img className="mr1 mt1"src="../../gfx/svg/icons/visa.svg" alt="visa card icon" />
                            <img className="mt1" src="../../gfx/svg/icons/mc.svg" alt="master card icon" />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default connect(state => {
    const { data } = state;
    return {
        data
    };
}, {
    // initCardForm,
    updateFormData
})(CardForm);

CardForm.propTypes = {
};
