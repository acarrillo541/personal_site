import React from 'react';
import {
    MDBNavbar,
    MDBCol,
    MDBNavbarLink,
    MDBIcon,
    MDBBtn,
} from 'mdb-react-ui-kit';

const Btn = ({type, color, link}) =>{
    return (
        <MDBBtn className='mx-2' href={link} target="_blank" floating size='lg' style={{ backgroundColor: color }} >
            <MDBIcon fab icon={type}/>
        </MDBBtn>
    );
}

const Navbar=()=>{
    return(
        <>
            <MDBNavbar  style={{backgroundColor:'transparent'}}>
               <h2 style={{whiteSpace:'pre-line'}} className="fw-bolder text-white ms-4 mt-3 lh-1">
                    Alan{"\n"}Carrillo
                </h2>
                    <MDBNavbarLink>Experience</MDBNavbarLink>
                    <MDBNavbarLink>Contact Me</MDBNavbarLink>
              
                <MDBCol className='d-flex justify-content-end align-items-center' >
                    <Btn type="github" color="#333333" link="https://www.github.com/acarrillo541"/>
                    <Btn type="linkedin" color="#0082ca" link="http://www.linkedin.com"/>
                </MDBCol>
            </MDBNavbar>
        </>
    );
}
export default Navbar;

