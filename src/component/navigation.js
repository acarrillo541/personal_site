//file: src/components/navigation.js

// add links to social media and hold navigation bar
// acting as the header of the page

import React from 'react';
import { MDBBtn, MDBContainer, MDBIcon, MDBListGroup, MDBListGroupItem, MDBNavbar } from 'mdb-react-ui-kit';

const Btn = ({type, color}) =>{
    return (
        <MDBListGroupItem noBorders>
            <MDBBtn href="http://google.com" target="_blank" floating size='lg' style={{ backgroundColor: "#dd4b39" }} >
                <MDBIcon fab icon={type}/>
            </MDBBtn>
        </MDBListGroupItem>

    );
}

const Navigation = () => {
    return(
        <MDBNavbar>
            <MDBContainer fluid>
                <MDBListGroup horizontal>
                    <Btn type="github" color="#333333"/>
                    <Btn type="google" color="#dd4b39"/>
                    <Btn type="linkedin" color="#333333"/>
                </MDBListGroup>

            </MDBContainer>
        </MDBNavbar>
    );
    
}

 
/*
<MDBBtn href="http://google.com" target="_blank" floating size='lg' style={{ backgroundColor: '#333333' }} >
          <MDBIcon fab icon='github'/>
        </MDBBtn>
        <MDBBtn floating size='lg' style={{ backgroundColor: '#dd4b39' }} >
          <MDBIcon fab icon='google'/>
        </MDBBtn>
        <MDBBtn floating size='lg' style={{ backgroundColor: '#0082ca' }} >
          <MDBIcon fab icon='linkedin'/>
        </MDBBtn>
        */
export default Navigation;