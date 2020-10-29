import React from 'react';
import PropTypes from 'prop-types';
import { useParams, withRouter } from 'react-router-dom';
import styles from './MainView.module.scss';

const MainView = (props) => {
  let { id } = useParams();
  const { match, location, history } = props;
  console.log(props)
  return (
    <div className={styles.MainView} data-testid="MainView">
      { JSON.stringify(match) }<br/>
      { JSON.stringify(location) }<br/>
      { JSON.stringify(history) }<br/>
      {props.children}
    </div>
  );
}

MainView.propTypes = {};

MainView.defaultProps = {};

export default withRouter(MainView);
