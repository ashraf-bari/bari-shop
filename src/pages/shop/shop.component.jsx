import React from 'react';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// import CollectionPage from '../collection/collection.component';
import collectionPageContainer from '../../pages/collection/collection.container';

// import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import collectionsOverviewContainer from '../../components/collection-overview/collection-overview.cotainer';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    // All the previous code
    // state = {
    //     loading: true,
    // };

    // unsubscribeFromSnapshot = null;

    // componentDidMount() {
    //     // const { updateCollections } = this.props;

    //     // const collectionRef = firestore.collection('collections');

    //     // Native Fetch API
    //     // fetch('https://firestore.googleapis.com/v1/projects/bari-shop/databases/(default)/documents/collections')
    //     //     .then((response) => response.json())
    //     //     .then((collections) => console.log(collections));


    //     // Promise Pattern
    //     // collectionRef.get().then((snapshot) => {
    //     //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     //     updateCollections(collectionsMap);
    //     //     this.setState({ loading: false });
    //     // });

    //     // Observable Pattern with Firestore
    //     // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
    //     //     // console.log('snapshot', snapshot);
    //     //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot); /**await is missing*/
    //     //     // console.log(collectionsMap);
    //     //     updateCollections(collectionsMap);
    //     //     this.setState({ loading: false });
    //     // });
    // }

    render() {
        const { match } = this.props;
        // const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={collectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={collectionPageContainer} />
            </div>
        );
    }
};

// const mapStateToProps = createStructuredSelector({
//     isCollectionFetching: selectIsCollectionFetching,
//     isCollectionsLoaded: selectIsCollectionsLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});



export default connect(null, mapDispatchToProps)(ShopPage); 