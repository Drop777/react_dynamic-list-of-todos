import React from 'react';
import './Todolist.css';
import PropTypes from 'prop-types';
import Todoitem from '../Todoitem/Todoitem';

const Todolist = ({
  todoList,
  sortByTitle,
  isLoaded,
  sortByUser,
  sortByCompleted,
}) => (
  <div>
    {isLoaded && (
      <div className="buttons-sort">
        <button
          type="button"
          onClick={() => sortByTitle(todoList)}
        >
        Sort by title
        </button>
        <button
          type="button"
          onClick={() => sortByUser(todoList)}
        >
        Sort by Name
        </button>
        <button
          type="button"
          onClick={() => sortByCompleted(todoList)}
        >
        Completed
        </button>
      </div>
    )}
    <div className="todo-list">
      {todoList.map(todo => <Todoitem key={todo.id} todo={todo} />)}
    </div>
  </div>
);

Todolist.propTypes = {
  sortByTitle: PropTypes.func,
  todoList: PropTypes.arrayOf(PropTypes.shape({
    userid: PropTypes.number,
    id: PropTypes.number,
    tittle: PropTypes.string,
    complated: PropTypes.bool,
  })),
}.isRequired;

export default Todolist;
