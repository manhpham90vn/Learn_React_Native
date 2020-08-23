import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increase, decrease } from '../actions/CounterActions'
import Counter from '../views/Counter';

class CounterContainer extends Component {

    render() {
        return (
            <Counter number={ this.props.value } {...this.props} />
        )
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
