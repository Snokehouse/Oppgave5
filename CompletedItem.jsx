import React from 'react';

const CompletedItem = ({todo}) => (
    <div id="completed-wrapper">
        <li>{todo.title}</li>
        <li>{todo.description}</li>
        <li>{todo.created.toLocaleString('no-NB')}</li>
    </div>
);

export default CompletedItem;