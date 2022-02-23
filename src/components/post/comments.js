
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {formatDistance} from "date-fns"
import AddComment from "./add-comment";

export default function Comments({docId, comments, posted, commentInput}){
    console.log(docId, comments)
    //console.log(comments)
    const [allComents, setAllComents] = useState(comments)
    const [displayAllComments, setDisplayAllComments] = useState(false)
    const diplayComments = allComents.map((comm)=>(
        <div key={comm.comment}>
            <Link to={`/p/${comm.displayName}`}>
            <span className="font-bold mr-2">{comm.displayName}</span>
            </Link>
             <span>{comm.comment}</span>
        </div>    
    ))
    console.log(docId)
    return(
        <div className="ml-4 mt-2">
            {diplayComments.length >=2 && 
                <p onClick={()=>setDisplayAllComments((prev)=>!prev)} className=" text-gray-500 mb-1 cursor-pointer">
                    {displayAllComments ? <>Hide all Comments</>: <>View all {diplayComments.length} comments</>}
                </p>
            }
            {displayAllComments && diplayComments}
            {diplayComments.length < 2 && diplayComments.slice(0,2)}
            <p className="text-sm text-gray-600">
                {formatDistance(posted, new Date())} ago
            </p>
            <AddComment
                docId = {docId}
                comments= {comments}
                setAllComents={setAllComents}
                commentInput = {commentInput}
            />
        </div>
    )
}