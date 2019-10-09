import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC1jSqkaDVydLCrrQo_ie7baf8tSsBCPZg",
  authDomain: "fir-intro-4857a.firebaseapp.com",
  databaseURL: "https://fir-intro-4857a.firebaseio.com",
  projectId: "fir-intro-4857a",
  storageBucket: "fir-intro-4857a.appspot.com",
  messagingSenderId: "942194542347",
  appId: "1:942194542347:web:b188d2593e1b3eda0d840e",
  measurementId: "G-DQ6Q8FN2VQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
