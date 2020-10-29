import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.module.scss';
import Button from '../Button/Button';
import store from '../../reducer/memeReducer';
import {initialState} from '../../reducer/currMemeReducer';

const Editor = (props) => {
  const [imgs, setimgs] = useState([]);
  const [meme, setmeme] = useState(initialState.meme );
  useEffect(() => {

   store.subscribe(()=>{
     console.log(store.getState());
    setimgs(store.getState().datas.imgs)
    setmeme(store.getState().current.meme)
   })
  }, [1]);
  return (
    <div className={styles.Editor} data-testid="Editor">
      {JSON.stringify(imgs)}
      <div>ID:{meme.id ? meme.id : 'New'}</div>
      <div style={{ textAlign: 'center' }}>Image:<br />
        <select value={meme.imgId} onChange={(evt) => {
          const idImageSelected= Number(evt.target.value);
          const imgFound=imgs.find((elementImage)=>elementImage.id===idImageSelected)
          // props.onChangeMeme({ ...meme, imgId: idImageSelected,img:imgFound })
          store.dispatch({type:'SET_IMG',value:imgFound})
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
          <input type="number" min="0" step="1" value={meme.text.x} onChange={evt => {
            //setTextState({ ...textState, x: Number(evt.target.value) });
            //props.onChangeMeme({ ...meme, text: { ...meme.text, x: Number(evt.target.value) } })
            store.dispatch({type:'SET_TEXT_X',value:evt.target.value})
          }} />
        </div>
        <div className={styles.coord}>
          Y<br />
          <input type="number" min="0" step="1" value={meme.text.y} onChange={evt => {
            props.onChangeMeme({ ...meme, text: { ...meme.text, y: Number(evt.target.value) } })
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
        <textarea value={meme.text.value} onChange={evt => {
          props.onChangeMeme({ ...meme, text: { ...meme.text, value: evt.target.value } })

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
  onChangeMeme: PropTypes.func.isRequired
};

Editor.defaultProps = {
  onChangeMeme: () => { }
};

export default Editor;
