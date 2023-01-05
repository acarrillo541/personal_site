//file: src/components/navigation.js

// add links to social media and hold navigation bar
// acting as the header of the page

import React from 'react';
import { MDBBtn, MDBContainer, MDBIcon, MDBListGroup, MDBListGroupItem, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';

const Btn = ({type, color, link}) =>{
    return (
        <MDBListGroupItem noBorders>
            <MDBBtn href={link} target="_blank" floating size='sm' style={{ backgroundColor: color }} >
                <MDBIcon fab icon={type}/>
            </MDBBtn>
        </MDBListGroupItem>

    );
}

const Navigation = () => {
    return(
        <>
            {/* <!--Navbar-->*/}
            <MDBNavbar>
                {/* <!--Navbar container wrapper-->*/}
                <MDBContainer >
                    <MDBNavbarBrand>Alan Carrillo Personal Site</MDBNavbarBrand>
                    <MDBListGroup horizontal>
                        <Btn type="github" color="#333333" link="https://www.github.com/acarrillo541"/>
                        <Btn type="google" color="#dd4b39" link="https://www.google.com"/>
                        <Btn type="linkedin" color="#0082ca" link="http://www.linkedin.com"/>
                    </MDBListGroup>

                </MDBContainer>
            </MDBNavbar>
        </>
    );
    
}

export default Navigation;
