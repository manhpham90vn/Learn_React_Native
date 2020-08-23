import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import taskListReducer from './reducers/TaskListReducer';
import counterReducer from './reducers/CounterReducer';
import CounterContainer from './containers/CounterContainer';
import AddViewContainer from './containers/AddViewContainer';
import TaskFlatListContainer from './containers/TaskFlatListContainer';

import rootSagas from './sagas/rootSagas';

// LOGGER MIDDLEWARE
const logger = store => next => action => {
    console.log('state', store.getState())
    next(action)
    console.log('state updated', store.getState())
}

// SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware()

// Store
const reducers = combineReducers({
    taskListReducer,
    counterReducer
})

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSagas)

class DemoApp extends Component {

    render() {
        return(
            <Provider store={ store }>
                <View style={ styles.container }>
                    <AddViewContainer />
                    <CounterContainer />
                    <TaskFlatListContainer />
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
