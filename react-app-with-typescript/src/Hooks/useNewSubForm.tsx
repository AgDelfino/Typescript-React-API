import { useReducer } from "react";
import { Sub } from "../types";

const INITIAL_STATE = {
    nick: "",
    avatar: "",
    subMonths: 0,
    description: "",
  };

interface FormState {
  inputValues: Sub;
}

type formReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear_form";
    };


const formReducer = (
  state: FormState["inputValues"],
  action: formReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "clear_form":
      return INITIAL_STATE;
    default:
      return state;
  }
};

const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE) 
}

export default useNewSubForm
