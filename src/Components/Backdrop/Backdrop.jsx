import React from 'react';


import './backdrop.css';

const Backdrop = props => {
  return (
    <div className="backdrop" onClick={props.onClick}></div>
  );
};

export default Backdrop;

// return ReactDOM.createPortal(
//   <div className="backdrop" onClick={props.onClick}></div>,
//   document.getElementById('backdrop-hook')
// );