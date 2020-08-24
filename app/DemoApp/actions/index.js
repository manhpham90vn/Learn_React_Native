import actionsType from './ActionType'

export default {
    addTask: (data) => ({
        type: actionsType.REDUX_ADD_NEW_TASK,
        data
    }),

    deleteTask: (data) => ({
        type: actionsType.REDUX_DELETE_TASK,
        data
    }),

    finishTask: (data) => ({
        type: actionsType.REDUX_FINISH_TASK,
        data
    }),

    increase: (data) => ({
        type: actionsType.REDUX_INCREASE,
        data
    }),

    decrease: (data) => ({
        type: actionsType.REDUX_DECREASE,
        data
    }),

    requestSuccess: (data) => ({
        type: actionsType.SAGA_REQUEST_SUCCESS,
        data
    }),

    requestError: (data) => ({
        type: actionsType.SAGA_REQUEST_ERROR,
        data
    })
}
