import React, { Component } from 'react';
import StylingContext from './styling/context';
import style from './styling/style';
import MyComponent from "./MyComponent";

export default class App extends Component {
    render() {
        return (
            <div>
                <StylingContext.Provider value={style}>
                    <MyComponent/>
                </StylingContext.Provider>
            </div>
        )
    }
}
