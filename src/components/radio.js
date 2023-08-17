import { right } from "@popperjs/core";
import React from "react";
import './radio.css';

function Radio({ children, value, name }) {
    return (
      <label style={{width:94.84}}>
        <input className="radiobtn"
          type="radio"
          value={value}
          name={name}
        />
        {children}
      </label>
    );
  }

  export default Radio;