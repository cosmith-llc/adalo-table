import React from "react";

function Head(props) {
    const { columns } = props;

    return (
        <thead>
        <tr>
            {columns.map((column) => (
                <th key={column.key} style={column?.styles}>{column.title}</th>
            ))}
        </tr>
        </thead>
    );
}

export default Head;