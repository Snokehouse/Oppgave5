import React from 'react';

// Modal delegates formhandling to its parent
// TODO: Add necessary props to be able to handle addTodo, setFormdata, formData, setModal

const Modal = ({addTodo, setFormData, formData, setModal}) => {

  const handleSubmit = (event) => {
    // TODO: Prevent default form handeling
    event.preventDefault();
    // TODO: Add todo
    addTodo();
  };

  // Function for handling more than one inputfield
  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  const handleClose = () => {
    setModal(false);
  } 

  // TODO: Update console.log with correct function
  // TODO: Add onChange method to input
  // TODO: Add value to input title (make input a "controlled" input)
  // TODO: Add value to input description (make input a "controlled" input)
  // TODO: Handle submitevent on form


  // **************lukke funker ikke enda*************@
  return (
    <section id="modal">
      <section className="modal_inner_wrapper">
        <header>
          <h3>New todo</h3>
          <button type="button" onClick={() => handleClose()}> 
            X
          </button> 
        </header>
        <form id="todo_form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={formData.title} onChange={updateValue} />
          <label htmlFor="description">Description</label>
          <input id="description" name="description" value={formData.description} onChange={updateValue} />
          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default Modal;
