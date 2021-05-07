import {useState, useEffect} from 'react';

import CollectionPreview from '../../Components/CollectionPreview/collection-preview';

import DATA from '../../Pages/Shop/shop-data.js';
import './shop.scss';

export default function ShopPage() {
  const [collections, setCollections] = useState(DATA);

  useEffect(() => {
    document.title = 'Shop | Drag Queen Warehouse';
  }, []);

  return(
    <div className="shop-page">
      <h1 className="shop-page__header">Shop</h1>
      {
        collections.map(({id, ...collectionData}) => 
          <CollectionPreview key={id} {...collectionData} />
        )
      }
    </div>
  )
}