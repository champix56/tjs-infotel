import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.module.scss';
import Button from '../Button/Button';
const REST_SRV_ADR = 'http://localhost:5644';

const Editor = (props) => {
  const [imgs, setimgs] = useState([]);
  useEffect(() => {
    fetch(`${REST_SRV_ADR}/imgs`)
      .then(f => f.json())
      .then(o => setimgs(o));
  }, [1]);
  return (
    <div className={styles.Editor} data-testid="Editor">
      {JSON.stringify(imgs)}
      <div>ID:{props.meme.id ? props.meme.id : 'New'}</div>
      <div style={{ textAlign: 'center' }}>Image:<br />
        <select value={props.meme.imgId} onChange={(evt) => {
          const idImageSelected= Number(evt.target.value);
          const imgFound=imgs.find((elementImage)=>elementImage.id===idImageSelected)
          props.onChangeMeme({ ...props.meme, imgId: idImageSelected,img:imgFound })
        }
        }>
          {
            imgs.map((elem, index) => <option value={elem.id} key={`img-${index}`}>{elem.url}</option>)
          }
        </select>
      </div>
      <div style={{ textAlign: 'center' }}>
        coordonnees<br />
        <div className={styles.coord}>
          X<br />
          <input type="number" min="0" step="1" value={props.meme.text.x} onChange={evt => {
            //setTextState({ ...textState, x: Number(evt.target.value) });
            props.onChangeMeme({ ...props.meme, text: { ...props.meme.text, x: Number(evt.target.value) } })
          }} />
        </div>
        <div className={styles.coord}>
          Y<br />
          <input type="number" min="0" step="1" value={props.meme.text.y} onChange={evt => {
            props.onChangeMeme({ ...props.meme, text: { ...props.meme.text, y: Number(evt.target.value) } })
          }} />
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
        <textarea value={props.meme.text.value} onChange={evt => {
          props.onChangeMeme({ ...props.meme, text: { ...props.meme.text, value: evt.target.value } })

        }}></textarea>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button text="Reset" backgroundColor="tomato"></Button>
        <Button text="Save" backgroundColor="skyblue"></Button>
      </div>
    </div >
  );
}
Editor.propTypes = {
  meme: PropTypes.object.isRequired,
  onChangeMeme: PropTypes.func.isRequired
};

Editor.defaultProps = {
  onChangeMeme: () => { }
};

export default Editor;
