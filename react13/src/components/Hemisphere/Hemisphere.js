import React from "react";
import './Hemisphere.css';

const Hemisphere = ({latitude,longitude})=>{
//const Hemisphere = (props)=>{

const hemisphereConfig = {
    Northern :{
        picture : "dragons of the north",
        text : "northern"

    },
    Southern :{
        picture: "dead-south",
        text : "southern"
    }
}
    const hemisphere = latitude > 0 ? 'Northern':'Southern';
    const {text,picture} = hemisphereConfig[hemisphere]

    return(<div className={hemisphere}>
        
       
        { latitude} : { longitude} , its {text} hemisphere <b>{picture}</b></div>);
}

export default Hemisphere;