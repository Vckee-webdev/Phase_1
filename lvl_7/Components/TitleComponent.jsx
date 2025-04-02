import React, { useState } from "react";
import useDocumentTitle from "./Hooks/useDocumentTitle";

const TitleComponent = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(`Count: ${count}`);

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins", padding: "20px" }}>
      <h2>Custom Hook: useDocumentTitle</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ fontSize: "16px", padding: "8px 16px", cursor: "pointer" }}>
        Increment
      </button>
    </div>
  );
};

export default TitleComponent;
