import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number : props.number,
            title: ''
        }
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {
        if (nextProps.result !== undefined) {
            this.setState({
                title: nextProps.result.title
            })
        }
    }

    render() {
        return (
            <View style={ styles.counterView } >
                <Button onPress={ () => {
                    this.props.onDecrease()
                } } title="Sub" />
                <Text>Counter: { this.props.value }</Text>
                <Text>{ this.state.title }</Text>
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
