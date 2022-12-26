import React, { useEffect, useRef, useState } from "react";
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
  {
    nick: "Lalo",
    avatar: "https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/09/thestocks.jpg",
    subMonths: 2,
    description: "Tu vieja",
  },
];

function App() {
  const [subs, setSubs] = useState<AppStates["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppStates["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE);
    console.log(subs);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>delfo subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
