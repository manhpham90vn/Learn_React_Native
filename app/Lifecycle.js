import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class Lifecycle extends Component {

    constructor(props) {
        super(props);
        console.log('constructor')
    }

    // Mounting
    UNSAFE_componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    // Updating
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState)
        return true
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState)
    }

    // UnMounting
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')

        return (
            <View>
                <Text>{this.props.currentTime}</Text>
            </View>
        )
    }

}

class LifecycleMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isRemoved: false,
            currentTime: new Date().toLocaleTimeString()
        }

        // tạo timer cho mỗi giây cập nhật thời gian
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    toggleView= () => {
        this.setState({
            isRemoved: !this.state.isRemoved
        })
    }

    render() {
        console.log('render main')

        const timerView = (!this.state.isRemoved) ? <Lifecycle currentTime={this.state.currentTime} /> : null
        const btnTitle = (!this.state.isRemoved) ? 'Remove' : 'Show'

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={ this.toggleView }>
                    { timerView }
                    <Text style={{textAlign: 'center'}}>{ btnTitle }</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LifecycleMain;
