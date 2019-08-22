import { guid } from '../utilities/guid';
import { products } from './products.data';

export const productsService = {
  getProducts(){
    return new Promise((resolve) => setTimeout(() => resolve(products), 500))
  }
}
