import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.module.scss';
import Button from '../Button/Button';

const Editor = (props) => (
  <div className={styles.Editor} data-testid="Editor">
    <div>ID:{props.meme && props.meme.id}</div>
    <div style={{ textAlign: 'center' }}>Image:<br />
      <select></select>
    </div>
    <div style={{ textAlign: 'center' }}>
      coordonnees<br />
      <div className={styles.coord}>
        X<br />
        <input type="number" min="0" step="1" />
      </div>
      <div className={styles.coord}>
        Y<br />
        <input type="number" min="0" step="1" />
      </div>
    </div>
    <hr />
    <div style={{ textAlign: 'center' }}>
      Options<br />
      <div className={styles.coord}>
        Color<br />
        <input type="color" />
      </div>
      <div className={styles.coord}>
        font-size<br />
        <input type="number" min="0" step="1" />
      </div>
    </div>
    <hr />
    <div style={{ textAlign: 'center' }}>
      Text :<br />
      <textarea></textarea>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Button text="Reset" backgroundColor="tomato"></Button>
      <Button text="Save" backgroundColor="skyblue"></Button>
    </div>
  </div>
);

Editor.propTypes = {
  meme: PropTypes.object.isRequired
};

Editor.defaultProps = {};

export default Editor;
