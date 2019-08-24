import React from 'react';
import './common.scss';
import propTypes from 'prop-types';

const Data = ["64 GB", "128 GB", "256 GB", "512 GB"];


export class StorageComponent extends React.Component{
    
    state = {
        storage:"64 GB"
    }
   
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(item){
       this.setState({storage:item});
    }

    render(){
    return(
        <div className="storage-bar">
        <span>Storage : </span> <strong>{this.state.storage}</strong>
        <div className="storage">
            {Data.map((item)=> {
            return <StorageItem item={item} selected={this.clickHandler}/>
            })}
        </div>
        </div>
    )
        }
}

const StorageItem = props =>{


return (
    <div className="item" onClick={()=>props.selected(props.item)}>
       <span className="titles">{props.item}</span> 
    </div>
)
}

StorageItem.prototype = {
    selected:propTypes.func,
    item:propTypes.string
}