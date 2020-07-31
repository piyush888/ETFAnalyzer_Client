import React from "react";

const spinnerStyle = {
  fontSize:'14px',
  
};

const Loader = () => {
  return (
    <div className="loader center">
      <i className="fa fa-spinner fa-spin" style={spinnerStyle}></i>
    </div>
  );
};

export default Loader;
