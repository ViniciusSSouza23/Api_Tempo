import Routess  from "./routes.jsx";
import React,{Fragment} from "react";
import Footer from "../components/footer/index";
import NavBar from "../components/nav/index.jsx";
import { BrowserRouter } from "react-router-dom";


function App(){
    return(
        <BrowserRouter>
            <Fragment>
                
                <NavBar/>
                <Routess/>
                <Footer/>
            </Fragment>
        </BrowserRouter>
    );
    
}
export default App;