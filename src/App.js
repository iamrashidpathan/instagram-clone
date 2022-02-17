import './App.css';

import React, { useEffect, useState, lazy, Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import * as ROUTES from "./constants/routes"
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';

import {firebasedb, FieldValues} from './lib/firebase';
import {collection, doc, getDocs} from 'firebase/firestore'

const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login'));
const SignUp = lazy(() => import ('./pages/signup'));
const Profile = lazy(() => import ('./pages/profile'));
const NotFound = lazy(() => import ('./pages/not-found'));


function App() {
  
  const {user} = useAuthListener();
  
  return (
    <UserContext.Provider value={{user}}>
        <div>
        
        <Router>
          <Suspense fallback = {<p>Loading</p>}>
            <Routes>
                
                <Route path={ROUTES.DASHBOARD} element={<Dashboard/>} exact></Route>
                <Route path={ROUTES.LOGIN} element={<Login/>}></Route>
                <Route path={ROUTES.PROFILE} element={<Profile/>}></Route>
                <Route path={ROUTES.SIGN_UP} element={<SignUp/>}></Route>
                <Route path={ROUTES.NOT_FOUND} element={<NotFound/>}></Route>
                <Route path="*" element={<NotFound/>}/>
                              
            </Routes>
            
          </Suspense>
        </Router>
        
      </div>
    </UserContext.Provider>
    
    
  );
}

export default App;







// const [school, setSchool]= useState([])
  

  // const usersCollectionRef = collection(firebasedb, "users");
  // const photoCollectionRef = collection(firebasedb, "photos");
  // //console.log(school)

  // useEffect(()=>{

  //   const getSchools = async() => {
  //     const data = await getDocs(photoCollectionRef);
  //     console.log(data)
  //     setSchool(data.docs.map((doc) => ({
  //       ...doc.data(), id: doc.id
  //     })))
  //   };
  //   getSchools()
  //   console.log(school)

  // },[])

//console.log(school)