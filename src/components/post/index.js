import React, {useRef} from 'react';

import Header from './header';
import Image from './image';
import Actions from './actions';
import Footer from './footer';
import Comments from './comments';


export default function Post({ photoContent }) {
    const commentInput = useRef(null)
    const handleFocus=() => commentInput.current.focus();
    return <div className='rounded col-span-4 border bg-white mb-16'>
            <Header photoUsername={photoContent.username}/>
            <Image src={photoContent.imageSrc}/>
            <Actions 
                docId={photoContent.docId} 
                totalLikes={photoContent.likes.length}
                likedPhoto ={photoContent.userLikedPhoto}
                handleFocus={handleFocus} 
            />
            <Footer 
                caption={photoContent.caption} 
                username={photoContent.username}
            />
            <Comments
                docId = {photoContent.docId}
                comments = {photoContent.comments}
                posted = {photoContent.dateCreated}
                commentInput = {commentInput}
            />
            
        </div>
}
