import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Form = props => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <div>
      <h3>
        {fName || "unknown"} {lName || "unknown"} is a {role} with an email of{" "}
        {email}.
      </h3>
      <form>
        <labal htmlFor="fNameInput">First Name</labal>
        <input
          onChange={e => {
            setFName(e.target.value);
          }}
          id="fNameInput"
          name="fName"
          type="text"
        />

        <labal htmlFor="lNameInput">Last Name</labal>
        <input
          onChange={e => {
            setLName(e.target.value);
          }}
          id="lNameInput"
          name="lName"
          type="text"
        />

        <labal htmlFor="emailInput">Email</labal>
        <input
          onChange={e => {
            setEmail(e.target.value);
          }}
          id="lNameInput"
          name="lName"
          type="email"
        />

        <labal htmlFor="roleInput">Role</labal>
        <select
          onChange={e => {
            setRole(e.target.value);
          }}
          id="roleSelect"
          name="role"
        >
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
