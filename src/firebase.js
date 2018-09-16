import * as firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';


firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firebaseGoogleProvider = new firebase.auth.GoogleAuthProvider();

