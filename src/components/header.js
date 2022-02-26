
import { getAuth, signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes"
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import useUser from "../hooks/use-user"

function Header(){
    const {firebase} = useContext(FirebaseContext)
    const {user} = useContext(UserContext)
    //const activeUser = useUser()
    
    user && console.log(user.displayName)

    const auth = getAuth(firebase)
    const navigate = useNavigate()
    async function handleSignOut(){
        //console.log("Out")
        try{
            //console.log(auth)
            await signOut(auth).then(console.log("I am out"))
            navigate(ROUTES.LOGIN)

        }
        catch(error){
            console.log(error.message)
        }
    }

    return (
        <header className="border-b border-solid flex justify-around items-center sticky top-0 bg-white">
            <h1>
                <Link to={ROUTES.DASHBOARD}>
                    <img src = "/images/logo.png" alt="Instagram" className="my-5 h-8"/>
                </Link>
            </h1>

            {user ? 

                <div className="flex flex-row mt-2 items-center">

                    <Link to ={ROUTES.DASHBOARD}> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg> 
                    </Link>
                                  
                    
                    <button 
                    onClick={handleSignOut}
                    className="mx-4 px-2 rounded-sm font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                    <Link to ={ROUTES.PROFILE}> 
                        <img className="border border rounded-full h-8 w-8" src={`/images/avatars/${user.displayName}.jpg`}/>
                    </Link>
                    
                </div> :
                        
            <div className="flex flex-row">
          
                <Link to={ROUTES.LOGIN}>
                    <button className="mx-4 bg-blue-500 px-4 pb-1 rounded-sm text-white font-bold">Log in</button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                    <button className="font-bold">Sign up</button>
                </Link>
                      
            </div>             
            
            
            
            
            }

        </header>
        
    )
}

export default React.memo (Header)
