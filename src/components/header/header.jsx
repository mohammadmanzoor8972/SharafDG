import React from 'react';
import './header.css';

export const Header =()=>(
    <div class="headers">

        <nav class="site-nav">
            <div class="logo">
            </div>
            <ul class="pull-right top-nav">
                <li><a href="#0">History</a></li>
                <li><a href="#0">Gift Cards</a></li>
                <li><a href="#0">Help</a></li>
                <li><a href="#0">Country</a></li>
                <li><a href="#0">Account</a></li>
                <li class="cart"><span class="glyphicon glyphicon-shopping-cart"> </span> Cart &nbsp;&nbsp;<span
                        class="cart-count">12</span></li>
            </ul>

        </nav>
        <nav class="site-nav">
            <ul class="pull-left left-nav">
                <li><a href="#0">Department</a></li>
                <li><a href="#0">Brands</a></li>
                <li><a href="#0">Services</a></li>
                <li class="active"><a href="#0">Deals</a></li>

            </ul>


            <div class="col-xs-6 col-md-6  pull-right">
                <div class="input-group">
                    <div class="input-group-btn search-panel">
                        <button type="button" class="btn btn-default dropdown-toggle search-panel-control"
                            data-toggle="dropdown">
                            <span id="search_concept">Gaming</span> <span class="caret"></span>
                        </button>
                      
                    </div>
                    <input type="hidden" name="search_param" value="all" id="search_param" class="search-panel-control"/>
                    <input type="text" class="form-control search-panel-control" name="x" value="Consoles"
                        placeholder="Search term..."/>
                    <span class="input-group-btn">
                        <button class="btn btn-default search-panel-control" type="button"><span
                                class="glyphicon glyphicon-search"></span></button>
                    </span>
                </div>
            </div>



        </nav>

    </div>
)