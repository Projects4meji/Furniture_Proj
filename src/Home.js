import React from "react";
import './index.css';
import First from "./components/First";
import Carousel from "./childComp/Carousel";


function Home(){

    return(
        <div style={{fontFamily:"'Poppins', sans-serif"}}>
                <First/>
            <div className="py-5">
                <Carousel/>
            </div>
        </div>
    );
}

export default Home;