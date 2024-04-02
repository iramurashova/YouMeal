import { useState } from "react";

export function useFormHook(inputValues={}) {
    const [values, setValues] = useState(inputValues);
  
    const handleChange = (e) => {
      const {value, name} = e.target;
      setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
  }