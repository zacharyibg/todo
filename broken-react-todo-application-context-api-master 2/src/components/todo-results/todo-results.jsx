import { useContext } from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {

  const { todos } = useContext(TodosContext);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks 
    return todos.filter(todo=>todo.checked === true).length;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
