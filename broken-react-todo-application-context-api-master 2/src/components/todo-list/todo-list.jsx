import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const handleDelete = (id) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    // create copy of state before mutating
    let workingCopy = [...todos]
    // find the object by id passed to function
    let targetTodo = workingCopy.find(todo => todo.id === id);
    // find the index of the item that was clicked for later mutation
    const index = todos.indexOf(targetTodo);
    // change the object checked property
    targetTodo.checked = !targetTodo.checked;
    // mutate the working copy of the object
    workingCopy[index]= targetTodo;
    // change context state
    setTodos(workingCopy);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
