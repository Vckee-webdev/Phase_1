import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  // Function to increment the counter
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Function to reset the counter to initial value
  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
