import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import CollectionItem from '../CollectionItem/collection-item';

import './collection-preview.scss';

const CollectionPreview = ({title, slug, items, match}) => (
  <div className="collection-preview">
    <div className="collection-preview__title">
      <Link to={`${match.url}/${slug}`} className="collection-preview__link">
        <h2 className="collection-preview__header">{title}</h2>
      </Link>
    </div>
    {
      items.slice(0, 4).map(({id, ...itemProps}) => (
        <CollectionItem key={id} {...itemProps}/>
      ))
    }
  </div>
)

export default withRouter(CollectionPreview);