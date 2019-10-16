import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export const FormCard = props => {
  return (
    <div>
      {props.data.map(data => (
        <div key={data.id}>
          <h3>{data.fName}</h3>
          <h3>{data.lName}</h3>
          <h3>{data.email}</h3>
          <h3>{data.role}</h3>
        </div>
      ))}
    </div>
  );
};
