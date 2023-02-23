import { MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Picture from './../files/sample.png';

const Project=()=>{
    return(
        <MDBRow >
            <MDBCol size={6}>
                <h3 className="fw-bold" style={{color:"#17252A"}}>Project Name</h3>
                <div className="d-flex align-items-start ">
                    
                    <MDBCol md={4}>
                        <div style={{whiteSpace:'pre-line', color:'#17252A'}}>
                            Date: 1/11/23{'\n'}
                            Skills:
                        </div>
                        <MDBBtn className="position-absolute bottom-0 mb-3" style={{backgroundColor:"#3AAFA9"}}>View Repo</MDBBtn>
                    </MDBCol>
                    <div className="text-black rounded-5 p-2 shadow-5-strong" style={{backgroundColor:"white"}}>
                    Lorem ipsum dolor sit amet, nam in omnes debitis. Modo corpora cotidieque in eum, semper scribentur ad qui. Latine recteque ut ius. Ex nonumes quaestio persequeris sed, ut quo option erroribus vituperata, cum minim saepe et. Vide recusabo ex pri, an ignota iudicabit sea.
                    Lorem ipsum dolor sit amet, nam in omnes debitis. Modo corpora cotidieque in eum, semper scribentur ad qui. Latine recteque ut ius. Ex nonumes quaestio persequeris sed, ut quo option erroribus vituperata, cum minim saepe et. Vide recusabo ex pri, an ignota iudicabit sea.
                    Lorem ipsum dolor sit amet, nam in omnes debitis. Modo corpora cotidieque in eum, semper scribentur ad qui. Latine recteque ut ius. Ex nonumes quaestio persequeris sed, ut quo option erroribus vituperata, cum minim saepe et. Vide recusabo ex pri, an ignota iudicabit sea.

                    </div>
                </div>
            </MDBCol>
            <MDBCol  className="p-1 d-flex align-items-center">
                <div  className="p-2 rounded-5" style={{backgroundColor:"#2B7A78"}}>
                    <img style={{width:'100%', height:'100%', objectFit:'contain'}} src={Picture} alt='Logo'/>
                </div>
            </MDBCol>
        </MDBRow>

    );
}
export default Project;
