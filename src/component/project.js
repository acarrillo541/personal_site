import { MDBCol, MDBRow } from "mdb-react-ui-kit";

const Project=()=>{
    return(
        <>
            <h3>Project Name</h3>
            <div className="d-flex align-items-start">
                <MDBCol md={4}>
                    <MDBRow className="text-white">Date: 1/10/23 </MDBRow>
                    <MDBRow>Category:  </MDBRow>
                </MDBCol>
                <MDBCol style={{backgroundColor:"black"}}>
                Lorem ipsum dolor sit amet, nam in omnes debitis. Modo corpora cotidieque in eum, semper scribentur ad qui. Latine recteque ut ius. Ex nonumes quaestio persequeris sed, ut quo option erroribus vituperata, cum minim saepe et. Vide recusabo ex pri, an ignota iudicabit sea.
                </MDBCol>
            </div>
        </>
    );
}
export default Project;