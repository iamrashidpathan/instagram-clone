import React from 'react'

export default function Footer({caption, username}){
    return(
        <div className="p-4 pt-1 pb-0">
            <span className='font-bold mr-1'>{username}</span> <span>{caption}</span>
        </div>
    )
}