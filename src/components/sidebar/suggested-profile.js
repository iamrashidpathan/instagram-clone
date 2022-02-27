import React from "react";


export default function SuggestedProfile({username}){
    

    

    return(
       
        <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
                <img src={`/images/avatars/${username}.jpg`}
                    className="h-8 rounded-full"
                />
                <p className="ml-2">{username}</p>
            </div>
            

            <div className="ml-2 flex ">
                
                <p><button 
                    className="text-blue-400 font-bold text-sm"
                    
                >Follow</button></p>
            </div>
            
            
        </div>
        )
}