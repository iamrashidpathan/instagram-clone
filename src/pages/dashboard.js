import React, {useEffect} from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";


export default function Dashboard() {

    useEffect(()=>{
        document.title = "Instagram"
    },[])

    return (
        <div>
            <Header/>
            <div className= "grid grid-cols-3 mx-auto max-w-screen-lg">
                <Timeline/>
                <Sidebar />
            </div>
            
        </div>
    )
        
        
        
}