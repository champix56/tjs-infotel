import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThumbailLayout.module.scss';
const ThumbailLayout = (props) => {
  return (
  <div className={styles.ThumbailLayout} data-testid="ThumbailLayout">
    {props.children}
  </div>
);}

ThumbailLayout.propTypes = {};

ThumbailLayout.defaultProps = {};

export default ThumbailLayout;
