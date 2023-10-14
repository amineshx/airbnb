import React from "react";
import Star from '../imges/Star 1.png'



function Card(props) {
    let badgeText
    if (props.openSpots === 0){
        badgeText = 'Sold Out';
    } else if (props.location === "Online"){
        badgeText="ONLINE"
    }else{
        badgeText= 0
    }
    return (
        <div className="card">
            {badgeText !== 0 && <div className="card-badg">{badgeText}</div>}
            <img src={require(`../imges/${props.img}`)} className="Card-icons" alt="" />
            <div className="card--stats">
                <img src={Star} alt="" />
                <span>
                    {props.rating}
                </span>
                <span className="gray">
                    ({props.reviewCount})
                </span>
                <span className="gray">
                    {props.country}
                </span>
            </div>
            <p className="para">{props.title}</p>
            <p><span className="bold">From ${props.price} </span>per person</p>
        </div>
    )
};
export default Card 