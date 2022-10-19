import React, { useState} from "react";
import Background from "./Components/Background";

import classes from './Deposit.module.css'

function Deposit(props) {
    const [depositerList, setDepositerList] = useState(['Select Depositor','Paypal', 'Fiverr', 'America Agency', 'New Depositor'])
    const [checkNewDepositer, setCheckNewDepositer] = useState('')
    // Map select options
    const mapDepositers = depositerList.map((depositer) => <option key={depositer} value={depositer}>{depositer.charAt(0).toUpperCase() + depositer.slice(1)}</option>)
    
    // Desable first option field - select and option attributes throw errors

    function getDepositer() {
        const selectElement = document.getElementsByTagName('select');
        setCheckNewDepositer(selectElement.depositer.value);
    }

    
    return (
        <Background domNode='deposit' exitFunction={props.exitFunction}>
            <form onSubmit={props.handleClick} className={classes['form-div']}>
                <div className={classes.title}>
                    <h2>Deposit Form</h2>
                    <p>Please enter the amount and the organization depositing the amount.</p>
                </div>
                <label htmlFor="depositer">Depositer name:</label>
                <select onChange={getDepositer} ref={props.depositerInput} id="depositer" name="depositer">
                    {mapDepositers}
                </select>
                {(checkNewDepositer === 'New Depositor') && <OptionalDepositer newDepositer={props.newDepositer}/>}
                <label htmlFor="amount">Amount:</label>
                <input step="0.01"  ref={props.amountDepositInput} type="number" id="number" name="amount"></input>
                <button type="submit">Confirm Deposit</button>
                <label>{props.depositError}</label>
            </form>
        </Background>
    );
};

function OptionalDepositer(props) {
    return (
        <React.Fragment>
            <label htmlFor="depositer">New Depositor:</label>
            <input ref={props.newDepositer} type="text" id="depositer" name="depositer"></input>
        </React.Fragment>
    )
}


export default Deposit;