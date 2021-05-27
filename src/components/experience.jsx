import PropTypes from 'prop-types';
import React from 'react';

function Experience({ title, companyTime, description }) {
  return (
    <p>
      <b>{title}</b>
      <br />
      <em>{companyTime}</em>
      <br />
      {description}
    </p>
  );
}

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  companyTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Experience;
