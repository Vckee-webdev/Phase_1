import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // Load stored value from localStorage (or use initialValue)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialValue;
    }
  });

  // Update localStorage when storedValue changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [key, storedValue]);

  // Function to update the value
  const setValue = (value) => {
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
