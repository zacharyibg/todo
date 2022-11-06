import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

import { v4 } from 'uuid';


export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');


  //handleAddToDo
  const handleAddTodo = () => {
    console.log('Add task clicked');
    console.log('Text input value:', task);
    // console.log(typeof task);
    // e.preventDefault();

    //add task to todoList
    setTodos([...todos,
    {
      id: v4(),
      label: task,
      checked: false
    }])

    //clears out input after task added
    setTask('');
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
