// NOTE: replace 'bmjpkU8bBWRse2JwKgzOGTv5tUI3' with your Firebase auth user id 
//(can be taken from Firebase at the auth section! Look for User UID)

//import firebase from "./firebase"
import {collection, addDoc} from 'firebase/firestore'


export function seedDatabase(firebasedb) {


    const usersCollectionRef = collection(firebasedb, "users");

    const photoCollectionRef = collection(firebasedb, "photos");


    const users = [
      {
        userId: '7t3CVLBnG0WOUbhJvuYwQ3fn9yZ2',
        username: 'karl',
        fullName: 'Karl Hadwen',
        emailAddress: 'karlhadwen@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'raphael',
        fullName: 'Raffaello Sanzio da Urbino',
        emailAddress: 'raphael@sanzio.com',
        following: [],
        followers: ['7t3CVLBnG0WOUbhJvuYwQ3fn9yZ2'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'dali',
        fullName: 'Salvador Dalí',
        emailAddress: 'salvador@dali.com',
        following: [],
        followers: ['7t3CVLBnG0WOUbhJvuYwQ3fn9yZ2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'orwell',
        fullName: 'George Orwell',
        emailAddress: 'george@orwell.com',
        following: [],
        followers: ['7t3CVLBnG0WOUbhJvuYwQ3fn9yZ2'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      //firebase.firestore.collection('users').add(users[k]);
      addDoc(usersCollectionRef, users[k])
    }
  
    for (let i = 1; i <= 5; ++i) {
      //firebase
        // .firestore()
        // .collection('photos')
        // .add
            addDoc ( photoCollectionRef, {
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }
  