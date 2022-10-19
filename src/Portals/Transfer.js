import React, {useState, useRef} from "react";
import Background from "./Components/Background";

import classes from './Transfer.module.css'

function Transfer(props) {
    const personName = useRef(null)
    const transferAmount = useRef(null)
    const [transferError, setTransferError] = useState('')

    function transferFunction(e) {
        e.preventDefault()
        const name = personName.current.value
        const amount = Number(transferAmount.current.value)


        if(name.trim() === '' && (!amount || amount === 0)) {
            setTransferError('Please enter a valid name and amount');
            return
        }
        if(name.trim() === '') {
            setTransferError('Please enter a valid name');
            return
        }
        if(!amount || amount === 0) {
            setTransferError('Please enter a valid amount')
        }

        props.addTransfer(name, amount)
    }

    return(
        <Background domNode='transfer' exitFunction={props.exitFunction}>
            <form onSubmit={transferFunction}>
                <div className={classes.title}>
                    <h2>Transfer Form</h2>
                    <p>Please enter the name and the amount you would like to transfer.</p>
                </div>
                <label htmlFor="name">Name:</label>
                <input ref={personName} type='text' name="name" id="name"></input>
                <label htmlFor="amount">Amount:</label>
                <input step="0.01" ref={transferAmount} type='number' id="amount" name="amount"></input>
                <button type="submit">Send transfer</button>
                <label>{transferError}</label>
            </form>
        </Background>
    )
}


export default Transfer;