import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  const {
    username, name, phone, website, address,
  } = user;

  return (
    <div className="user">
      <p className="user__username">
        {username}
      </p>
      <p className="user__name">
        {name}
      </p>
      <p className="user__city">
        {address.city}
      </p>
      <p className="user__phone">
        {phone}
      </p>
      <p className="user__website">
        {website}
      </p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
    }),
    phone: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

export default User;
