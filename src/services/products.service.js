import { products } from './products.data';
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../redux/actions';

function getProducts(){
  return new Promise((resolve) => setTimeout(() => resolve(products), 100))
}

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        getProducts()
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res[0].hits));
            return res[0].hits;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;