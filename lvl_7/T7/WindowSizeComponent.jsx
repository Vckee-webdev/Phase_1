import React from "react";
import useWindowResize from "./Hooks/useWindowResize";

const WindowSizeComponent = () => {
  const { width, height } = useWindowResize();

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins", padding: "20px" }}>
      <h2>Custom Hook: useWindowResize</h2>
      <p>Window Width: <strong>{width}px</strong></p>
      <p>Window Height: <strong>{height}px</strong></p>
    </div>
  );
};

export default WindowSizeComponent;
