import React, { useState } from 'react';

function SearchFilter() {
    const items = [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
        "Honeydew"
    ];

    const [searchTerm, setSearchTerm] = useState("");

    // Filter the list based on search input
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Search and Filter List</h2>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                ) : (
                    <li>No results found</li>
                )}
            </ul>
        </div>
    );
}

export default SearchFilter;
