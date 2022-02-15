import './App.css';

import React, { useEffect, useState, lazy, Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import * as ROUTES from "./constants/routes"

import {firebasedb, FieldValues} from './lib/firebase';
import {collection, doc, getDocs} from 'firebase/firestore'

const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login'));
const SignUp = lazy(() => import ('./pages/signup'));
const Profile = lazy(() => import ('./pages/profile'));
const NotFound = lazy(() => import ('./pages/not-found'));


function App() {
  
  
  return (
    <div>
      
      <Router>
        <Suspense fallback = {<p>Loading</p>}>
          <Routes>
              <Route path={ROUTES.DASHBOARD} element={<Dashboard/>} exact></Route>
              <Route path={ROUTES.LOGIN} element={<Login/>}></Route>
              <Route path={ROUTES.NOT_FOUND} element={<NotFound/>}></Route>
              <Route path={ROUTES.PROFILE} element={<Profile/>}></Route>
              <Route path={ROUTES.SIGN_UP} element={<SignUp/>}></Route>
          </Routes>
          
        </Suspense>
      </Router>
      
      
      
      
    </div>
    
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