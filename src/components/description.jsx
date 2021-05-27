import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './description.module.css';

function Description({ description }) {
  return (
    <p className={styles.description}>{description}</p>
  );
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
