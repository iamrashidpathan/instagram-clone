import React from "react";
import useUser from "../../hooks/use-user";

export default function Sidebar(){
    const {docId, userId, following, username, fullname}= useUser();
    //console.log(userId)
    return (
        <div>
            {username}
            <p className="text-gray-400">© 2022 INSTAGRAM-CLONE FROM RASHID</p>
        </div>
    )
}