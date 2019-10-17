import React, { useState } from "react";
import ReactDOM from "react-dom";

export const FormCard = props => {
  return (
    <div>
      {props.team.map((team, index) => (
        <div key={team.id}>
          <h3>{team.fName}</h3>
          <h3>{team.lName}</h3>
          <h3>{team.email}</h3>
          <h3>{team.role}</h3>
        </div>
      ))}
    </div>
  );
};
