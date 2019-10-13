import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyAF-pQkVmyW2KVSZIfUdSJOLKvIHVuxt_g',
	authDomain: 'social-animals-9a787.firebaseapp.com',
	databaseURL: 'https://social-animals-9a787.firebaseio.com',
	projectId: 'social-animals-9a787',
	storageBucket: 'social-animals-9a787.appspot.com',
	messagingSenderId: '148086343658',
	appId: '1:148086343658:web:2f8c9ca85f02c231429493'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
