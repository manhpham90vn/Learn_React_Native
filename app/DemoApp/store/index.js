import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import rootSaga from '../sagas';

const combinedReducers = combineReducers(reducers)

// LOGGER MIDDLEWARE
const logger = store => next => action => {
    // console.log('state', store.getState())
    next(action)
    // console.log('state updated', store.getState())
}

// SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware()

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

export default store
