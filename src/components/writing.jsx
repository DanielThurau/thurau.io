import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './writing.module.css';

function Writing({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

Writing.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Writing;
