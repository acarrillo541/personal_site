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
        <h1 className='bigHeader'>Projects</h1>
            <MDBRow >
                <MDBCol md={12} >
                    <MDBListGroup className="grid gap-2" style={{backgroundColor:'transparent'}}>
                        <MDBListGroupItem className="rounded-9" style={{backgroundColor:'#DEF2F1'}}>
                            <Project 
                                pName = "Personal Site"
                                date = "x/xx/xx"
                                link = "https://www.google.com"
                                skills = {["React JS", "HTML", "CSS", "Google Cloud Platform"]}
                                desc = "This is my personal website / portfolio! Here is where I plan on documenting and highlighting 
                                personal projects and a roadmap of my career. It is my first project created with React. Still under
                                construction and updates to come soon! "
                            />{/* end of project */}
                            

                        </MDBListGroupItem>
                        <MDBListGroupItem className="rounded-9" style={{backgroundColor:'#2B7A78'}}>
                        <Project 
                                pName = "Personal Site"
                                date = "x/xx/xx"
                                link = "https://www.google.com"
                                skills = {["React JS", "HTML", "CSS", "Google Cloud Platform"]}
                                desc = "Here is the desc of the project"
                            />{/* end of project */}
                        </MDBListGroupItem>
                    </MDBListGroup>
                    
                </MDBCol>
                
            </MDBRow>
    </>
    );
}