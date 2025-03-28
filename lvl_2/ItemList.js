import React from 'react';

function ItemList() {
    const items = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

    return (
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
