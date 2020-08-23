const counterReducer = (state = { value: 1 }, action) => {

    switch (action.type) {
        case 'INCREASE':
            return { ...state, value: state.value + 1 }
        case 'DECREASE':
            return  { ...state, value: state.value - 1 }
        case 'SUCCESS':
            return { ...state, results: action.results }
        case 'ERROR':
            return  { ...state, results: action.error}
    }
    return state
}

export default counterReducer
