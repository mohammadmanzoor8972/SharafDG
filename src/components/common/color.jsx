import React from 'react';
import './common.scss';
import propTypes from 'prop-types';

const Data = ["Red", "Blue", "Yellow", "Green"];


export class ColorComponent extends React.Component{
    
    state = {
        value:"Red",
        isSelected:false
    }
   
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(item){
       this.setState({value:item, isSelected:true});
    }

    render(){
    return(
        <div className="cpu-bar">
        <div hidden={this.props.isTitleHidden}><span>Colors : </span> <strong>{this.state.value}</strong></div>
        <div className="color">
            {Data.map((item, index)=> {
            return <ColorItem item={item} selected={this.clickHandler} key={index}/>
            })}
        </div>
        </div>
    )
        }
}

const ColorItem = props =>{
const color = {"backgroundColor":props.item}
return (
    <div className='item'
    style={color} onClick={()=>{props.selected(props.item)}}>
       <span className="titles" >{}</span> 
    </div>
)
}

ColorItem.prototype = {
    selected:propTypes.func,
    item:propTypes.string
}