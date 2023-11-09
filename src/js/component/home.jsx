import React from "react";
import JumbotronC from "./jumbotron.jsx";
import CardC from "./card.jsx";


const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <JumbotronC />
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-3 col-md-6 col-12 mb-4 mx-auto"><CardC /></div>
                    <div className="col-xl-3 col-md-6 col-12 mb-4 mx-auto"><CardC /></div>
                    <div className="col-xl-3 col-md-6 col-12 mb-4 mx-auto"><CardC /></div>
                    <div className="col-xl-3 col-md-6 col-12 mb-4 mx-auto"><CardC /></div>
                </div>
            </div>
        </div>
    );
};

export default Home;