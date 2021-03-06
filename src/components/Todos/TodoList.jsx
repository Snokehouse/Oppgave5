import React from 'react';
import TodoItem from './TodoItem';

// TODO: Add prop for todo list
// TODO: Add prop for removeTodo 
// TODO: Add prop for completeTodo
// TODO: Loop todo list (todos)
// TODO: Add necessary props to <Todo /> item to be able to handle removeTodo and completeTodo (prop drilling)

const Todos = ({todos, removeTodo, completeTodo}) => <ul id="todos">
        {todos && todos.length > 0 && todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
            />
        ))}

    </ul>;

export default Todos;
