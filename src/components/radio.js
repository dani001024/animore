import { right } from "@popperjs/core";
import React from "react";
import './radio.css';

function Radio({ children, value, name, defaultChecked, disabled }) {
    return (
      <label>
        <input className="radiobtn"
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
        />
        {children}
      </label>
    );
  }

  export default Radio;