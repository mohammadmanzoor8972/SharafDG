import React from 'react';
import './common.scss';
import propTypes from 'prop-types';

const Data = ["Intel Core i7", "Intel Core i5", "Intel Core i3"];


export class CpuComponent extends React.Component{
    
    state = {
        value:"Intel Core i7"
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
        <div className="cpu-bar">
        <span>Processor : </span> <strong>{this.state.value}</strong>
        <div className="screen">
            {Data.map((item)=> {
            return <CpuItem item={item} selected={this.clickHandler}/>
            })}
        </div>
        </div>
    )
        }
}

const CpuItem = props =>{


return (
    <div className="item" onClick={()=>props.selected(props.item)}>
       <span className="titles" >{props.item}</span> 
    </div>
)
}

CpuItem.prototype = {
    selected:propTypes.func,
    item:propTypes.string
}