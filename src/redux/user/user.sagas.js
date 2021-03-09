import { takeLatest, put, call, all } from 'redux-saga/effects';

import userActionTypes from './user.types';

import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from './user.actions';

import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';


export function* getSnapshotFromUserAuth(userAuth, additianlData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additianlData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error));
    }
};

export function* signInWithGoogle() {

    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }

    // try {
    //     const { user } = yield auth.signInWithPopup(googleProvider);
    //     const userRef = yield call(createUserProfileDocument, user);
    //     const userSnapshot = yield userRef.get();
    //     yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    // } catch (error) {
    //     yield put(signInFailure(error));
    // }
};

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }


    // try {
    //     const { user } = yield auth.signInWithEmailAndPassword(email, password);
    //     const userRef = yield call(createUserProfileDocument, user);
    //     const userSnapshot = yield userRef.get();
    //     yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    // } catch (error) {
    //     yield put(signInFailure(error));
    // }
};

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
};

export function* isAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isAuthenticated);
};

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
};

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
};



export function* signUp({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        // Both signUpSuccess Actions are correct. check user.actions.js
        // yield put(signUpSuccess({user, displayName}));
        yield put(signUpSuccess({ user, additianlData: { displayName } }));
    } catch (error) {
        yield put(signUpFailure(error));
    }
    // try {
    //     const { user } = await auth.createUserWithEmailAndPassword(email, password);

    //     await createUserProfileDocument(user, { displayName });

    //     this.setState({
    //         displayName: '',
    //         email: '',
    //         password: '',
    //         confirmPassword: ''
    //     });

    // } catch (error) {
    //     console.error(error);
    // }
};

export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
};

export function* signInAfterSignUp({ payload: { user, additianlData } }) {
    yield getSnapshotFromUserAuth(user, additianlData);
};

export function* onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
};


export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ]);
};