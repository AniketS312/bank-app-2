import React from "react";

import classes from './Balance.module.css';
import VoiceNote from  '../../Assets/VoiceNote';

function Balance(props) {

    return (
        <div className={classes.container}>
            <span>Your Balance</span>
            <h3>{props.balance}</h3>
            <span>**** **** **** 1789</span>
            <VoiceNote 
            class={classes.asset}/>
        </div>
    )
}


export default Balance;