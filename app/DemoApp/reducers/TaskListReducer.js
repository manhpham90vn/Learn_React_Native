import ActionType from '../actions/ActionType';

const initState = {
    data: [
        {title: 'Go to the office', isFinished: true},
        {title: 'Prepare tasks for today', isFinished: false},
        {title: 'Team meeting', isFinished: false},
        {title: 'Commit tasks changed', isFinished: false},
    ]
}

const taskListReducer = (state = initState, action) => {

    let newTaskList = state.data

    switch (action.type) {
        case ActionType.REDUX_FINISH_TASK:
            newTaskList[action.data].isFinished = !newTaskList[action.data].isFinished
            return { ...state, data: newTaskList }
        case ActionType.REDUX_DELETE_TASK:
            newTaskList = newTaskList.filter(( item, i ) => i !== action.data )
            return  { ...state, data: newTaskList }
        case ActionType.REDUX_ADD_NEW_TASK:
            const newTask = {title: action.data, isFinished: false}
            return {...state, data: [...state.data, newTask]}
    }
    return state
}

export default taskListReducer
