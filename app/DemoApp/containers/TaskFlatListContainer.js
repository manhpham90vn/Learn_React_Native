import React, { Component } from 'react';
import { connect } from 'react-redux'

import { finishTask, deleteTask } from '../actions/TaskListActions';
import TaskFlatList from '../views/TaskFlatList';

class TaskFlatListContainer extends Component {

    render() {
        return(
            <TaskFlatList {...this.props} />
        )
    }
}

export default connect(
    state => {
        return {
            listData: state.taskListReducer
        }
    },
    dispatch => {
        return {
            onFinishItem: (index) => dispatch( finishTask(index) ),
            onDeleteItem: (index) => dispatch( deleteTask(index) )
        }
    }
)(TaskFlatListContainer)
