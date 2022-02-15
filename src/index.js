import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
//import '../public/index.css';
import {firebase, FieldValues} from "./lib/firebase"
import App from './App';
import FirebaseContext from "./context/firebase"



ReactDOM.render(
  <FirebaseContext.Provider value={{firebase, FieldValues}}>
    <App  />
  </FirebaseContext.Provider>
    
  ,
  document.getElementById('root')
);



