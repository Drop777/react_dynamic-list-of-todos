import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todoitem.css';

const Todoitem = ({ todo }) => {
  const { id, title, user } = todo;
  console.log(todo);
  return (
    <div className="todo-item">
      <p className="todo-item__id">{id}</p>
      <p className="todo-item__title">{title}</p>
      <User user={user} />
    </div>
  );
};

Todoitem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.object,
  }).isRequired,
};

export default Todoitem;
