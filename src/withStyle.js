import React, { Component } from 'react';
import StylingContext from "./styling/context";

export default (key = null) => (TargetComponent) => {

    return class HoC extends Component {

        static contextType = StylingContext;

        render() {
            const context = this.context;

            const styleKey = key || TargetComponent.name;

            return (
                <TargetComponent { ...this.props } styleData={context[styleKey] || {}} />
            )
        }
    }
};
