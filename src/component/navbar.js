import React, {useState} from 'react';
import {
    MDBNavbar,
    MDBIcon,
    MDBBtn,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
} from 'mdb-react-ui-kit';

const Btn = ({type, color, link}) =>{
    return (
        <MDBBtn className='mx-2' href={link} target="_blank" floating size='lg' style={{ backgroundColor: color }} >
            <MDBIcon fab icon={type}/>
        </MDBBtn>
    );
}



const Navbar=()=>{
    const [tab, setTab] = useState('Projects');

    const TabItem = ({label})=>{
        return(
            <MDBTabsItem>
                <MDBTabsLink className='text-white' style={{backgroundColor:'transparent'}} onClick={()=>{setTab(label);}} active={tab===label}>
                    {label}
                </MDBTabsLink>
            </MDBTabsItem>
        );
    }


    return(
        <>
            <MDBNavbar style={{backgroundColor:'transparent'}}>
                 <h2 style={{whiteSpace:'pre-line'}} 
                    className="fw-bolder text-white ms-4 mt-3 lh-1">
                    Alan{"\n"}Carrillo
                </h2>

                <div className='d-flex justify-content-end me-4' >
                    <MDBTabs>
                        <TabItem label={'Home'}/>
                        <TabItem label={'Projects'}/>
                        <TabItem label={'Contact'}/>
                    </MDBTabs>
              
                    <div className='ms-4'>
                        <Btn type="github" color="#333333" link="https://www.github.com/acarrillo541"/>
                        <Btn type="linkedin" color="#0082ca" link="http://www.linkedin.com"/>
                    </div>
                </div>
            </MDBNavbar>
        </>
    );
}
export default Navbar;

