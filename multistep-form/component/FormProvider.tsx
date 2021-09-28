import { createContext, useReducer } from "react";
import Data from "../data/data";

const initialFormDataState = {
  steps: {},
  missingSteps: Data.steps
    .sort((a, b) => a.position - b.position)
    .map((s) => s.slug),
};

interface FormResponse {
  steps: { [key: string]: any };
}

interface FormAction {
  type: string;
  step: string;
  payload: any;
}

interface FormContextType {
  formData: any;
  dispatch: any;
}

function reducer(state: FormResponse, action: FormAction) {
  switch (action.type) {
    case "add": {
      const steps = { ...state.steps, ...{ [action.step]: action.payload } };

      const missingSteps = Data.steps
        .sort((a, b) => a.position - b.position)
        .map((s) => s.slug)
        .filter((s) => !steps[s]);
        
      return {
        steps,
        missingSteps,
      };
    }
    default:
      throw new Error();
  }
}

export const FormContext = createContext({} as FormContextType);

interface FormProviderProps {
  children: React.ReactNode;
}

export default function FormProvider({ children }: FormProviderProps) {
  const [formData, dispatch] = useReducer(reducer, initialFormDataState);

  return (
    <FormContext.Provider value={{ formData, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
