import React from 'react';
import './common.scss';
import propTypes from 'prop-types';

const Data = ["13.3 Inch", "14 Inch", "15.6 Inc"];


export class ScreenComponent extends React.Component{
    
    state = {
        value:"13.3 Inch"
    }
   
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(item){
       this.setState({value:item});
    }

    render(){
    return(
        <div className="screen-bar">
        <span>Screen Size : </span> <strong>{this.state.value}</strong>
        <div className="screen">
            {Data.map((item)=> {
            return <ScreenItem item={item} selected={this.clickHandler}/>
            })}
        </div>
        </div>
    )
        }
}

const ScreenItem = props =>{


return (
    <div className="item" onClick={()=>props.selected(props.item)}>
       <span className="titles" >{props.item}</span> 
    </div>
)
}

ScreenItem.prototype = {
    selected:propTypes.func,
    item:propTypes.string
}