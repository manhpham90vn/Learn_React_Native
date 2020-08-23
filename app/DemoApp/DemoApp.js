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

// Action
const finishTask = (index) => {
    return {
        type: 'FINISH',
        atIndex: index
    }
}

const deleteTask = (index) => {
    return {
        type: 'DELETE',
        atIndex: index
    }
}

// Reducer
const taskListReducer = (state = appState, action) => {

    let newTaskList = state.data

    switch (action.type) {
        case 'FINISH':
            newTaskList[action.atIndex].isFinished = true
            return { ...state, data: newTaskList }
        case 'DELETE':
            newTaskList = newTaskList.filter(( item, i ) => i !== action.atIndex )
            return  { ...state, data: newTaskList }
            break
    }
    return state
}

// Store
const reducers = combineReducers({
    taskListReducer
})
const store = createStore(reducers, applyMiddleware(thunk))

class DemoApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                {title: 'Go to the office', isFinished: true},
                {title: 'Prepare tasks for today', isFinished: false},
                {title: 'Team meeting', isFinished: false},
                {title: 'Commit tasks changed', isFinished: false},
            ]
        }
    }

    onAddNewTask = (taskName) => {
        const newTask = { title: taskName, isFinished: false }
        const newTaskList = [ ...this.state.data, newTask ]

        this.setState({ data: newTaskList });
    }

    onFinishedItem = (index) => {
        let newTaskList = this.state.data;
        newTaskList[index].isFinished = !newTaskList[index].isFinished
        this.setState({ data: newTaskList });
    }

    onDeleteItem = (index) => {
        let newTaskList = this.state.data.filter( (item, i) => i != index );
        this.setState({ data: newTaskList });
    }

    render() {
        return(
            <View style={ styles.container }>
                <AddView onAddNewTask={ this.onAddNewTask } />
                <Counter />
                <TaskFlatList
                    listData={ this.state.data }
                    onFinishedItem={ this.onFinishedItem }
                    onDeleteItem={ this.onDeleteItem }
                />
            </View>
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
