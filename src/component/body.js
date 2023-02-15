//import React, {useState} from 'react';
import Contact from "./contact";
import Experience from "./experience";
import Home from "./home";
import "./../styles.css";

const Body = () =>{

    return(
    <>
            <div className='body-part'>
                <section className="w-75" id='Home'>
                    <Home/>
                </section>
                <section className="w-75" id='Projects'>
                    <Experience/>
                </section>
                <section className="w-100 d-flex justify-content-center" id='Contact'>
                    <Contact/>
                </section>
            </div>
    </>
);
}

export default Body;