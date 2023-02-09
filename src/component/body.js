//import React, {useState} from 'react';
import Contact from "./contact";
import Experience from "./experience";

import {
    MDBCol, MDBRow
} from 'mdb-react-ui-kit';


const Body = () =>{

    return(
        <span className="d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center w-75" >
                <Experience/>
                <Contact/>
            </div>
        </span>
    );
}

export default Body;