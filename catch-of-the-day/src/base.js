import Rebase from 're-base';
import firebase from 'firebase';

// Firebase App
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDICF1-JANHTA2Brd_Shpg0wP5eK1vLE3Y",
    authDomain: "catch-of-the-day-brad-thompson.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-brad-thompson-default-rtdb.firebaseio.com",
  });

// Rebase Binding
const base = Rebase.createClass(firebase.database());

// This is a named Export
export { firebaseApp };

// This is a Default Export
export default base;