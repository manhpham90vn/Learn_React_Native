import React from 'react'
import {View, Text} from 'react-native'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// State
let appState = { number: 1, history: [1], error: '' }

// Action
const add = {
    type: 'ADD',
    value: 1
}

const sub = {
    type: 'SUB',
    value: 1
}

// Reducer
const numberReducer = (state = appState, action) => {
    switch (action.type) {
        case 'ADD':
            // mutable state
            console.log('ADD')
            const newValueAdd = state.number + action.value

            state = {
                ...state,
                history: [...state.history, newValueAdd],
                number: newValueAdd
            }
            break
        case 'SUB':
            // immutable state
            console.log('SUB')
            const newValueSub = state.number - action.value;

            state = {
                ...state,
                history: [...state.history, newValueSub],
                number: newValueSub
            }
            break
    }
    return state
}

const errorReducer = (state = appState, action) => {

    switch (action.type) {
        case 'LESS_THAN_ZERO':
            state = {
                ...state,
                error: 'less than zero'
            }
            break
    }

    return state
}

// Middleware
const logger = store => next => action => {
    console.log('state', store.getState())
    next(action)
    console.log('state updated', store.getState())
}

const checkIsZero = store => next => action => {
    console.log('state', store.getState())

    const currentNumber = store.getState().numberReducer.number

    if (currentNumber == 0) {
        next( {type: 'LESS_THAN_ZERO'} )
    } else {
        next(action)
    }

    console.log('state updated', store.getState())
}

// Store
const reducers = combineReducers({
    numberReducer,
    errorReducer
})

const store = createStore(reducers, applyMiddleware(thunk, logger))

// Test

// store.subscribe(() => {
//     console.log('state updated', store.getState())
// })

// dispatch
// store.dispatch(add)
// store.dispatch(sub)

// dispatch
// store.dispatch({
//     type: 'ADD',
//     value: 1
// })

// dispatch
// const createAddAction = (number) => {
//     return { type: 'ADD', value: number }
// }
// store.dispatch( createAddAction(1) )

// store.dispatch({
//     type: 'LESS_THAN_ZERO'
// })

// store.dispatch(sub)
// store.dispatch(sub)
// store.dispatch(sub)
// store.dispatch(sub)
// store.dispatch(sub)

const addAfter3s = () => {
    return dispatch => {
        setTimeout(() => store.dispatch(add), 3000)
    }
}

store.dispatch(addAfter3s())

const BasicRedux = () => {
    return(
        <View style={{flex: 1, backgroundColor: 'blue'}}>

        </View>
    )
}

export default BasicRedux
