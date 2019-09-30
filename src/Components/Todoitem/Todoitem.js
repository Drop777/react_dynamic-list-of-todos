import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todoitem.css';

const Todoitem = ({ todo }) => {
  const {
    completed, id, title, user,
  } = todo;

  return (
    <div className="todo-item">
      <p className="todo-item__id">{id}</p>
      <p className="todo-item__title">{title}</p>
      <User user={user} />
      <p>
        {completed
          ? ' \u2714'
          : ' \u2716'}
      </p>
    </div>
  );
};

Todoitem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    id: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string,
      name: PropTypes.string,
      address: PropTypes.shape({
        city: PropTypes.string,
      }),
      phone: PropTypes.string,
      website: PropTypes.string,
    }),
  }).isRequired,
};

export default Todoitem;
