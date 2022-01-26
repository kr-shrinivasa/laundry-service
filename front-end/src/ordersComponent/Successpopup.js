import React from "react";

const Successpopup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        {/* <span className="close-icon" onClick={props.handleClose}>x</span> */}

        <img src="https://daks2k3a4ib2z.cloudfront.net/59efc7d72096a70001dc68e2/59f14c9b0aad1d000109a545_tick.svg" alt="tik-icon"></img>        
        {props.content}
        <button>Go to orders</button>
      </div>
    </div>
  );
};

export default Successpopup;