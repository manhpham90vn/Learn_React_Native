import React, { Component } from 'react';
import { connect } from 'react-redux'

import Actions from '../actions/';
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
            onFinishItem: (index) => dispatch( Actions.finishTask(index) ),
            onDeleteItem: (index) => dispatch( Actions.deleteTask(index) )
        }
    }
)(TaskFlatListContainer)
