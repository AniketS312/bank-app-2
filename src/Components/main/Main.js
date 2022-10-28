import React from "react";
import Balance from "./Balance";
import Dashboard from "./Dashboard";
import Transaction from "./Transaction";
import ActionContainer from './Actions'

import classes from './Main.module.css'

function Main(props) {
    return (
        <main className={classes.main}>
               <Dashboard 
                    dashboardTime={props.dashboardTime}
               />
               <Balance 
               balance={props.balance}/>
               <ActionContainer 
               showDeposit={props.showDeposit}
               showPayment={props.showPayment}
               showTransfer={props.showTransfer}
               />
               <Transaction 
               month={props.month}
               year={props.year}/>
        </main>
        )
};

export default Main