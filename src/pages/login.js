
import React, {useContext, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes"
import FirebaseContext from "../context/firebase"

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    getAuth
  } from "firebase/auth";

export default function Login() {

    
    
    useEffect(() => {
        document.title = 'Login - Instagram';
        
    }, [])

    const {firebase} = useContext(FirebaseContext)

    const auth = getAuth(firebase);

    const navigate = useNavigate ();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    let isInValid = email ==="" || password ===""

    
    const handleLogin = async (event) => {
        event.preventDefault();
        try{
            
            await signInWithEmailAndPassword(auth, email, password);
            navigate(ROUTES.DASHBOARD)

        }
        catch(error){
            setEmail('');
            setPassword('');
            setError(error.message);
        }
        
    }


    return (
        <div className="flex mx-auto items-center max-w-screen-md h-screen">
            <div className="w-3/5">
                <img src= "/images/iphone-with-profile.jpg" tag = "iPhone with Instagram app"/>
            </div>
            
            <div className="w-2/5 px-8 ml-2 border">
                <div>
                    
                    <img src="/images/logo.png" alt="instagram logo" 
                        aria-label="Enter your email address" className="mt-4 w-6/12 mb-4 mx-auto"/>
                    
                    {error && <p>{error}</p>}
                    
                    <form onSubmit={handleLogin} method="POST">
                        <input className="w-full border-2 rounded-md px-3 py-1" 
                            type="text" placeholder="Email address" onChange={(e)=> setEmail(e.target.value)}
                            value={email}
                            />
                        
                        <input className="w-full border-2 rounded-md mt-1 px-3 py-1" 
                            type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}
                            value={password}
                            />
                        
                        <button disabled={isInValid} className={`bg-blue-500 w-full rounded mt-2 font-bold text-white h-8 ${isInValid && 'cursor-not-allowed opacity-50'}`}>
                            Log in
                        </button>
                    </form>    
                </div>
                
                <div className="w-full text-sm mt-10 ml-4 text-sky-400 ">
                    <span>Don't have an account? </span> 
                    <Link to={ROUTES.SIGN_UP}>
                        <span className="text-blue-600 font-bold">Sign Up</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}