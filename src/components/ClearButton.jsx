import React from 'react';
import './ClearButton.css';


export const ClearButton = props => (
    <div className="clearbutton-wrapper" onClick={props.handleClear}>
      {props.children}
    </div>
  );