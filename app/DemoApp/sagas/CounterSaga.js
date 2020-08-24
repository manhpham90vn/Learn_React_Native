import { takeLatest, put } from 'redux-saga/effects'
import { Api } from '../apis/api';
import actionsType from '../actions/ActionType'
import Action from '../actions'

function* increment() {
    try {
        const data = yield Api.getData()
        yield put(Action.requestSuccess(data))
    } catch (error) {
        yield put(Action.requestError(error))
    }
}

function* deincrement() {
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
