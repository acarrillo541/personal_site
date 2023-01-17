//import React, {useState} from 'react';
import Project from "./project";
import "../App.css"

import {
    MDBCol, MDBListGroup, MDBListGroupItem, MDBRow
} from 'mdb-react-ui-kit';


const Body = () =>{

    return(
        <div className='d-flex align-items-start ' >
            <MDBCol md={2} style={{backgroundColor:"red"}}>one</MDBCol>

            <MDBCol md={8} className='text-white'>
                <h1 className='p-4 display-3 fw-bold' >Experience</h1>
                <MDBRow >
                    <MDBCol md={8} >
                        <MDBListGroup style={{backgroundColor:'grey'}}>
                            <MDBListGroupItem className='pb-5 mb-1 ' style={{backgroundColor:'black'}}>
                                <Project/>
                            </MDBListGroupItem>
                            <MDBListGroupItem className=' mb-1' style={{backgroundColor:'black'}}>
                                <Project/>
                            </MDBListGroupItem>
                            <MDBListGroupItem className=' mb-1' style={{backgroundColor:'black'}}>
                                <Project/>
                            </MDBListGroupItem>
                        </MDBListGroup>
                        
                    </MDBCol>
                    <MDBCol style={{backgroundColor:"grey"}}>
                        hello 
                    </MDBCol>
                    

                </MDBRow>
                
            </MDBCol>

            <MDBCol md={2} style={{backgroundColor:"blue"}}>onne</MDBCol>

        </div>
    );
}

export default Body;