import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";


interface AppStates {
  subs: Sub[];
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: "Delfonos",
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    subMonths: 3,
    description: "Main Moderator",
  },
  {
    nick: "Samuel",
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
    subMonths: 2,
  },
];

function App() {
  const [subs, setSubs] = useState<AppStates["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppStates["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  });

  return (
    <div className="App">
      <h1>delfo subs</h1>
      <List subs={subs} />
      <Form/>
    </div>
  );
}

export default App;
