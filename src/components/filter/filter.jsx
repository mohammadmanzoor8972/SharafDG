import React from 'react';

import "./filter.scss";
import StarRating from '../common/Ratings/star-rating';
import { ColorComponent } from '../common/color';

export const FilterComponent =()=>{
        return(
            <div className="panel-group filter-panel">
                        <div className="panel">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                <strong> Refine </strong>
                                </h4>
                            </div>
                            <div id="filter1" className="panel-collapse collapse in">
                                <div className="panel-body">
                                    <div className="filter-setting">
                                    <form action="" mathod="GET">
                                        <label>Your Selections </label>
                                    
                                        <hr className="line"/>
                                        <label>Categories</label>
                                        <a className="pull-right collapsed-icon-toggle" href="#coll-1" data-toggle="collapse">
                                            <span className="glyphicon glyphicon-minus on-opened"></span>
                                            <span className="glyphicon glyphicon-plus on-closed"></span>
                                        </a>
                                        <br/>
                                        <div id="coll-13" className="collapse in">
                                           <p>Xbox 360</p>
                                           <p>Xbox One</p>
                                           <p>Playstation 4</p>
                                           <p>Macbook Pro</p>
                                           <p>iPhone</p>
                                        </div>
                                        <hr className="line"/>
                                        <label>Brand</label>
                                        <a className="pull-right collapsed-icon-toggle" href="#coll-1" data-toggle="collapse">
                                            <span className="glyphicon glyphicon-minus on-opened"></span>
                                            <span className="glyphicon glyphicon-plus on-closed"></span>
                                        </a>
                                        <br/>
                                        <div id="coll-1" className="collapse in">
                                                <input type="text" placeholder="150"/> 
                                                <div className="padding-v-xs" data-toggle="buttons">
                                                <label className="btn btn-default btn-xs ico">
                                                    <input type="checkbox" name=""
                                                       value="" autoComplete="off"/>
                                                    <span className="icon glyphicon glyphicon-ok"></span>
                                                </label>
                                                <span>Samsung</span>
                                            </div>
                                            <div className="padding-v-xs" data-toggle="buttons">
                                                <label className="btn btn-default btn-xs ico">
                                                    <input type="checkbox" name=""
                                                       value="" autoComplete="off"/>
                                                    <span className="icon glyphicon glyphicon-ok"></span>
                                                </label>
                                                <span>LG</span>
                                            </div>
                                            <div className="padding-v-xs" data-toggle="buttons">
                                                <label className="btn btn-default btn-xs ico">
                                                    <input type="checkbox" name=""
                                                       value="" autoComplete="off"/>
                                                    <span className="icon glyphicon glyphicon-ok"></span>
                                                </label>
                                                <span>Philips</span>
                                            </div>
                                          
                                        </div>
                                        <hr className="line"/>
                                        <label>Price (AED)</label>
                                        <a className="pull-right collapsed-icon-toggle" href="#coll-2" data-toggle="collapse">
                                            <span className="glyphicon glyphicon-minus on-opened"></span>
                                            <span className="glyphicon glyphicon-plus on-closed"></span>
                                        </a>
                                        <br/>
                                        <div id="coll-2" className="scroll-v-250px collapse in">
                                            <div className="padding-v-xs" data-toggle="buttons">
                                            <label className="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                       value="" autoComplete="off"/>
                                                <span className="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                                <span>0 - 100</span>
                                            </div>
                                            <div className="padding-v-xs" data-toggle="buttons">
                                                <label className="btn btn-default btn-xs ico">
                                                    <input type="checkbox" name=""
                                                       value="" autoComplete="off"/>
                                                    <span className="icon glyphicon glyphicon-ok"></span>
                                                </label>
                                                <span>100 - 500</span>
                                            </div>
                                            <div className="padding-v-xs" data-toggle="buttons">
                                                <label className="btn btn-default btn-xs ico">
                                                    <input type="checkbox" name=""
                                                       value="" autoComplete="off"/>
                                                    <span className="icon glyphicon glyphicon-ok"></span>
                                                </label>
                                                <span>500 - 700</span>
                                            </div>
                                            <div className="padding-v-xs" data-toggle="buttons">
                                                <label className="btn btn-default btn-xs ico">
                                                    <input type="checkbox" name=""
                                                       value="" autoComplete="off"/>
                                                    <span className="icon glyphicon glyphicon-ok"></span>
                                                </label>
                                                <span>700 - 1000</span>
                                            </div>
                                            <div className="padding-v-xs price-range" data-toggle="buttons">
                                               
                                               <input type="number" className="price" placeholder="AED"/>-&nbsp;<input type="number" placeholder="AED" className="price"/> <span>Go</span>
                                            </div>
                                           
                                        </div>
                                        <hr className="line"/>
                                        <label>Color</label>
                                        <a className="pull-right collapsed-icon-toggle" href="#coll-3" data-toggle="collapse">
                                            <span className="glyphicon glyphicon-minus on-opened"></span>
                                            <span className="glyphicon glyphicon-plus on-closed"></span>
                                        </a>
                                        <br/>
                                        <div id="coll-3" className="scroll-v-250px collapse in">
                                           <ColorComponent isTitleHidden={true}/>
                                        </div>
                                        <hr className="line"/>
                                        <label>Rating</label>
                                        <a className="pull-right collapsed-icon-toggle" href="#coll-4" data-toggle="collapse">
                                            <span className="glyphicon glyphicon-minus on-opened"></span>
                                            <span className="glyphicon glyphicon-plus on-closed"></span>
                                        </a>
                                        <br/>
                                        <div id="coll-4" className="scroll-v-250px collapse in">
                                            <div className="padding-v-xs" data-toggle="buttons">
                                            <label className="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                       value="" autoComplete="off"/>
                                                <span className="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                                <StarRating totalStars={5}/>
                                            </div>
                                        </div>
                                        <div id="coll-4" className="scroll-v-250px collapse in">
                                            <div className="padding-v-xs" data-toggle="buttons">
                                            <label className="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                       value="" autoComplete="off"/>
                                                <span className="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                                <StarRating totalStars={5}/>
                                            </div>
                                        </div>
                                        <div id="coll-4" className="scroll-v-250px collapse in">
                                            <div className="padding-v-xs" data-toggle="buttons">
                                            <label className="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                       value="" autoComplete="off"/>
                                                <span className="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                                <StarRating totalStars={5}/>
                                            </div>
                                        </div>
                                        <div id="coll-4" className="scroll-v-250px collapse in">
                                            <div className="padding-v-xs" data-toggle="buttons">
                                            <label className="btn btn-default btn-xs ico">
                                                <input type="checkbox" name=""
                                                       value="" autoComplete="off"/>
                                                <span className="icon glyphicon glyphicon-ok"></span>
                                            </label>
                                                <StarRating totalStars={5}/>
                                            </div>
                                        </div>
                                        <hr className="line"/>
                                        <button type="submit" className="btn btn-block btn-success">
                                            <span className="glyphicon glyphicon-search"></span>
                                        </button>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }