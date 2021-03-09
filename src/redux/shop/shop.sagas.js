import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import shopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {

    try {

        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));

    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }

    // collectionRef.get().then((snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    //     // updateCollections(collectionsMap);
    //     // this.setState({ loading: false });
    // }).catch((error) => dispatch(fetchCollectionsFailure(error.message)));
};

export function* onFetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
};

export function* shopSagas() {
    yield all([
        call(onFetchCollectionsStart),
    ]);
};