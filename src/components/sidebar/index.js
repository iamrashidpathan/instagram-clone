import React from "react";
import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";

export default function Sidebar(){
    const {docId, userId, following, username, fullName}= useUser();
    // const what= useUser();
    // console.log(what)

    return (
        <div >
            <div className="fixed  top-40 bg-white ml-8 mt-8">
                
                <User
                    username={username}
                    fullname={fullName}
                />
                <Suggestions 
                    userId={userId}
                    following={following}
                    loggedInUserDocId={docId}
                />
                <p className="text-sm mt-8 text-gray-400">© 2022 INSTAGRAM-CLONE FROM RASHID</p>
                
            </div>
            
        </div>
    )
}