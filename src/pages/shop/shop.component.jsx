import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPage from '../collection/collection.component';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updateCollections } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
    state = {
        loading: true,
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');

        // Native Fetch API
        // fetch('https://firestore.googleapis.com/v1/projects/bari-shop/databases/(default)/documents/collections')
        //     .then((response) => response.json())
        //     .then((collections) => console.log(collections));


        // Promise Pattern
        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });

        // Observable Pattern with Firestore
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
        //     // console.log('snapshot', snapshot);
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot); /**await is missing*/
        //     // console.log(collectionsMap);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => (<CollectionOverviewWithSpinner isLoading={loading} {...props} />)} />
                <Route path={`${match.path}/:collectionId`} render={(props) => (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => (dispatch(updateCollections(collectionsMap))),
});

export default connect(null, mapDispatchToProps)(ShopPage); 