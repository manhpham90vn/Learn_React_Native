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

import taskListReducer from './reducers/TaskListReducer';
import counterReducer from './reducers/CounterReducer';

// LOGGER MIDDLEWARE
const logger = store => next => action => {
    console.log('state', store.getState())
    next(action)
    console.log('state updated', store.getState())
}

// Store
const reducers = combineReducers({
    taskListReducer,
    counterReducer
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
