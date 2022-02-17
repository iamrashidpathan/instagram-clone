

import React ,{useContext, useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as ROUTES from "../constants/routes"
import FirebaseContext from '../context/firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {collection, addDoc, getFirestore} from 'firebase/firestore'
import {doesUsernameExist} from '../services/firebase';
export default function SignUp() {

    useEffect(() => {
        document.title = 'SingUp - Instagram';
        
    }, [])

    const {firebase} = useContext(FirebaseContext)
    

    const [username, setUsername] = useState("")
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [error, setError] = useState("")

    const auth = getAuth(firebase)
    const navigate = useNavigate();

    const db= getFirestore(firebase)

    const usersCollectionRef = collection(db, 'users')

    const isInValid = username ==="" || email ==="" || fullname ==="" || password ==="";

    const handleSignup = async (event)=>{
        event.preventDefault();
        //console.log(username, fullname)
        if(!doesUsernameExist(username)){
            try{
                const createdUser = await createUserWithEmailAndPassword(auth, email, password)
                
                if(createdUser != null){                
                    await updateProfile(createdUser.user, {displayName: username});
                }
    
                await addDoc(usersCollectionRef, {
                    userId: createdUser.user.uid,
                    username: username.toLowerCase(),
                    fullName: fullname,
                    emailAddress: email.toLowerCase(),
                    following:[],
                    followers:[],
                    dateCreated: Date.now(),
                })
    
    
               navigate(ROUTES.DASHBOARD) 
            }
            catch(error){
                setError(error.message)
                setEmail("")
                setFullname("")
                setPassword("")
    
            }
        }else{
            setError("This username is already taken, Please try another.")
        }
        
        
    }

    return (
        <div className="flex flex-col justify-center mx-auto items-center max-w-screen-md h-screen text-base">
            <div >
                <form onSubmit={handleSignup}>
                    <div className='flex flex-col border border-solid mb-4 px-20 pt-5'>
                        <img src="/images/logo.png" alt="instagram logo" 
                                aria-label="Enter your email address" className="mt-4 w-6/12 mb-4 mx-auto"/>
                        {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
                        <input type="text" className="w-full border-2 rounded-md px-3 py-1" 
                            placeholder='Username'
                            value={username}
                            onChange={(event)=>{
                                setUsername(event.target.value.toLocaleLowerCase())
                            }}
                        />
                        <input type="text" className="w-full border-2 rounded-md px-3 py-1 mt-1" 
                            placeholder='Full name'
                            value={fullname}
                            onChange={(event)=>{
                                setFullname(event.target.value)
                            }}
                        />
                        <input type="email" className="w-full border-2 rounded-md px-3 py-1 mt-1"             
                            placeholder='Email'
                            value={email}
                            onChange={(event)=>{
                                setEmail(event.target.value)
                            }}
                        />
                        <input type="password" className="w-full border-2 rounded-md px-3 py-1 mt-1" 
                            placeholder='Password'
                            value={password}
                            onChange={(event)=>{
                                setPassword(event.target.value)
                            }}
                        />
                        <button disabled={isInValid} 
                        className={`bg-blue-500 w-full rounded my-4 font-bold text-white h-8 ${isInValid && 'cursor-not-allowed opacity-50'}`}>Sign Up</button>
                    </div>
                    
                </form>
                
                
            </div>
            
            <div className='px-20 py-4 border border-solid'>
                Have an account? 
                <Link to={ROUTES.LOGIN}>
                    <span className='text-blue-600 font-bold px-3'> Login</span>
                </Link>
                
            </div>
        </div>
    )
}