//import React, {useState} from 'react';
import Project from "./project";

import {
    MDBCol, MDBRow
} from 'mdb-react-ui-kit';


const Body = () =>{

    return(
        <div className='container d-flex align-items-start ' >
            <MDBCol md={2} style={{backgroundColor:"red"}}>one</MDBCol>

            <MDBCol className='text-white'>
                <h1 className='fs-1 fw-bold p-4'>Experience</h1>
                <MDBRow >
                    <MDBCol md={8} >
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/>
                    </MDBCol>
                    <MDBCol style={{backgroundColor:"green"}}>
                        hello 
                    </MDBCol>
                    

                </MDBRow>
                
            </MDBCol>

            <MDBCol md={2} style={{backgroundColor:"blue"}}>onne</MDBCol>

        </div>
    );
}

export default Body;