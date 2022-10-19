import React from "react";

import classes from './Actions.module.css'

import { CgSoftwareDownload, CgSoftwareUpload } from 'react-icons/cg'
import { MdPayment } from 'react-icons/md'

function ActionContainer(props) {
    return (
        <div className={classes['action-container']}>
           <Actions 
                icon={<CgSoftwareDownload />}
                action="Deposit"
                showFunction={props.showDeposit}
           />
           <Actions 
                icon={<CgSoftwareUpload />}
                action="Transfer"
                showFunction={props.showTransfer}
           />
            <Actions 
                icon={<MdPayment />}
                action="Pay Bills"
                showFunction={props.showPayment}
           />
        </div>
    )
}

function Actions(props) {
    return (
        <button onClick={props.showFunction} className={classes.action}>
            {props.icon}
            <h4>{props.action}</h4>
        </button>
    )
}

export default ActionContainer;