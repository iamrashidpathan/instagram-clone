import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useFollowedUsersPhotos from "../hooks/use-followed-users-photos";
import Post from "./post";

export default function Timeline(){
    //const photo =null
    const photos = useFollowedUsersPhotos();
    //console.log(photos)
    //const photo =[1,2,3,4,5]
    //if(photos){photos.map((i)=>(console.log(i.comments[1].comment)))}
    return (
    <div className="container col-span-2">
        {!photos ? <Skeleton count={4} width={640} height={500} className="mb-5"/>
        :  photos.map((photo) => 
            <Post key={photo.docId} photoContent={photo}/>
        ) 
    }
        
    </div>
    
    )
}