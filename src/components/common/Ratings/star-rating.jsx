import React from 'react';
import './star-rating.scss'

class StarRating extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const star = new Array(this.props.totalStars).fill(0);

        return(
            <span className="star-rating">
           {star.map((s,index)=> <i className="star glyphicon glyphicon-star" key={index}></i>)}
            </span>
        )
    }
}

export default StarRating;