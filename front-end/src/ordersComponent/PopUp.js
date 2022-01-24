

import "./modal.css"




import React from "react";
 
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.finaldata.map((item)=>{
          return (
            <h3>{item.name}</h3>
          )
        })}
      </div>
    </div>
  );
};
 
export default Popup;

