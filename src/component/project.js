import { MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Picture from './../files/sample.png';

const Project=({pName, date, link, skills, desc})=>{
    const skillList = skills.map((e)=>
        <li><div className="text-black">{e}</div></li>
    );

    return(
        <MDBRow >
            <MDBCol size={6}>
                <h3 className="fw-bold" style={{color:"#17252A"}}>{pName}</h3>
                <div className="d-flex align-items-start ">
                    
                    <MDBCol md={4}>
                        <div style={{whiteSpace:'pre-line', color:'#17252A'}}>
                            Date: {date}{'\n'}
                            Skills: 
                        </div>
                        <ul>{skillList}</ul>
                        <MDBBtn className="position-absolute bottom-0 mb-3" href={link} target = "_blank" style={{backgroundColor:"#3AAFA9"}}>View Repo</MDBBtn>
                    </MDBCol>
                    <div className="text-black rounded-5 p-2 shadow-5-strong" style={{backgroundColor:"white"}}>
                        {desc}
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
