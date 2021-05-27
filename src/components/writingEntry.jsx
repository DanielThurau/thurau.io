import PropTypes from 'prop-types';
import React from 'react';
import Description from './description';
import * as styles from './writingEntry.module.css';

function WritingEntry({ link, imageObject, imageAlt, entryTitle, entryDescription }) {
  return (
    <div className={styles.container}>
      <a href={link} className={styles.link}>
        <img src={imageObject} className={styles.image} alt={imageAlt} />
        <h2>{entryTitle}</h2>
        <Description description={entryDescription} />
      </a>
    </div>
  );
}

WritingEntry.propTypes = {
  link: PropTypes.string,
  imageObject: PropTypes.node.isRequired,
  imageAlt: PropTypes.string.isRequired,
  entryTitle: PropTypes.string.isRequired,
  entryDescription: PropTypes.string.isRequired,
};

WritingEntry.defaultProps = {
  link: null,
};

export default WritingEntry;
