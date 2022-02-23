import React from "react";
import { getUserByUserId } from "../../services/firebase";
import {Link, Route} from 'react-router-dom'
import * as ROUTE from "../../constants/routes"


export default function Header({photoUsername}){
    
    return (
        <Link to={`/p/:${photoUsername}`}>
                <div className="flex m-6 cursor-pointer">
                    <img src={`/images/avatars/${photoUsername}.jpg`} className="border border rounded-full h-10 w-10"/>
                    <span className="m-2 ml-4 font-bold">{photoUsername}</span>
                </div>
        </Link>
        
    )
}