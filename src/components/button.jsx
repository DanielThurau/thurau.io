import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './button.module.css';

function Button({ children }) {
  return (
    <button type="button" className={styles.container}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
