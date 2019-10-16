import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Form = props => {
  const [name, setName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <form>
      <labal htmlFor="fNameInput">First Name</labal>
      <input id="fNameInput" name="fName" type="text" />

      <labal htmlFor="lNameInput">Last Name</labal>
      <input id="lNameInput" name="lName" type="text" />

      <labal htmlFor="emailInput">Role</labal>
      <input id="lNameInput" name="lName" type="email" />

      <select id="roleSelect" name="role">
        <option value="1">Front-end Engineer</option>
        <option value="2">Back-end Engineer</option>
        <option value="3">UI Designer</option>
        <option value="4">IOS Developer</option>
        <option value="5">Android Developer</option>
        <option value="6">Data Scientist</option>
      </select>

      <input type="submit" />
    </form>
  );
};
