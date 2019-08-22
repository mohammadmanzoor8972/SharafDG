import React, { Component } from 'react';
import { store } from '../../redux/store';
//import { TYPES } from '../../redux/actions/prodcuts';

import { Link } from 'react-router-dom';
import './product.css';

export class ProductListComponent extends Component {
    
    constructor(props){
        super(props);
        //const {loadUsers} = props;
        //store.dispatch({type:TYPES.PRODUCTS_FETCHED});
        //console.log(store.getState());
   //<Link class="nav-link" to={"/productdet/"+item.post_id}>{item.post_title}</Link> 
       // const {products} = store.getState().products;
    }

    render(){
       // this.loadUsers();
     //   return (<h1>Hello</h1>);
    //  return this.props.products.map((item)=>{
           return (
          <div class="main-content">
            <div class="panel-group">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" href="#filter1">
                                    Refine
                                </a>
                                <a class="pull-right" data-toggle="collapse" href="#filter1">
                                    <span class="glyphicon glyphicon-filter"></span>
                                </a>
                            </h4>
                        </div>
                        <div id="filter1" class="panel-collapse collapse in">
                            <div class="panel-body">
                                <div class="filter-setting">
                                <form action="" mathod="GET">
                                    <label>Lorem Ipsum</label>
                                    <a class="pull-right collapsed-icon-toggle" href="#coll-0" data-toggle="collapse">
                                        <span class="glyphicon glyphicon-minus on-opened"></span>
                                        <span class="glyphicon glyphicon-plus on-closed"></span>
                                    </a>
                                    <br/>
                                    <div id="coll-0" class="collapse in">
                                        <input type="text" placeholder="150"/> 
                                        - 
                                        <input type="text" placeholder="10000"/>
                                    </div>
                                    <hr class="line"/>
                                    <label>Brand</label>
                                    <a class="pull-right collapsed-icon-toggle" href="#coll-1" data-toggle="collapse">
                                        <span class="glyphicon glyphicon-minus on-opened"></span>
                                        <span class="glyphicon glyphicon-plus on-closed"></span>
                                    </a>
                                    <br/>
                                    <div id="coll-1" class="collapse in">
                                            <input type="text" placeholder="150"/> 
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off" checked/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Samsung</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>LG</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Philips</span>
                                        </div>
                                      
                                    </div>
                                    <hr class="line"/>
                                    <label>Lorem Ipsum</label>
                                    <a class="pull-right collapsed-icon-toggle" href="#coll-2" data-toggle="collapse">
                                        <span class="glyphicon glyphicon-minus on-opened"></span>
                                        <span class="glyphicon glyphicon-plus on-closed"></span>
                                    </a>
                                    <br/>
                                    <div id="coll-2" class="scroll-v-250px collapse in">
                                        <div class="padding-v-xs" data-toggle="buttons">
                                        <label class="btn btn-default btn-xs ico">
                                            <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                            <span class="icon glyphicon glyphicon-ok"></span>
                                        </label>
                                            <span>Lorem Ipsum 1</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Lorem Ipsum 2</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Lorem Ipsum 3</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Lorem Ipsum 4</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Lorem Ipsum 5</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Lorem Ipsum 6</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Lorem Ipsum 7</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Lorem Ipsum 8</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Lorem Ipsum 9</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Lorem Ipsum 10</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Lorem Ipsum 11</span>
                                        </div>
                                        <div class="padding-v-xs" data-toggle="buttons">
                                            <label class="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                                <span class="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                            <span>Lorem Ipsum 12</span>
                                        </div>
                                    </div>
                                    <hr class="line"/>
                                    <label>Lorem Ipsum</label>
                                    <a class="pull-right collapsed-icon-toggle" href="#coll-3" data-toggle="collapse">
                                        <span class="glyphicon glyphicon-minus on-opened"></span>
                                        <span class="glyphicon glyphicon-plus on-closed"></span>
                                    </a>
                                    <br/>
                                    <div id="coll-3" class="scroll-v-250px collapse in">
                                        <div class="padding-v-xs" data-toggle="buttons">
                                        <label class="btn btn-default btn-xs ico">
                                            <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                            <span class="icon glyphicon glyphicon-ok"></span>
                                        </label>
                                            <span>Lorem Ipsum 1</span>
                                        </div>
                                    </div>
                                    <hr class="line"/>
                                    <label>Lorem Ipsum</label>
                                    <a class="pull-right collapsed-icon-toggle" href="#coll-4" data-toggle="collapse">
                                        <span class="glyphicon glyphicon-minus on-opened"></span>
                                        <span class="glyphicon glyphicon-plus on-closed"></span>
                                    </a>
                                    <br/>
                                    <div id="coll-4" class="scroll-v-250px collapse in">
                                        <div class="padding-v-xs" data-toggle="buttons">
                                        <label class="btn btn-default btn-xs ico">
                                            <input type="checkbox" name=""
                                                   value="" autocomplete="off"/>
                                            <span class="icon glyphicon glyphicon-ok"></span>
                                        </label>
                                            <span>Lorem Ipsum 1</span>
                                        </div>
                                    </div>
                                    <hr class="line"/>
                                    <button type="submit" class="btn btn-block btn-success">
                                        <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <div class="detail-panel">
          <div class="detail-panel-items">
            <div class="item-images">
               <img src="https://s.sdgcdn.com/7/2018/09/903b5494f751ac985213e56652a4a7b624812a5a_alu_space_sport_black_s4_gallery1-300x300.jpg"/>
            </div>
            <div class="title">
                Microsoft Xbox One Elite Wireless Controller, Black, HM3-0001
            </div>
            <div class="rating">
                ******
            </div>
            <div class="save">
               <span> AED 94</span> <strong>Save 12%</strong>
            </div>
            <div class="price">
                AED 345
            </div>
          </div>
          <div class="detail-panel-items">
                <div class="item-images">
                   <img src="https://s.sdgcdn.com/7/2018/09/5fd8cf36f5a8f6ade47a036c2c384dbea0c05835_alu_silver_sport_white_2-300x300.jpg"/>
                </div>
                <div class="title">
                    Microsoft Xbox One Elite Wireless Controller, Black, HM3-0001
                </div>
                <div class="rating">
                    ******
                </div>
                <div class="save">
                   <span> AED 94</span> <strong>Save 12%</strong>
                </div>
                <div class="price">
                    AED 345
                </div>
              </div>
              <div class="detail-panel-items">
                    <div class="item-images">
                       <img src="https://s.sdgcdn.com/7/2018/09/c70973c44aee4931d8be58d8ef57f4bfe783586c_44_alu_gold_sport_pink_sand_nc_s4_gallery1-300x300.jpg"/>
                    </div>
                    <div class="title">
                        Microsoft Xbox One Elite Wireless Controller, Black, HM3-0001
                    </div>
                    <div class="rating">
                        ******
                    </div>
                    <div class="save">
                       <span> AED 94</span> <strong>Save 12%</strong>
                    </div>
                    <div class="price">
                        AED 345
                    </div>
                  </div>
                  <div class="detail-panel-items">
                        <div class="item-images">
                           <img src="https://s.sdgcdn.com/7/2018/10/43fe974c323e8e497cecce8e801c405319448ea7_alu_space_sport_black_s4_gallery1-300x300.jpg"/>
                        </div>
                        <div class="title">
                            Microsoft Xbox One Elite Wireless Controller, Black, HM3-0001
                        </div>
                        <div class="rating">
                            ******
                        </div>
                        <div class="save">
                           <span> AED 94</span> <strong>Save 12%</strong>
                        </div>
                        <div class="price">
                            AED 345
                        </div>
                      </div>
                      <div class="detail-panel-items">
                            <div class="item-images">
                               <img src="https://s.sdgcdn.com/7/2018/09/c2b2efd27d11fd8d8731a3cd7efdd9ac702ff44e_Series_3_Silver_Aluminium_Case_with_White_SportBand_1-300x300.jpg"/>
                            </div>
                            <div class="title">
                                Microsoft Xbox One Elite Wireless Controller, Black, HM3-0001
                            </div>
                            <div class="rating">
                                ******
                            </div>
                            <div class="save">
                               <span> AED 94</span> <strong>Save 12%</strong>
                            </div>
                            <div class="price">
                                AED 345
                            </div>
                          </div>
                          <div class="detail-panel-items">
                                <div class="item-images">
                                   <img src="https://s.sdgcdn.com/7/2018/11/406ab6b9986785a11aafcfda75df7f08095451a0_MBA_PFOpen_Slvr_AE_AR.tif_PRINT-300x300.jpg"/>
                                </div>
                                <div class="title">
                                    Microsoft Xbox One Elite Wireless Controller, Black, HM3-0001
                                </div>
                                <div class="rating">
                                    ******
                                </div>
                                <div class="save">
                                   <span> AED 94</span> <strong>Save 12%</strong>
                                </div>
                                <div class="price">
                                    AED 345
                                </div>
                              </div>
                              <div class="detail-panel-items">
                                    <div class="item-images">
                                       <img src="https://s.sdgcdn.com/7/2018/11/02e3434a34e7b4d9c3dca18b4a1be5dabbb654ac_MBA_PFOpen_Gold_AE_AR.tif_PRINT-300x300.jpg"/>
                                    </div>
                                    <div class="title">
                                        Microsoft Xbox One Elite Wireless Controller, Black, HM3-0001
                                    </div>
                                    <div class="rating">
                                        ******
                                    </div>
                                    <div class="save">
                                       <span> AED 94</span> <strong>Save 12%</strong>
                                    </div>
                                    <div class="price">
                                        AED 345
                                    </div>
                                  </div>
        </div>
    </div>
        );
       //})
       
    }
}