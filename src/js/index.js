import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./component/nabvar.jsx";
import Home from "./component/home.jsx";
import FootC from "./component/footer.jsx";


//render your react application
ReactDOM.render(<>
                 <Navbar />
                 <Home />
                 <FootC />
                 </>,
    document.querySelector("#app")
               )






