import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB_TH4qTkkN5S5B0c_42EYpcIumeqMFq78",
  authDomain: "crwn-db-ffefd.firebaseapp.com",
  databaseURL: "https://crwn-db-ffefd.firebaseio.com",
  projectId: "crwn-db-ffefd",
  storageBucket: "crwn-db-ffefd.appspot.com",
  messagingSenderId: "202253643773",
  appId: "1:202253643773:web:3a52ebf401b325be4af394"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
