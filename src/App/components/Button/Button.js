import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Button.css';
function Button(props) {
    const [clicked, setclicked] = useState(false);
    //console.log(props);
    return <div className={'Button'+((clicked)?' clicked':'')}
        style={{ backgroundColor: props.backgroundColor, color: props.color }} onClick={
                            ()=>{
                                setclicked(true);
                                setTimeout(()=>{setclicked(false)},500);
                                props.onClick();
                            }
                        }>
        {props.text}
    </div>
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
Button.defaultProps = {
    backgroundColor: 'tomato',
    color: 'white',
    onClick: () => { alert('ne plus cliquez ICI!! Merci') }
}
export default Button;