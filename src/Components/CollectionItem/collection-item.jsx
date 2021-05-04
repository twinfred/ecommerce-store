import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './collection-item.scss';

const addToCart = (event) => {
  event.preventDefault();
  console.log('add to cart clicked');
}

const CollectionItem = ({name, price, slug, imageUrl, match}) => (
  <div className="collection-item">
    <Link to={`${match.url}/${slug}`} className="collection-item__link">
      <div className="collection-item__image" style={{backgroundImage: `url(${imageUrl})`}}>
        <button className="collection-item__add-to-cart" onClick={addToCart}>Add to Cart</button>
      </div>
      <div className="collection-item__details">
        <h3 className="collection-item__header">{name}</h3>
        <span className="collection-item__price">${price}</span>
      </div>
    </Link>
  </div>
)

export default withRouter(CollectionItem);