import React from 'react';
import * as ReactDOM from 'react-dom';

import ExitLogo from '../../Assets/Exitlogo'

import classes from './Background.module.css'

const Background = (props) => {
    return ReactDOM.createPortal(
        <div className={classes.background}>
            <div className={classes['form-container']}>
            <button onClick={props.exitFunction} className={classes['exit-button']}>
                <ExitLogo />
            </button>
                {props.children}
            </div>
        </div>, document.getElementById(`${props.domNode}`)
    );
};

export default Background;