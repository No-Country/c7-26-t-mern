import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

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