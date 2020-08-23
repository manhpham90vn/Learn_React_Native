import { all } from 'redux-saga/effects'

import { helloSaga, watchDeIncrement, watchIncrement } from './CounterSaga';

export default function* rootSagas() {
    yield all([
        helloSaga(),
        watchIncrement(),
        watchDeIncrement()
    ])
}
