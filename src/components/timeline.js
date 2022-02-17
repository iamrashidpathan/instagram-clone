import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Timeline(){
    //const photo =null
    const photo =[1,2,3,4,5]
    return (
    <div className="container col-span-2">
        {!photo ? <Skeleton count={4} width={640} height={500} className="mb-5"/>
        :  photo.map((con) => <p>I will be a photo</p>) 
    }
        
    </div>
    
    )
}