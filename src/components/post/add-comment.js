
import { arrayUnion, update, doc, getFirestore, updateDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

export default function AddComment({docId, comments, setAllComents, commentInput}){
    const [newComment, setNewComment] = useState('')
    const {firebase, FieldValue} = useContext(FirebaseContext)
    const {user} = useContext(UserContext)
    const db = getFirestore(firebase)
    //const photoRef = doc(db, 'photos', docId)
    //console.log(user.displayName)
    //console.log(docId, comments)


    function handleInputChange(e){
        //console.log(newComment.length)
        //console.log(e.target.value)
        //
        setNewComment(e.target.value)
        
    
    }

    async function handlePost(){
        //console.log(docId)
        const photoRef = doc(db, "photos", docId)
        //console.log(photoRef)
        setAllComents([...comments, {comment: newComment, displayName: user.displayName}])
        await updateDoc(photoRef, {
            comments: arrayUnion({
                comment: newComment,
                displayName: user.displayName
            })
        })
        
        setNewComment('')
    }


    return (
        <div className="flex justify-between mr-4 items-center">
            <input 
            onChange={handleInputChange}
            className="rounded-lg h-8 w-full mr-2 py-5 px-4"
            type="text" placeholder="Add a comment..."
            value={newComment}
            autoComplete="off"
            ref={commentInput}
            />
            <span 
            onClick={handlePost}
            className={newComment.length>0 ? `text-sky-1000 font-bold cursor-pointer`
            : 
            `text-gray-500 cursor-default` }>
                Post
            </span>
        </div>
    )
}