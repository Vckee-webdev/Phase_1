import React, { useState } from 'react';

function FormComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevents page reload
        console.log("Form Submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        setName("");  // Reset input fields
        setEmail("");
    };

    return (
        <div>
            <h2>Form Submission Example</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </label>
                <br /><br />
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormComponent;
