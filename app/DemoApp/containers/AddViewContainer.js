import React, { Component } from 'react';
import { connect } from 'react-redux'

import Actions from '../actions/';
import AddView from '../views/AddView';

class AddViewContainer extends Component {

    render() {
        return (
            <AddView onAddNewTask={this.props.onAddNewTask} />
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
            onAddNewTask: (name) => dispatch( Actions.addTask(name) ),
        }
    }
)(AddViewContainer)
