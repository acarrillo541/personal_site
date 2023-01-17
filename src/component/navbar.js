import React from 'react';
import {
    MDBNavbar,
    MDBCol,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarLink,
    MDBIcon,
    MDBBtn
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
            <MDBNavbar className='p-4 fixed' style={{backgroundColor:'transparent'}}>
                <MDBContainer fluid >
                    <MDBCol className='d-flex justify-content-start align-items-center' >
                        <MDBNavbarBrand className='text-white fw-bold fs-3'>Alan Carrillo</MDBNavbarBrand>
                        <MDBNavbarLink>Work</MDBNavbarLink>
                        <MDBNavbarLink>About</MDBNavbarLink>
                        <MDBNavbarLink>Contact</MDBNavbarLink>
                    </MDBCol>
                    <MDBCol className='d-flex justify-content-end align-items-center' >
                        <Btn type="github" color="#333333" link="https://www.github.com/acarrillo541"/>
                        <Btn type="linkedin" color="#0082ca" link="http://www.linkedin.com"/>
                    </MDBCol>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}
export default Navbar;

