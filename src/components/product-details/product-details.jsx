import React, { Component } from 'react';
import { store } from '../../redux/store';
import { Link } from "react-router-dom";

export class ProductDetails extends Component {
    
    render(){
        const productId = this.props.match.params.productId;
       var obj = store.dispatch({"type":"products/SELECT_PRODUCT", 'selectedProductId':productId});
        console.log(store.getState())
        const {selectedProductId} = store.getState().products;
        debugger;
        return (
      <h1>Hello</h1>
      )
    }
}