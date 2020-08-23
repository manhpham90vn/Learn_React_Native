import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';

import { connect } from 'react-redux'

import { increase, decrease } from '../actions/CounterActions'

import Counter from '../Counter';

class CounterContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { number : props.number }
    }

    render() {

        return (
            <Counter number={ this.props.value } {...this.props} />
        );
    }
}

export default connect(
    state => {
        return {
            value: state.counterReducer.value
        }
    },
    dispatch => {
        return  {
            onIncrease: () => dispatch( increase() ),
            onDecrease: () => dispatch( decrease() )
        }
    }
)(CounterContainer)

CounterContainer.defaultProps = {
    number : 1
}

const styles = StyleSheet.create({
    counterView : {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
