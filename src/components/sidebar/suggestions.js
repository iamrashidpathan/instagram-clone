import React from "react";
import SuggestedProfile from "./suggested-profile";

function Suggestions(){
    return (
    <div className="flex flex-col">
        <p className=" text-gray-600 mt-6">Suggestions For You</p>
        
        <SuggestedProfile/>
    </div>
    )
}

export default React.memo(Suggestions)