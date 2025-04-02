import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  // Function to toggle state
  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return [state, toggle];
};

export default useToggle;
