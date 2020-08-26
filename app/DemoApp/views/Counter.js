import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';

export default class Counter extends Component {

    render() {
        return (
            <View style={ styles.counterView } >
                <Button onPress={ () => {
                    this.props.onDecrease()
                } } title="Sub" />
                <Text>Counter: { this.props.value }</Text>
                <Text>{ this.props.title }</Text>
                <Text>{ this.props.description }</Text>
                <Button onPress={ () => {
                    this.props.onIncrease()
                } } title="Add" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    counterView : {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
