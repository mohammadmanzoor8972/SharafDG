import React, { Component } from 'react';
import './product.scss';
import { FilterComponent } from '../filter/filter';
import { ProductItem } from '../product-items/product-items';

export class ProductListComponent extends Component {

    constructor(props){
        super(props)
        window.scrollTo(0, 0);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
        
      }

    componentWillMount() {
      const {fetchProducts} = this.props;
      fetchProducts();
  }
  
  shouldComponentRender() {
      const {pending} = this.props;
      if(this.pending === false) return false;
      return true;
  }
  
    render(){
           return (
            <div className="main-content">
                <FilterComponent/>
                <div className="detail-panel">
                    {this.props.products.map((item,index)=>{
                        return  (<ProductItem {...item} key={index}/>)
                        })}
                </div>
            </div>
        );
    }
}

