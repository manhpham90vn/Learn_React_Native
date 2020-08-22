import React from 'react'
import {View, Text} from 'react-native'
import { createStore } from 'redux'

// State
let appState = { number: 1, history: [1] }

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
const numberReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            // mutable state
            console.log('ADD')
            const newValueAdd = state.number + action.value

            state.number = newValueAdd
            history = [...state.history, newValueAdd]
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

// Store
const store = createStore(numberReducer, appState)

// Test

store.subscribe(() => {
    console.log('state updated', store.getState())
})

// dispatch
store.dispatch(add)
store.dispatch(add)
store.dispatch(sub)
store.dispatch(sub)

// dispatch
store.dispatch({
    type: 'ADD',
    value: 10
})

// dispatch
const createAddAction = (number) => {
    return { type: 'ADD', value: number }
}
store.dispatch( createAddAction(10) )

const BasicRedux = () => {
    return(
        <View style={{flex: 1, backgroundColor: 'blue'}}>

        </View>
    )
}

export default BasicRedux
