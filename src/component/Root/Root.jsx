import { Outlet } from "react-router-dom";
import Nav from "../Home/Nav";
import Footer from "../Home/Footer";

const Root = () => {
    return(
        <div className="">
            
           <Nav></Nav>
           <Outlet></Outlet>    
           <Footer></Footer>
        </div>
    )
}

export default Root;
