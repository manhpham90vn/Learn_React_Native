import { takeLatest, put } from 'redux-saga/effects'
import { Api } from '../apis/api';
import actionsType from '../actions/ActionType'
import Action from '../actions'

function* increment(action) {

    const { onSuccess, onError } = action.data

    try {
        const data = yield Api.getData()
        onSuccess()
        yield put(Action.requestSuccess(data))
    } catch (error) {
        onError()
        yield put(Action.requestError(error))
    }
}

function* deincrement(action) {

    const { onSuccess, onError } = action.data

    try {
        const data = yield Api.getData()
        onSuccess(data)
    } catch (error) {
        onError(error)
    }

}

// export saga
export function* watchIncrement() {
    yield takeLatest(actionsType.REDUX_INCREASE, increment)
}

export function* watchDeIncrement() {
    yield takeLatest(actionsType.REDUX_DECREASE, deincrement)
}

export function* helloSaga() {

}
