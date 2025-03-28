import React, { useState } from 'react';

function Toggle() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"} Content
            </button>

            {isVisible && (
                <div style={{ marginTop: "10px", padding: "10px", border: "1px solid black" }}>
                    <p>This is the toggled content!</p>
                </div>
            )}
        </div>
    );
}

export default Toggle;
