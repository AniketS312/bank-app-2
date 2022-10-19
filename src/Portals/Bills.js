import React, { useRef, useState } from "react";

import Background from "./Components/Background";

import classes from './Bills.module.css'

function Bills(props) {
    const [billError, setBillError] = useState(null)
    const payee = useRef(null)
    const reference = useRef(null)
    const payableAmount = useRef(null)

    function onPaymentSubmit(e) {
        e.preventDefault()
        const payeeName = payee.current.value
        const referenceNumber = reference.current.value
        const amount = Number(payableAmount.current.value)
        console.log(payeeName, referenceNumber, typeof(amount))

        if (payeeName.trim() === '' && referenceNumber.trim() === '' && amount === 0) {
            setBillError('Please provide a valid payee name, account number and amount')
            return 
        }
        if (referenceNumber.trim() === '' && amount === 0) {
            setBillError('Please provide a valid account number and amount')
            return 
        }

        if (payeeName.trim() === '' && referenceNumber.trim() === '') {
            setBillError('Please provide a valid payee name and account number')
            return
        }
        if(payeeName.trim() === '') {
            setBillError('Please provide a valid payee name')
            return
        }
        if(referenceNumber.trim() === '') {
            setBillError('Please provide a valid account number')
            return
        }
        if(amount === 0) {
            setBillError('Please enter a valid amount owing')
            return
        }
            console.log('sccess')
            props.addPaymentFunction(payeeName, referenceNumber, amount);
    }

    return (
        <Background domNode='bills' exitFunction={props.exitFunction}>
            <form onSubmit={onPaymentSubmit}>
                <div className={classes.title}>
                    <h2>Bills Amount</h2>
                    <p>Please enter the name, account number, and the amount of the bill.</p>
                </div>
                <label  htmlFor="payable-name">Payable to:</label>
                <input ref={payee} type="text" id='payable-name' name='payable-name'></input>
                <label htmlFor="reference">Account Number</label>
                <input ref={reference} type="text" id="reference" name="reference"></input>
                <label htmlFor="payable-amount">Amount:</label>
                <input ref={payableAmount} type="number" step="0.01" id="payable-amount" name="payable-amount"></input>
                <button  type="submit">Confirm Payment</button>
                <label>{billError}</label>
            </form>
        </Background>
    )
}

export default Bills;