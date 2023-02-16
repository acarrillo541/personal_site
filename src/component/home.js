import "./../styles.css";

export default function Home(){
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
    </div>
    </>
    );
}