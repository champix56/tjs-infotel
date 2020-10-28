import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = () => (
  <div className={styles.Title} data-testid="Title">
    Meme
    <span className={styles.orange}>.</span>
    <span className={styles.endtitle}>generator</span>
  </div>
);

Title.propTypes = {};

Title.defaultProps = {};

export default Title;
