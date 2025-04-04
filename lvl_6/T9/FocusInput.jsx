import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null); // Create a ref for the input field

  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input field when button is clicked
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins" }}>
      <h2>Focus Input Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="sai is a good boy"
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <br />
      <button onClick={handleFocus} style={{ marginTop: "10px" }}>
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;
