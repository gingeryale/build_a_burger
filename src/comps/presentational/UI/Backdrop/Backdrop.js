import React from 'react';
import calsses from './backdrop.css'

const backdrop = (props) => (
    props.show ? <div onClick={props.clickedBG} className={calsses.Backdrop}> </div> : null
);

export default backdrop;