import React from 'react';
import CompletedItem from './CompletedItem';

// TODO: Add prop for todo list
// TODO: Add prop for removeTodo 
// TODO: Add prop for completeTodo
// TODO: Loop todo list (todos)
// TODO: Add necessary props to <Todo /> item to be able to handle removeTodo and completeTodo (prop drilling)

const CompletedList = ({completedTodos}) => <ul id="todos">
        {completedTodos && completedTodos.length > 0 && completedTodos.map((todo) => (
            <CompletedItem
                key={todo.id}
                todo={todo}
            />
        ))}

    </ul>;

export default CompletedList;
