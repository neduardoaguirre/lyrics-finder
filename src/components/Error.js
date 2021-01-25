import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
  <div className="alert alert-danger text-center p-2">{message}</div>
);

Error.proprTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
