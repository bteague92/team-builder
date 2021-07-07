import React, { useState } from "react";
import { Form } from "./Forms/Form.js";
import { FormCard } from "./Forms/FormCard.js";
import "./App.css";

function App(props) {
  const [team, setTeam] = useState([]);

  return (
    <div>
      <h1>Team</h1>
      <Form team={team} setTeam={setTeam} />
      <FormCard team={team} />
    </div>
  );
}

export default App;
