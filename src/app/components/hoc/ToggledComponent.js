import React, { Component } from 'react';

function toggledComponent(ToggledComponent) {
    return class extends Component {
        constructor() {
            super();

            this.state = {
                isOpen: false
            };

            this.handleToggle = this.handleToggle.bind(this);
            this.closeComponent = this.closeComponent.bind(this);
            this.openComponent = this.openComponent.bind(this);
        }

        handleToggle() {
            this.setState((prevState) => {
                return {
                    isOpen: !prevState.isOpen
                };
            });
        }

        closeComponent() {
            if (this.state.isOpen) {
                this.setState({ isOpen: false });
            }
        }

        openComponent() {
            if (!this.state.isOpen) {
                this.setState({ isOpen: true });
            }
        }

        render() {
            return (
                <ToggledComponent
                    isOpen={this.state.isOpen}
                    {...this.props}
                    handleToggle={this.handleToggle}
                    openComponent={this.openComponent}
                    closeComponent={this.closeComponent}
                />
            );
        }
    };
}

export default toggledComponent;
