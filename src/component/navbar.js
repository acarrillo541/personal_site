import React from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarBrand,
} from 'mdb-react-ui-kit';

const Navbar=()=>{
    return(
        <>
            <MDBNavbar className='p-4 fixed' style={{backgroundColor:'transparent'}}>
                <MDBContainer fluid>
                    <MDBNavbarBrand className='text-white fw-bold fs-3'>Alan Carrillo</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                    >
                        <MDBIcon  size='lg' className='text-white' icon='bars'/>
                    </MDBNavbarToggler>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}
export default Navbar;

