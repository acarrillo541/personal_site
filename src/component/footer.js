//file: src/components/Footer.js

// add links to social media and hold Footer bar
// acting as the header of the page

import React from 'react';
import Resume from './../files/Resume_acarrillo4.pdf'
import { MDBBtn, MDBContainer, MDBIcon, MDBListGroup, MDBListGroupItem, MDBFooter} from 'mdb-react-ui-kit';

const Btn = ({type, color, link}) =>{
    return (
        <MDBListGroupItem noBorders style={{backgroundColor: 'transparent'}}>
            <MDBBtn href={link} target="_blank" floating size='md' style={{ backgroundColor: color }} >
                <MDBIcon fab icon={type}/>
            </MDBBtn>
        </MDBListGroupItem>

    );
}

const Footer = () => {
    return(
        <>
            {/* <!--Footbar-->*/}
            <MDBFooter className='p-4 fixed-bottom'>
                {/* <!--right align social media buttons-->*/}
                <MDBListGroup horizontal>
                    <MDBContainer className='d-flex justify-content-start align-items-center'>
                        <MDBBtn size='lg' style={{backgroundColor: '#dd4b39'}}
                                href={Resume} target='_blank'
                        >
                            Download Resume <MDBIcon icon='arrow-right' className='ms-2'/>
                        </MDBBtn>
                    </MDBContainer>
                    <MDBContainer className='d-flex justify-content-end'>
                        <Btn type="github" color="#333333" link="https://www.github.com/acarrillo541"/>
                        <Btn type="google" color="#dd4b39" link="https://www.google.com"/>
                        <Btn type="linkedin" color="#0082ca" link="http://www.linkedin.com"/>
                    </MDBContainer>
                </MDBListGroup>
            </MDBFooter>
        </>
    );
    
}

export default Footer;
