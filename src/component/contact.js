import { MDBBtn, MDBContainer, MDBInput , MDBTextArea} from "mdb-react-ui-kit";
import React, { useState } from "react";

export default function Contact(){
    const [form, setForm] = useState({ 
        name:'',
        email:'',
        message:''
    });

    const handleSubmit = () =>{
        alert("hello");

    }

    return(
    <>
        <MDBContainer className="box">
            <h1 className="bigHeader text-black">Contact Me</h1>
            <MDBContainer className='box1'>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit} method="POST" target="_blank" 
                        className="w-50 rounded-9 p-4 bg-light ">
                            <MDBInput label="Name" value={form.name} className="mb-3"
                                onChange={ e => {
                                    setForm({...form, name:e.target.value});
                                }}
                            />

                       <MDBInput label="Email address" value={form.email} className="mb-3"
                            onChange={ e => {
                                setForm({...form, email:e.target.value});
                            }}
                        />
                        <MDBTextArea label="Message" value={form.message} className="mb-3"
                            rows={5} 
                            onChange={ e => {
                                setForm({...form, message:e.target.value});
                            }}
                        />
                        <MDBBtn className="w-100" type="submit" >Submit</MDBBtn>
                    </form>
                    <p>{form.name}</p>
                    <p>{form.email}</p>
                    <p>{form.message}</p>
            </MDBContainer>
        </MDBContainer>
    </>
    );
}