import Footer from "./footer";
import Navbar from "./navbar";
import Body from "./body";
import "./../styles.css";
import { useState } from "react";


const Layout = () => {
    const [currTab, setTab]=useState('Home');
    
    function handleTab(value){
        setTab(value);
    }

    return (
        <>
        <div style={{backgroundColor:'#17252A'}} >
            <Navbar currTab={currTab} changeTab={handleTab}>Hello from layout</Navbar>
            <Body currTab={currTab}/>
            <Footer/>
        </div>
        </>
    );
}
export default Layout;