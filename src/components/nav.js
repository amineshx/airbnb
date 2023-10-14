import React from "react";
import Airbnb from '../imges/airbnb 1.png'
import Group from '../imges/Group 77.png'

    function Nav (){
        return (
            <nav>
                <div className="Nav-top">
                    <img src={Airbnb} className="airbnblogo" />
                </div>
                <div className="Nav-buttom">
                    <img src={Group} className="Grouplogo" />
                    <h1>Online Experience</h1>
                    <p>Join unique interactive activities led by<br/> 
                    one-of-a-kind hosts—all without leaving home.
                    </p>
                </div>
            </nav>
        )
    };
    export default Nav