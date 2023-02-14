//import React, {useState} from 'react';
import Contact from "./contact";
import Experience from "./experience";
import Home from "./home";
import "./../styles.css";


const Body = () =>{

    return(
    <>
            <div className='body-part'>
                <div className="w-75">
                    <Home/>
                </div>
                <div className="w-75">
                    <Experience/>
                </div>
                <div className="w-75">
                    <Contact/>
                </div>
            </div>
    </>
);
}

export default Body;