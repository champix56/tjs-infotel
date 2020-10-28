import React from 'react';
import PropTypes from 'prop-types';
import styles from './Viewer.module.scss';

const Viewer = (props) => (
  <div className={styles.Viewer} data-testid="Viewer">
    {JSON.stringify(props.meme)}
  </div>
);

Viewer.propTypes = {
  meme:PropTypes.object.isRequired
};

Viewer.defaultProps = {};

export default Viewer;
