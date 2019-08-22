import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { productsSaga } from './products'

export const rootSaga = function*() {
  try {
    yield all([
      productsSaga(),
    ])
  } catch (e) {
    console.error(e)
  }
}


export const sagaMiddleware = createSagaMiddleware()