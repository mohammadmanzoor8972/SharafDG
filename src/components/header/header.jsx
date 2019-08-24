import React from 'react';
import './header.css';

export class Header extends React.Component{

state={
    keyword:""
}

handleChange=({currentTarget:input})=>{
   this.setState({keyword:input.value})

   //can call dispatch method for filter
}

render(){
return(
    <div className="headers">

        <nav className="site-nav">
            
       
            <div className="logo" href="#" onClick={()=>window.location.href="/products/"}>
            </div>
            <ul className="pull-right top-nav">
                <li><a href="#0">History</a></li>
                <li><a href="#0">Gift Cards</a></li>
                <li><a href="#0">Help</a></li>
                <li><a href="#0">Country</a></li>
                <li><a href="#0">Account</a></li>
                <li className="cart"><span className="glyphicon glyphicon-shopping-cart"> </span> Cart &nbsp;&nbsp;<span
                        className="cart-count">12</span></li>
            </ul>

        </nav>
        <nav className="site-nav">
            <ul className="pull-left left-nav">
                <li><a href="#0">Department</a></li>
                <li><a href="#0">Brands</a></li>
                <li><a href="#0">Services</a></li>
                <li className="active"><a href="#0">Deals</a></li>

            </ul>


            <div className="col-xs-6 col-md-6  pull-right">
                <div className="input-group">
                    <div className="input-group-btn search-panel">
                        <button type="button" className="btn btn-default dropdown-toggle search-panel-control"
                            data-toggle="dropdown">
                            <span id="search_concept">Gaming</span> <span className="caret"></span>
                        </button>
                      
                    </div>
                    <input type="hidden" name="search_param" value="all" id="search_param" className="search-panel-control"/>
                    <input type="text" className="form-control search-panel-control" name="x" onChange={this.handleChange}
                        placeholder="Search term..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-default search-panel-control" type="button"><span
                                className="glyphicon glyphicon-search"></span></button>
                    </span>
                </div>
            </div>
            </nav>
    </div>
)
}
}