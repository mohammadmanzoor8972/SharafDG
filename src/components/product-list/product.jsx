import React, { Component } from 'react';
import { store } from '../../redux/store';
//import { TYPES } from '../../redux/actions/prodcuts';

import { Link } from 'react-router-dom';

export const ProductListComponentd = ({
    products,
    loadProducts,
    selectProduct,
    selectedProductId,
  }) => {
debugger;

  }
export class ProductListComponent extends Component {
    
    constructor(props){
        debugger;
        super(props);
        //const {loadUsers} = props;
        //store.dispatch({type:TYPES.PRODUCTS_FETCHED});
        //console.log(store.getState());

       // const {products} = store.getState().products;
    }

    render(){
       // this.loadUsers();
     //   return (<h1>Hello</h1>);
      return this.props.products.map((item)=>{
           return (
            <Link class="nav-link" to={"/productdet/"+item.post_id}>{item.post_title}</Link> 
        )
       })
       
    }
}