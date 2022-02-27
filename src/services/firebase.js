

import { async } from "@firebase/util";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import user from "../components/sidebar/user";
import { firebase } from "../lib/firebase";

const db = getFirestore(firebase);
const usersCollectionRef = collection(db, 'users')
const photosCollectionRef = collection(db, 'photos')

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



export async function getUserFollowedPhotos(userId, followingUserIds){
    //console.log(followingUserIds)
    const q =  query(photosCollectionRef, where("userId", "in", followingUserIds))
    const result = (await getDocs(q))
    //console.log(result)
    
    const userFollowedPhotos= result.docs.map((item)=>(
        {
            ...item.data(),
            docId: item.id
        }
    ))
    
    //return userFollowedPhotos
    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async (photo)=>{
            let userLikedPhoto = false;
            if(photo.likes.includes(userId)){
                userLikedPhoto = true
            }

            const user = await getUserByUserId(photo.userId);
            const username = user.username
            //console.log(username, photo, userLikedPhoto)
            return {username, ...photo, userLikedPhoto}
        })
    )

    return photosWithUserDetails
}


export async function getSuggestedProfiles(userId, following){
    let q = collection(db, 'users')
    if(following.length >0){
        q =query(usersCollectionRef, where("userId", "not-in", [...following, userId]))
    }
    else{
        q = query(usersCollectionRef, where('userId', '!=', userId))
    }

    const result = await getDocs(q)
    const profiles =result.docs.map((user)=>({
        ...user.data(),
        docId: user.id
    }))
    //console.log(profiles)
    return profiles

}