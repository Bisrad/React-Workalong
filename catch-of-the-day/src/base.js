import Rebase from 're-base';
import firebase from 'firebase';

// Firebase App
const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
  });

// Rebase Binding
const base = Rebase.createClass(firebase.database());

// This is a named Export
export { firebaseApp };

// This is a Default Export
export default base;