import React, { useReducer, useState } from "react";
import { Sub } from "../types";

interface FormState {
  inputValues: Sub;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const INITIAL_STATE = {
  nick: "",
  avatar: "",
  subMonths: 0,
  description: "",
}

const formReducer = (state, action) => {
  switch (action.type) {
    case "change_value": 
      const {inputName, inputValue} = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    case "clear_form":
      return INITIAL_STATE
  }
}


const Form = ({onNewSub}: FormProps) => {

  //const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE);

  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);   
    handleClear()
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setInputValues(INITIAL_STATE)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button onClick={handleClear} type="button">Clear Form</button>
        <button type="submit">Save new Sub</button>
      </form>
    </div>
  );
};

export default Form;
