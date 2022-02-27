
import React, { useEffect, useState } from "react";
import SuggestedProfile from "./suggested-profile";
import {getSuggestedProfiles} from "../../services/firebase"
import Skeleton from "react-loading-skeleton";

function Suggestions({userId, following, loggedInUserDocId}){

    const [suggestedProfiles, setSuggestedProfiles] = useState(null)
    console.log(following, userId)

    useEffect(()=> {
        async function suggestedProfiles(){
            const response =await getSuggestedProfiles(userId, following);
            console.log(response)
            setSuggestedProfiles(response);
        }

        if(userId){
            suggestedProfiles()
        }
            
    },[userId])





    return (
    <div className="flex flex-col">
        <p className=" text-gray-600 mt-6">Suggestions For You</p>
        {!suggestedProfiles ?
        <Skeleton count={6} height={50}/>
        :
        suggestedProfiles.map((profile)=>(
            <SuggestedProfile 
                key={profile.docId}
                username={profile.username}
                
                

            />
        )
            
        )
        
        }
        
    </div>
    )
}

export default React.memo(Suggestions)