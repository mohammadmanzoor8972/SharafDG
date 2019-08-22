import { takeLatest, put, all } from 'redux-saga/effects'
import { productsService } from '../../services/products.service'
import { TYPES as ProductsTypes, ACTIONS as ProductsActions } from '../actions/prodcuts'

export function* fetchItems() {
  const res = yield productsService.getProducts()
  yield put(ProductsActions.productFetched(res))
}

export function* productsSaga() {
  yield all([
    takeLatest(ProductsTypes.FETCH_PRODUCTS, fetchItems),
  ])
}
