import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

const collectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default collectionsOverviewContainer;