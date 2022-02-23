import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer({caption, username}){
    return(
        <div className="p-4 pt-1 pb-0">
            <Link to={`/p/${username}`}>
            <span className='font-bold mr-1'>{username}</span>
            </Link>
             <span>{caption}</span>
        </div>
    )
}