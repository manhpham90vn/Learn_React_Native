import { takeEvery } from 'redux-saga/effects'

function* increment() {
    console.log('This is increment saga')
}

function* deincrement() {
    console.log('This is deincrement saga')
}

// export saga

export function* watchIncrement() {
    yield takeEvery('INCREASE', increment)
}

export function* watchDeIncrement() {
    yield takeEvery('DECREASE', deincrement)
}

export function* helloSaga() {
    console.log('Hello Saga')
}
