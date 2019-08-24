import React from 'react';
import { Link } from 'react-router-dom';
import './product-items.scss';
import StarRating from '../common/Ratings/star-rating';
export const ProductItem=({post_id, post_title, images, price, sale_price})=>{
    return(
        <div class="detail-panel-items" id={post_id}>
        <div class="item-images">
        <Link class="nav-link" to={"/productdet/"+post_id}><img src={images}/></Link>
        </div>
        <div class="title">
            {post_title}
        </div>
        <div class="rating">
        <StarRating totalStars={5} />
        </div>
        <div class="save">
           <span> AED {price}</span> <strong>Save 12%</strong>
        </div>
        <div class="price">
            AED {sale_price}
        </div>
      </div>
    )
}
