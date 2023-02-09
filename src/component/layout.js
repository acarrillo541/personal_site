import Footer from "./footer";
import Navbar from "./navbar";
import Body from "./body";
import "./../styles.css";

const Layout = ({children}) => {
    return (
        <>
        <div style={{backgroundColor:'#17252A'}} >
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
        </>
    );
}
export default Layout;