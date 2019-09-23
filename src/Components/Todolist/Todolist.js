import React from 'react';
import './Todolist.css';
import PropTypes from 'prop-types';
import Todoitem from '../Todoitem/Todoitem';

const Todolist = ({ todoList }) => (
  <div className="todo-list">
    {todoList.map(todo => <Todoitem key={todo.id} todo={todo} />)}
  </div>
);

Todolist.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    userid: PropTypes.number,
    id: PropTypes.number,
    tittle: PropTypes.string,
    complated: PropTypes.bool,
  })).isRequired,
};

export default Todolist;
