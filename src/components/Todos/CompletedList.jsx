import React from 'react';
import CompletedItem from './CompletedItem';

const CompletedList = ({completedTodos}) => <ul id="todos">
        {completedTodos && completedTodos.length > 0 && completedTodos.map((todo) => (
            <CompletedItem
                key={todo.id}
                todo={todo}
            />
        ))}

    </ul>;

export default CompletedList;
