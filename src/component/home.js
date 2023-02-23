import "./../styles.css";
import { useState } from "react";
import path from "./../Resume_acarrillo4.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button } from "react-bootstrap";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Home(){
    const [showBtn,setBtn] = useState(false);
    
    return(
    <>
    <div className="homePage">
        <div className="rounded-9 p-5" style={{backgroundColor:"#DEF2F1"}}>
            <p className="home-body">Hello, my name is</p>
            <h1 className="bigHeader" style={{color:'#3AAFA9'}}>Alan Carrillo.</h1>
            <h1 className="bigHeader" style={{color:'#2B7A78'}}>I build web and mobile apps.</h1>
            <p className="home-body">
                I am a software developer based out of the San Francisco Bay Area
                with a passion for making ideas come to life.
            </p>
        </div>
        <div className="d-flex justify-content-center" style={{backgroundColor:"transparent"}} 
            onMouseEnter={()=>{setBtn(true)}}
            onMouseLeave={()=>{setBtn(false)}}
        >
            <div className="page rounded-9" >
                <Document  file={path} onLoadError={console.error}  >
                    <Page   scale={0.75} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
                </Document>
            </div>
            { showBtn &&
                <Button style={{position:'absolute',alignSelf:'center'}}>hello</Button>
            }


        </div>
    </div>
    </>
    );
}