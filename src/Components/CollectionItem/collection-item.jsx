import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './collection-item.scss';

const addToCart = (event) => {
  event.preventDefault();
  console.log('add to cart clicked');
}

const CollectionItem = ({name, price, slug, imageUrl, match}) => (
  // TODO: Refactor this to fix the screen reader accessibility of the button - it is skipped by NVDA
  <li className="collection-item">
    <Link to={`${match.url}/${slug}`} className="collection-item__link" aria-label={name}>
      <div className="collection-item__image" style={{backgroundImage: `url(${imageUrl})`}}>
        <button className="collection-item__add-to-cart" onClick={addToCart} aria-hidden="false" tabIndex="0">Add to Cart</button>
      </div>
      <div className="collection-item__details">
        <h3 className="collection-item__header">{name}</h3>
        <span className="collection-item__price">${price}</span>
      </div>
    </Link>
  </li>
)

export default withRouter(CollectionItem);