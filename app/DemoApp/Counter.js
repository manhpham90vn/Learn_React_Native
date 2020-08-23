import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';

import { connect } from 'react-redux'

import { increase, decrease } from './actions/CounterActions'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { number : props.number }
    }

    render() {

        return (
            <View style={ styles.counterView } >
                <Button onPress={ () => {
                    this.props.onDecrease()
                } } title="Sub" />
                <Text>Counter: { this.props.value }</Text>
                <Button onPress={ () => {
                    this.props.onIncrease()
                } } title="Add" />

            </View>
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
)(Counter)

Counter.defaultProps = {
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
