import * as React from 'react';
import './todo-results.scss';
//import Context
import { TodosContext } from '../../todo-context';
import { useContext } from 'react';

export const TodoResults = () => {

  //define todos
  const { todos } = useContext(TodosContext);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    //return number of todos that are checked
    return todos.filter(todo => todo.checked === true).length

  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
