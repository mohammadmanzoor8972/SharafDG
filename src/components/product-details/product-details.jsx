import React, { Component } from 'react';
import { store } from '../../redux/store';
import { Link } from "react-router-dom";
import './product-details.scss';
export class ProductDetails extends Component {
    
    render(){
        const productId = this.props.match.params.productId;
       var obj = store.dispatch({"type":"products/SELECT_PRODUCT", 'selectedProductId':productId});
        console.log(store.getState())
        const {selectedProductId} = store.getState().products;

        const {post_id, post_title, images, price, sale_price} = selectedProductId;
        return (
    
          <div class="product-information">
          <div class="main-content">
                
              <div class="detail-panel">
                  <div class="product-pics">
                      <div class="nav-bar-shortcut">
                          <span>Electronics > Computers & Tablets > Laptops > All Laptops > MacBooks > <strong>MacBook Pro</strong></span>
                      </div>
                      <div class="title">{post_title}</div>
                      <div class="rating">
                          <span>******</span> <span> 8 Customers </span>  <span> 3 Answered Questions </span>  | <span> Apple</span> 
                      </div>
                      <div class="product-preview">
                          <div class="small-thumnbail">
                              <img src="https://s.sdgcdn.com/7/2018/09/5fd8cf36f5a8f6ade47a036c2c384dbea0c05835_alu_silver_sport_white_2-300x300.jpg"/>
                              <img src="https://s.sdgcdn.com/7/2018/09/5fd8cf36f5a8f6ade47a036c2c384dbea0c05835_alu_silver_sport_white_2-300x300.jpg"/>
                              <img src="https://s.sdgcdn.com/7/2018/09/5fd8cf36f5a8f6ade47a036c2c384dbea0c05835_alu_silver_sport_white_2-300x300.jpg"/>
                          </div>
                          <div class="large-thumnbail">
                              <img src={images}/>
                          </div>
                      </div>
      
                  </div>
                  <div class="product-details">
                      <div class="product-price">
                          <span class="sell-price">AED {sale_price}</span>
                          <span class="save-price">Save AED 300</span> was AED {price}
                      </div>
                      <div class="product-color">
                         <span>Color : </span> <strong>Gold</strong>                      
                         <img src="logo.svg"/>
                      </div>
                      <div class="product-size">
                              <span>Screen Size : </span> <strong>13.3 Inch</strong>
                              <img src="screen.png"/>
                      </div>
                      <div class="product-storage">
                              <span>Storage : </span> <strong>256 GB</strong>
                              <img src="storage.png"/>
                      </div>
                      <div class="product-cpu">
                              <span>Processor : </span> <strong>Inter Core i7</strong>
                              <img src="cpu.png"/>
                      </div>
                      <div class="product-ram">
                          <select>
                              <option>Ram: 8 GB</option>
                          </select>
                      </div>
                      <div class="product-cart">
                          <button class="btn btn-primary">Add to Cart</button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="detail-specification">
               
                          <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                              <a class="nav-link active" data-toggle="tab" href="#details">Details</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" data-toggle="tab" href="#Specifications">Specifications</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" data-toggle="tab" href="#Reviews">Reviews</a>
                            </li>
                            <li class="nav-item">
                                  <a class="nav-link" data-toggle="tab" href="#Questions">Questions & Answers</a>
                                </li>
                          </ul>
                          <div class="tab-content">
                            <div id="details" class="container tab-pane active"><br/>
                              <p>
                                  Available in silver, space gray and gold the new thinner and lighter MacBook Air features a stunning Retina display, Touch Id, the latest Apple 
                                  vailable in silver, space gray and gold the new thinner and lighter MacBook Air features a stunning Retina display, Touch Id, the latest Apple
                                  vailable in silver, space gray and gold the new thinner and lighter MacBook Air features a stunning Retina display, Touch Id, the latest Apple
                              </p>
                              <ul>
                                  <li>Stunning 13.3 inch Retina Display</li>
                                  <li>Dual Core</li>
                                  <li>Inte UHD Graphics</li>
                                  <li>Fast SSD storage, 8GB memory</li>
                                  <li>Stero speakers with wider stero</li>
                                  <li>Upto 12 hrs</li>
                                  <li>802 LAN</li>
                                  <li>Force Touch</li>
                              </ul>
                            </div>
                            <div id="Specifications" class="container tab-pane fade"><br/>
                            
                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div id="Reviews" class="container tab-pane fade"><br/>
                             
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                          </div>
              </div>
          </div>
      
      )
    }
}