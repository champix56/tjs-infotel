import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainView.module.scss';

const MainView = (props) => {
  console.log(props);
  return (
  <div className={styles.MainView} data-testid="MainView">
   {props.children}
  </div>
);}

MainView.propTypes = {};

MainView.defaultProps = {};

export default MainView;
