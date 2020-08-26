import React, { Component } from 'react';
import { connect } from 'react-redux'

import Actions from '../actions/'
import Counter from '../views/Counter';

class CounterContainer extends Component {



    onIncrease = () => {

        const onSuccess = () => {
            console.log('onIncreaseCallBack success')
        }

        const onError = () => {
            console.log('onIncreaseCallBack error')
        }

        this.props.dispatch(Actions.increase({ onSuccess, onError }))
    }

    onDecrease = () => {

        const onSuccess = (data) => {
            console.log('onDecreaseCallBack success', data)
        }

        const onError = (error) => {
            console.log('onDecreaseCallBack error', error)
        }

        this.props.dispatch(Actions.decrease({ onSuccess, onError }))
    }

    render() {
        return (
            <Counter onIncrease={ this.onIncrease } onDecrease={ this.onDecrease } {...this.props} />
        )
    }
}

export default connect(
    state => {
        return {
            value: state.counterReducer.value,
            result: state.counterReducer.result
        }
    }
)(CounterContainer)

CounterContainer.defaultProps = {
    number : 1
}
