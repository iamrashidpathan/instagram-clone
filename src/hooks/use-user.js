
import { getAuth } from "firebase/auth";
import { getFirestore, query, where, collection, getDocs } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import {getUserByUserId} from "../services/firebase"

export default function useUser() {
    const [activeUser, setActiveUser] = useState({})
    const {user} = useContext(UserContext);
    

    useEffect(()=>{
        async function getUserObjByUserId(){
            //console.log(user.uid)
            const result = await getUserByUserId(user.uid)
            //console.log(result)
            setActiveUser(result)
            //console.log(result)
        }
        if(user && user.uid){
            getUserObjByUserId()
        }
    },[user])

    //console.log(activeUser)
    return activeUser; // returns an object
}