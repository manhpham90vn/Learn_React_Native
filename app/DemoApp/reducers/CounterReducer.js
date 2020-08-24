import actionTypes from '../actions/ActionType'

const initState = {
    value: 1
}

const counterReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.REDUX_INCREASE:
            return { ...state, value: state.value + 1 }
        case actionTypes.REDUX_DECREASE:
            return  { ...state, value: state.value - 1 }
        case actionTypes.SAGA_REQUEST_SUCCESS:
            return {...state, result: action.data}
        case actionTypes.SAGA_REQUEST_ERROR:
            return {...state, result: action.data}
    }
    return state
}

export default counterReducer
