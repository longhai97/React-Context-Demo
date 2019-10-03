import React, { Component } from 'react';
import withStyle from "./withStyle";

@withStyle()
export default class MyComponent extends Component {

    render() {
        return (
            <p style={this.props.styleData}>
                Some text
            </p>
        )
    }
}
