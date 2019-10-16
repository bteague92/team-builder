import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export const Form = props => {
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    role: ""
  });

  //   const [fName, setFName] = useState("");
  //   const [lName, setLName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [role, setRole] = useState("");

  const changeHandler = e => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    setData({ fName: "", lName: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="fNameInput">First Name</label>
        <input
          onChange={changeHandler}
          id="fNameInput"
          name="fName"
          type="text"
          value={data.fName}
        />

        <label htmlFor="lNameInput">Last Name</label>
        <input
          onChange={changeHandler}
          id="lNameInput"
          name="lName"
          type="text"
          value={data.lName}
        />

        <label htmlFor="emailInput">Email</label>
        <input
          onChange={changeHandler}
          id="emailInput"
          name="email"
          type="email"
          value={data.email}
        />

        <label htmlFor="roleInput">Role</label>
        <select onChange={changeHandler} id="roleSelect" name="role">
          <option value="Front-end Engineer">Front-end Engineer</option>
          <option value="Back-end Engineer">Back-end Engineer</option>
          <option value="UI Designer">UI Designer</option>
          <option value="IOS Developer">IOS Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Data Scientist">Data Scientist</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
};
