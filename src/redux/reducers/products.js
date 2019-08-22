import { TYPES } from '../actions/prodcuts'
import { products as data } from '../../services/products.data'
import { products } from '../../services/products.data';


const initialState = {
  products: products[0].hits,
  isLoading: false,
  selectedProductId: '',
}

export const productsReducer = (
  state = initialState,
  action
) => {
  debugger;
  switch (action.type) {
    case TYPES.FETCH_PRODUCTS:
      return {
        ...initialState,
        isLoading: true,
      }

    case TYPES.PRODUCTS_FETCHED:
      return {
        ...state,
        isLoading: false,
        products: data,
      }

    case TYPES.SELECT_PRDOUCT:
      return {
        ...state,
        selectedProductId:state.products.find(p=>p.post_id==action.selectedProductId)
      }

    default:
      return state
  }
}

const findProductById = (products) => (productId) => products.find(p => p.post_id === productId)

export const getProducts = (state) => state.products
export const getIsLoading = (state) => state.isLoading
export const getSelectedProductId = (state) => state.selectedProductId
export const getSelectedProduct = (state) => findProductById(getProducts(state))(getSelectedProductId(state))
export const getSelectedProductDetails = (state) => getSelectedProductId(state) ? getSelectedProduct(state) : []
