import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC_t4Q2V6H6bPGxIUIXVMwfUlsvRPjJQes",
    authDomain: "bari-shop.firebaseapp.com",
    databaseURL: "https://bari-shop.firebaseio.com",
    projectId: "bari-shop",
    storageBucket: "bari-shop.appspot.com",
    messagingSenderId: "696120426611",
    appId: "1:696120426611:web:c4354f32b2872f02ccaa06",
    measurementId: "G-NZWQZ4GS0X"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;