
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import {getUserFollowedPhotos, getUserByUserId} from "../services/firebase"

export default function useFollowedUsersPhotos(){
    const [photos, setPhotos] = useState(null)
    const {user} =useContext(UserContext)

    //console.log(user.displayName)
    useEffect(()=>{
        async function getTimelinePhotos(){
            const followingUserIds = await getUserByUserId(user.uid);
            //console.log(followingUserIds)

            if(followingUserIds && followingUserIds.following.length > 0){
                const result = await getUserFollowedPhotos(user.uid, followingUserIds.following);
                result.sort((a,b) => b.dateCreated - a.dateCreated)
                //console.log(result)
                setPhotos(result)
            }

            

            
        }

        if(user && user.uid){
            getTimelinePhotos()
        }
    }, [user])
    //console.log(photos)
    return photos

}

