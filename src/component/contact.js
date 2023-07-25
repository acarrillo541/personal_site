import { MDBBtn, MDBInput , MDBTextArea, MDBIcon} from "mdb-react-ui-kit";
import React, { useState } from "react";
import "./../styles.css";

export default function Contact(){
    const [form, setForm] = useState({ 
        name:'',
        email:'',
        message:''
    });

    const handleSubmit = () =>{
        alert("hello");

    }

    const Label = ({info, logo})=>{
        return(
            <>
            <div className="w-75 rounded-4 text-white mb-3 d-flex align-items-center p-3" 
                style={{backgroundColor:"#3AAFA9", height:'55px', fontWeight:'lighter'}}>

                <MDBBtn disabled floating className="me-2 " style={{backgroundColor:'#2B7A78'}}>
                    <MDBIcon icon={logo}/>
                </MDBBtn>
                {info}
            </div>
            </>
        );
    }

    return(
    <>
        <div className="contactPage">
            <h1 className="bigHeader">Contact Me</h1>
            <div className="grid-div">
                <div className="centered-div">
                    <Label info="(xxx)xxx-xxxx" logo="phone"/>
                    <Label info="carrillo296alan@gmail.com"  logo="envelope"/>
                </div>
                <div className="verticalLine"/>
                <div>
                    <h2 className='text-white fw-bold'>Get In Touch</h2>
                    <form onSubmit={handleSubmit} method="POST" target="_blank" 
                        className="rounded-9">

                        <MDBInput label="Name"  value={form.name} className="mb-3 bg-white"
                            onChange={ e => {
                                setForm({...form, name:e.target.value});
                            }}
                        />

                       <MDBInput label="Email address" value={form.email} className="mb-3 bg-white"
                            onChange={ e => {
                                setForm({...form, email:e.target.value});
                            }}
                        />
                        <MDBTextArea label="Message" value={form.message} className="mb-3 bg-white"
                            rows={5} 
                            onChange={ e => {
                                setForm({...form, message:e.target.value});
                            }}
                        />
                        <MDBBtn className="w-100" type="submit" style={{backgroundColor:'#2B7A78'}}>Submit</MDBBtn>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}