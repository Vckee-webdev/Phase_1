import React from 'react';

function ListWithKeys() {
    const fruits = [
        { id: 101, name: "Apple" },
        { id: 102, name: "Banana" },
        { id: 103, name: "Cherry" },
        { id: 104, name: "Date" },
        { id: 105, name: "Elderberry" }
    ];

    return (
        <div>
            <h2>Fruits List</h2>
            <ul>
                {fruits.map(fruit => (
                    <li key={fruit.id}>{fruit.name}</li> // Using 'id' as a unique key
                ))}
            </ul>
        </div>
    );
}

export default ListWithKeys;
