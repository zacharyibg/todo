import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';
import { v4 } from 'uuid';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  // console.log(typeof todos)
  // console.log('todos', todos)

  const handleDelete = (id) => {
    // Fix an ability to delete task
    //grab by id, remove from array
    // filter() to iterate over array
    // console.log(`delete id: ${id} clicked`)
    setTodos(todos => todos.filter(todo => {
      return todo.id !== id
    }))

  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    //update state of object
    //checked = !checked
    setTodos(todos => todos.map(todo => {
      if (todo.id === id) {
        console.log('todo.id.checked', todo.id, todo.checked)
       //return map of opposite value
        return { ...todo, checked: (!todo.checked) };
      }
      return todo;
    }),
    );
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {v4() ? (
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
