import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import AddView from './AddView';
import Counter from './Counter';
import TaskFlatList from './TaskFlatList';

// State
const appState = {
    data: [
        {title: 'Go to the office', isFinished: true},
        {title: 'Prepare tasks for today', isFinished: false},
        {title: 'Team meeting', isFinished: false},
        {title: 'Commit tasks changed', isFinished: false},
    ]
}

// Reducer
const taskListReducer = (state = appState, action) => {

    let newTaskList = state.data

    switch (action.type) {
        case 'FINISH':
            newTaskList[action.atIndex].isFinished = !newTaskList[action.atIndex].isFinished
            return { ...state, data: newTaskList }
        case 'DELETE':
            newTaskList = newTaskList.filter(( item, i ) => i !== action.atIndex )
            return  { ...state, data: newTaskList }
            break
        case 'ADD':
            const newTask = {title: action.taskName, isFinished: false}
            return {...state, data: [...state.data, newTask]}
    }
    return state
}

// LOGGER MIDDLEWARE
const logger = store => next => action => {
    console.log('state', store.getState())
    next(action)
    console.log('state updated', store.getState())
}

// Store
const reducers = combineReducers({
    taskListReducer
})
const store = createStore(reducers, applyMiddleware(thunk, logger))

class DemoApp extends Component {

    render() {
        return(
            <Provider store={ store }>
                <View style={ styles.container }>
                    <AddView />
                    <Counter />
                    <TaskFlatList />
                </View>
            </Provider>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1F5FE'
    }
});

export default DemoApp
