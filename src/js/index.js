//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';



// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
import Navbar from "./component/nabvar.jsx";
import JumbotronC from "./component/jumbotron.jsx";
import CardC from "./component/card.jsx";
import FootC from "./component/footer.jsx";


//render your react application
//ReactDOM.render(<Navbar />,
 //document.querySelector("#app"));
 ReactDOM.render(
    <React.StrictMode>
         <Navbar />        
       <div className="container">   
       <div className="row justify-content-center">
         <JumbotronC />  
         </div>
       </div>  
       <div className="container">   
       <div className="row justify-content-center text-center">     
         <div className = "col-xl-3 col-md-6 col-12 mb-4 mx-auto"><CardC/></div>
         <div className = "col-xl-3 col-md-6 col-12 mb-4 mx-auto"><CardC/></div>
         <div className = "col-xl-3 col-md-6 col-12 mb-4 mx-auto"><CardC/></div>
         <div className = "col-xl-3 col-md-6 col-12 mb-4 mx-auto"><CardC/></div>           
        </div>     
        </div>     
      
     <FootC />
    </React.StrictMode>,
    document.querySelector("#app"));


