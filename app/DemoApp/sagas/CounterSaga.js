import { takeLatest, put } from 'redux-saga/effects'
import { Api } from '../apis/api';

function* increment() {
    console.log('This is increment saga')
    try {
        const results = yield Api.getData()
        yield put({ type: 'SUCCESS', results: results })
    } catch (error) {
        yield put({ type: 'ERROR', error: error })
    }
}

function* deincrement() {
    console.log('This is deincrement saga')
}

// export saga
export function* watchIncrement() {
    yield takeLatest('INCREASE', increment)
}

export function* watchDeIncrement() {
    yield takeLatest('DECREASE', deincrement)
}

export function* helloSaga() {
    console.log('Hello Saga')
}
