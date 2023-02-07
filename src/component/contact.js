import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import "./../styles.css";
import React, { useState } from "react";

export default function Contact(){
    

    return(
    <>
        <h1>Contacts</h1>
        <MDBContainer className="bg-dark">
            <h2>Get In Touch</h2>
            <form>
                <MDBInput label="Name" />
                <MDBInput label="Email address"/>
                <MDBInput label="Message"/>
            </form>


        </MDBContainer>
    </>
    );
}