import {useState} from 'react';

import CollectionPreview from '../../Components/CollectionPreview/collection-preview';

import DATA from '../../Pages/Shop/shop-data.js';
import './shop.scss';

// export default class ShopPage extends React.Component {
//   constructor() {
//     super();

//     this.state = { collections: DATA };
//   }

//   render() {
//     return(
//       <div className="shop-page">
//         <h1 className="shop-page__header">Shop</h1>
//         {
//           this.state.collections.map(({id, ...collectionData}) => 
//             <CollectionPreview key={id} {...collectionData} />
//           )
//         }
//       </div>
//     )
//   }
// }

export default function ShopPage() {
  const [collections, setCollections] = useState(DATA);

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