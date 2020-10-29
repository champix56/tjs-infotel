import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Viewer.module.scss';
// import {initialState} from '../../reducer/currMemeReducer';
import store from '../../reducer/memeReducer';
const initialState = {
  meme: {
      imgId: 5, img: { id: 5, url: "react.png", w: 1200, h: 630 },
      text: { x: 20, y: 50, value: 'DEMAT BREIZH' },
  },
};
const Viewer = (props) => {
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    store.subscribe(()=>{

      setstate(store.getState().current);
    })
  }, [1]);
  return (
    <>
  {JSON.stringify(state)}
    <svg viewBox={`0 0 ${state.meme.img.w} ${state.meme.img.h}`} >
      <image xlinkHref={`/img/${state.meme.img.url}`} x="0" y={0}/>
   </svg>
   </>
  );
}
Viewer.propTypes = {
  meme: PropTypes.object.isRequired
};

Viewer.defaultProps = {};

export default Viewer;
