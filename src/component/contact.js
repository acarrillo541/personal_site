import { MDBBtn, MDBCol, MDBContainer, MDBInput , MDBRow} from "mdb-react-ui-kit";
import "./../styles.css";
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
        <MDBContainer class="box">
            <h1>Contacts</h1>
            <MDBContainer class='box1'>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit} method="POST" target="_blank" 
                        className="w-50 rounded-9 p-4 bg-white">
                        <MDBInput label="Name" value={form.name} 
                            onChange={ e => {
                                setForm({...form, name:e.target.value});
                            }}
                        />
                        <MDBInput label="Email address" value={form.email}
                            onChange={ e => {
                                setForm({...form, email:e.target.value});
                            }}
                        />
                        <MDBInput label="Message" value={form.message}
                            onChange={ e => {
                                setForm({...form, message:e.target.value});
                            }}
                        />
                        <MDBBtn type="submit" >Submit</MDBBtn>
                    </form>
                    <p>{form.name}</p>
                    <p>{form.email}</p>
                    <p>{form.message}</p>
            </MDBContainer>
        </MDBContainer>
    </>
    );
}