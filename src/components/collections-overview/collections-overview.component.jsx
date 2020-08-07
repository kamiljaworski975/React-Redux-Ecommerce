import React from 'react';
import {connect} from 'react-redux';
import { selectCollectionsOverview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview";

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
         {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
)

const mapStateToProps = (state) => ({
    collections: selectCollectionsOverview(state),
  });

  export default connect(mapStateToProps)(CollectionsOverview);