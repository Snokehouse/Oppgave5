import React, { useState } from 'react';
import Button from './TodoButton';
import Modal from '../Modal';
import TodoList from './TodoList';
import CompletedList from './CompletedList';
import Title from '../Title';

// TODO: Create CompletedList and CompletedItem components (they look like TodoList and TodoItem)
// TODO: Import Modal, TodoList, CompletedList, Title

const TodosContainer = () => {
  // TODO: Set default state for show/hide "modal"
  const [modal, setModal] = useState(false);
  // TODO: Set default state for formData => {key: value, key:value}
  const [formData, setFormData] = useState({title:"", description: ""});
  // TODO: Set default state for todos
  const [todos, setTodos] = useState([]);
  // TODO: Set default state for completed todos
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = () => {
    // TODO: Add todo to todoslist (update state)
    setTodos((prev) => [{id: todos.length, created: new Date(), ...formData}, ...prev]);
    // TODO: Close modal (update state)
    setModal(!modal);
  };

  const removeTodo = (id) => {
    // TODO: Filter out todo with id
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    // TODO: Update todos with new list (update state)
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    // TODO: Find todoItem
    const todoItem = todos.filter((todo) => todo.id === id);
    // TODO: RemoveTodoItem from todos (update state)
    removeTodo(id);
    // TODO: Update completedlist with todoItem (update state)
    setCompletedTodos((prev) => [...todoItem, ...prev]);
  };

  // TODO: Use <Modal /> with necessary props to handle addTodo, formdata and modal visbility
  // TODO: Finish clickhandler on Button to be able to toggle Modal
  // TODO: Conditional render todos (<p>Ingen todos</p>) when empty and <Title /> with <TodoList /> if not empty
  // TODO: Add necessary props to Title to render "Mine todos"
  // TODO: Add necessary props to TodoList to be able to handle removeTodo, completeTodo and render todos (props drilling)
  // TODO: Add necessary props to CompletedList to be able to render completed
  // TODO: Update console.log with correct function

  return (
    <div className="todosWrapper">
      {modal &&(
        <Modal 
          addTodo={addTodo}
          setFormData={setFormData}
          formData={formData}
          setModal={setModal}
        />
      )}
      <Button
        name="New todo"
        clickHandler={() => setModal(!modal)}
      />
      {todos && todos.length < 1 ? (<p>Ingen todos</p>) : (<TodoList 
          removeTodo={removeTodo}
          todos={todos}
          completeTodo={completeTodo}
        />
      )}
      {completedTodos && completedTodos.length < 1 ? (<p>Ingen todos</p>) : (<CompletedList 
          completedTodos={completedTodos}
        />
      )}
    </div>
  );
};

export default TodosContainer;
