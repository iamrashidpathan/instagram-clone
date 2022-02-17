
import { async } from "@firebase/util";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { firebase } from "../lib/firebase";

const db = getFirestore(firebase);
const usersCollectionRef = collection(db, 'users')

export async function doesUsernameExist(username) {
    //console.log("userExits called")
    const q = query(usersCollectionRef, where('username', '==', username))
    const result = (await getDocs(q))
    return(result.docs.length > 0)
}

export async function getUserByUserId(userId){
    const q =  query(usersCollectionRef, where("userId", "==", userId))
    const result = (await getDocs(q))
    //console.log(result.docs[0].data())
    const user = result.docs.map((item)=>({
        ...item.data(),
        docId: item.id
    }))

    return user[0]

}