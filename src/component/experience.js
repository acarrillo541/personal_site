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
                <MDBCol md={8} >
                    <MDBListGroup className="grid gap-2" style={{backgroundColor:'transparent'}}>
                        <MDBListGroupItem style={{backgroundColor:'#9C9C9C'}}>                     
                            <Project/>
                        </MDBListGroupItem>
                        <MDBListGroupItem  style={{backgroundColor:'white'}}>
                            <Project/>
                        </MDBListGroupItem>
                        <MDBListGroupItem style={{backgroundColor:'#2B7A78'}}>
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