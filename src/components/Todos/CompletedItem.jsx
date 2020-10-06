import React from 'react';

const CompletedItem = ({todo}) => (
    <ul>
        <li>{todo.title}</li>
        <li>{todo.description}</li>
        <li>{todo.created}</li>
    </ul>
);

export default CompletedItem;