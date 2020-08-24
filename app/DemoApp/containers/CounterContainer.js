import React, { Component } from 'react';
import { connect } from 'react-redux'

import Actions from '../actions/'
import Counter from '../views/Counter';

class CounterContainer extends Component {

    render() {
        return (
            <Counter {...this.props} />
        )
    }
}

export default connect(
    state => {
        return {
            value: state.counterReducer.value,
            result: state.counterReducer.result
        }
    },
    dispatch => {
        return  {
            onIncrease: () => dispatch( Actions.increase() ),
            onDecrease: () => dispatch( Actions.decrease() )
        }
    }
)(CounterContainer)

CounterContainer.defaultProps = {
    number : 1
}
