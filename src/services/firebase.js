
import { collection, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { firebase } from "../lib/firebase";

const db = getFirestore(firebase);
const usersCollectionRef = collection(db, 'users')

export default async function doesUsernameExist(username) {
    console.log("userExits called")
    const q = query(usersCollectionRef, where('username', '==', username))
    const result = (await getDocs(q))
    return(result.docs.length > 0)
}