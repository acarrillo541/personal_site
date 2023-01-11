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
            <MDBNavbar className='p-4 fixed' style={{backgroundColor:'#21081a'}}>
                <MDBContainer fluid>
                    <MDBNavbarBrand className='text-white'>Alan Carrillo</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                    >
                        <MDBIcon className='text-white' icon='bars'/>
                    </MDBNavbarToggler>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}
export default Navbar;