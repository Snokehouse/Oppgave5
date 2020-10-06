import React from 'react';

// TODO: Add todo prop to show todo content from parent (TodoList)
// TODO: Add completedTodo prop handler to update state on parent
// TODO: Add removeTodo prop handler to update state on parent
// TODO: Add clickhandler on id="complete"
// TODO: Add clickhandler on id="remove"

const TodoItem = ({todo, completeTodo, removeTodo}) => (
  <article className="card">
    <header>
      <h2>{todo.title}</h2>
      <p>{todo.created.toLocaleString('no-NB')}</p>
    </header>
    <section>
      <button id="complete" onClick={() =>completeTodo(todo.id)}>Complete</button>
      <button id="remove" onClick={() =>removeTodo(todo.id)}>Remove</button>
    </section>
  </article>
);

export default TodoItem;
