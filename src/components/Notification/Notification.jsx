import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTypse = { message: PropTypes.string.isRequired };
