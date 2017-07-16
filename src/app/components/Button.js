import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    // constructor(){
    //     super();
    // }

    render() {
        const { placeholder } = this.props;
        return (
            <button>{placeholder}</button>
        );
    }

}

export default Button;

Button.propTypes = {
};
