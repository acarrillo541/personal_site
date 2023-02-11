//import React, {useState} from 'react';
import Contact from "./contact";
import Experience from "./experience";
import "./../styles.css";

import {
    MDBCol, MDBRow
} from 'mdb-react-ui-kit';


const Body = () =>{

    return(
    <>
            <div class='body-part'>
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