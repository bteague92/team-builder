import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Form = props => {
  const [person, setPerson] = useState({
    fName: "",
    lName: "",
    email: "",
    role: ""
  });

  const setTeam = props.setTeam;

  //   const [fName, setFName] = useState("");
  //   const [lName, setLName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [role, setRole] = useState("");

  const changeHandler = e => {
    e.preventDefault();
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    setTeam([...props.team, person]);
    setPerson({ fName: "", lName: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="fNameInput">First Name: </label>
        <input
          onChange={changeHandler}
          id="fNameInput"
          name="fName"
          type="text"
          value={person.fName}
        />

        <label htmlFor="lNameInput">Last Name: </label>
        <input
          onChange={changeHandler}
          id="lNameInput"
          name="lName"
          type="text"
          value={person.lName}
        />

        <label htmlFor="emailInput">Email: </label>
        <input
          onChange={changeHandler}
          id="emailInput"
          name="email"
          type="email"
          value={person.email}
        />

        <label htmlFor="roleInput">Role: </label>
        <select
          onChange={changeHandler}
          id="roleSelect"
          name="role"
          value={person.role}
        >
          <option>select a role</option>
          <option>Front-end Engineer</option>
          <option>Back-end Engineer</option>
          <option>UI Designer</option>
          <option>IOS Developer</option>
          <option>Android Developer</option>
          <option>Data Scientist</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
};
