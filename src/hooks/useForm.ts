import { useState } from "react";
export interface IValues {
  [name: string]: string;
}

export function useFormHook(inputValues: IValues) {
    const [values, setValues] = useState(inputValues);
  
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const {value, name} = e.target;
      setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
  }