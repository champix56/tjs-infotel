import React from 'react';
import PropTypes from 'prop-types';
import styles from './MiniViewer.module.scss';


const MiniViewer = (props) => (
  <svg viewBox={`0 0 ${props.meme.img.w} ${props.meme.img.h}`} >
    <image xlinkHref={`/img/${props.meme.img.url}`} x="0" y={0} />
    <text x={props.meme.text.x} y={props.meme.text.y + 20} style={{ fill: 'cyan', fontSize: 25 }}>{props.meme.text.value}</text>
  </svg>
);

MiniViewer.propTypes = {};

MiniViewer.defaultProps = {};

export default MiniViewer;
