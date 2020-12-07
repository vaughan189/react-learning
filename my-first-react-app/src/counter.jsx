import React, { Component } from 'react';

export default class Counter extends Component {
    state = { value: 1 };

    render() {
        return (
            <div>{this.state.value}
                <button onClick={() => { this.setState({ value: this.state.value + 1 }) }}>Increment</button>
            </div>
        );
    }
}