import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { initCardForm } from '../AC/cardForm';
import { updateFormData } from '../AC/data';

class CardForm extends Component {
    // componentDidMount() {
    //     this.props.initCardForm();
    // }

    render() {
        const { data, updateFormData } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Input
                            fieldName="cardNumber"
                            label="Card Number"
                            value={data.cardNumber}
                            handleChange={updateFormData}
                            isValid
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Input
                            fieldName="cardName"
                            label="Card Name"
                            value={data.cardName}
                            handleChange={updateFormData}
                            isValid
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Select
                            fieldName="year"
                            placeholder="Please fill in"
                            value={data.year}
                            handleChange={updateFormData}
                            isValid
                            label="Year"
                            content={['2017', '2018', '2019', '2020']}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <Select
                            fieldName="month"
                            placeholder="Please fill in"
                            value={data.month}
                            handleChange={updateFormData}
                            isValid
                            label="Month"
                            content={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group tc">
                            <Button fieldName="clearButton" placeholder="Clear" />
                            <Button fieldName="submitButton" placeholder="Submit" />
                        </div>
                    </div>
                </div>
            </div>
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
