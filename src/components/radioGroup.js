import React from "react";
import RadioContext from "./RadioContext";


function RadioGroup({ label, children  }) {
    return (
      <fieldset>
        <legend>{label}</legend>
        {children}
      </fieldset>
    );
  }

  export default RadioGroup;