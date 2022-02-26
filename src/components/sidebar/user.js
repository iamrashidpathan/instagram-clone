import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const User = ({username, fullname})=>{
    const  DEFAULT_IMAGE_PATH= "/images/avatars/default.png"
    return (
        !username ? <Skeleton count={1} height={61} /> :
        <Link to={`/p/${username}`}>
            <div className="flex justify-left items-center">
                <img src={`/images/avatars/${username}.jpg`} 
                    className="h-16 w-16 rounded-full"
                    onError={(e)=>{
                        e.target.src=DEFAULT_IMAGE_PATH
                    }}
                />
                <div className="text-sm ml-4">
                    <p className="font-bold">{username}</p>
                    <p className="text-gray-600">{fullname}</p>
                </div>
                
            </div>
        </Link> 
        
    )   
}

export default React.memo(User)