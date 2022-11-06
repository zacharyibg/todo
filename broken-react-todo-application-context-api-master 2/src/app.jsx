import * as React from 'react';
import { TodoForm } from './components/todo-form';
import { TodoList } from './components/todo-list';
import { TodoResults } from './components/todo-results';
import { TodosContext } from './todo-context';
import './index.scss';
import { v4 } from 'uuid';

const todosTemplate = [
  {
    id: v4(),
    label: 'Fix an ability to display all tasks',
    checked: false,
  },
  {
    id: v4(),
    label: 'Fix a layout, checkboxes should be listed in a column',
    checked: false,
  },
  {
    id: v4(),
    label: 'Fix an ability to add a new task',
    checked: false,
  },
  {
    id: v4(),
    label: 'Fix an ability to toggle a task',
    checked: false,
  },
  {
    id: v4(),
    label: 'Fix an ability to delete a task',
    checked: false,
  },
  {
    id: v4(),
    label: 'Fix an ability to count completed tasks',
    checked: false,
  },
];

export const App = () => {
  //use template to initialize state
  const [todos, setTodos] = React.useState(todosTemplate);

  return (
    <div className="root">
      {/* contextProvider component available on the context instance is used to provide the context to its child components*/}
      {/* All TodoList, TodoResults, TodoForm will consume context */}
      {/* added setter - setTodos  */}
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  );
};
