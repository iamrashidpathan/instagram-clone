
// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


import {initializeApp} from 'firebase/app'
// import {getFirestore} from '@firebase/firestore'
// import { seedDatabase } from './seed';

const firebaseConfig = {
  //CREDS
};

const firebase =initializeApp(firebaseConfig);
const {FieldValues} = window.firebase.firestore;

//const firebasedb = getFirestore(firebase)

//seedDatabase(firebasedb)

export {firebase, FieldValues}
//const db = getFirestore(app)
//console.log(db)