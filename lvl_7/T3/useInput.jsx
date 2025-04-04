import { useState, useRef } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);

  // Function to handle input changes
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Function to clear the input field
  const clear = () => {
    setValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return { value, handleChange, clear, inputRef };
};

export default useInput;
