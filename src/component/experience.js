import {
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow
} from "mdb-react-ui-kit";
import Project from "./project";

export default function Experience(){
    return(
    <>
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
    </>
    );
}