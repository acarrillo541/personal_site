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
        <h1 class='bigHeader'>Projects</h1>
            <MDBRow >
                <MDBCol md={12} >
                    <MDBListGroup className="grid gap-2" style={{backgroundColor:'transparent'}}>
                        <MDBListGroupItem className="rounded-9" style={{backgroundColor:'#DEF2F1'}}>
                            <Project/>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="rounded-9" style={{backgroundColor:'#2B7A78'}}>
                            <Project/>
                        </MDBListGroupItem>
                    </MDBListGroup>
                    
                </MDBCol>
                
            </MDBRow>
    </>
    );
}