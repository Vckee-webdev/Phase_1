import React, { useState } from 'react';

function InputField() {
    const [text, setText] = useState("");

    return (
        <div>
            <h2>Dynamic Input Field</h2>
            <input 
                type="text" 
                placeholder="Type something..." 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <p>Typed Text: {text}</p>
        </div>
    );
}

export default InputField;
