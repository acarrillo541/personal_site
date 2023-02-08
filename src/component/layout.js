import Footer from "./footer";
import Navbar from "./navbar";
import Body from "./body";
import "./../styles.css";

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <Body/>
            <Footer/>
        </>
    );
}
export default Layout;