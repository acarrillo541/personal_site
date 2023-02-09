//import React, {useState} from 'react';
import Contact from "./contact";
import Experience from "./experience";

import {
    MDBCol
} from 'mdb-react-ui-kit';


const Body = () =>{

    return(
        <div className='d-flex align-items-start '>
            <MDBCol md={2} style={{backgroundColor:"red"}}>one</MDBCol>

            <MDBCol md={8} className='text-white'>
                <Experience/>
                <Contact/>
            </MDBCol>

            <MDBCol md={2} style={{backgroundColor:"blue"}}>onne</MDBCol>

        </div>
    );
}

export default Body;