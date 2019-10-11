import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCE917gT1tzf7g-D7FDfnY9nrhvz_Hhzb4',
	authDomain: 'fir-lunch.firebaseapp.com',
	databaseURL: 'https://fir-lunch.firebaseio.com',
	projectId: 'fir-lunch',
	storageBucket: 'fir-lunch.appspot.com',
	messagingSenderId: '452764998055',
	appId: '1:452764998055:web:681ff586821c58cb9a7e82'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
