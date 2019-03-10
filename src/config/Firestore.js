import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBtQt1-j8D8x7XAeAhtmETdF5EE4D1O9qw",
  authDomain: "firestore-demo-51d82.firebaseapp.com",
  databaseURL: "https://firestore-demo-51d82.firebaseio.com",
  projectId: "firestore-demo-51d82",
  storageBucket: "firestore-demo-51d82.appspot.com",
  messagingSenderId: "978566309815"
};
firebase.initializeApp(config);

const db = firebase.firestore()

export default db;