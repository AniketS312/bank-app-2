import React from "react";

import DUMMY_DATA from "./DataTransaction";

import classes from './Transaction.module.css';

function Transaction(props) {
    return (
        <div className={classes['transaction-container']}>
        <div className={classes.title}>
                <h3>Transactions</h3>
                <span>{props.month} {props.year}</span>
            </div>
            <div className={classes['all-transactions']}>
                {DUMMY_DATA.map((data) => ( 
                    <div key={data.id} className={classes.transaction}>
                        <div className={classes.info}>
                            <div className={classes.icon}>
                                {data.icon}
                            </div>
                            <div className={classes.details}>
                                 <h4>{data.transaction}</h4>
                                 <h5>{data.type}</h5>
                            </div>
                        </div>
                         <div className={classes.price}>
                            <p>{`$${data.price.toFixed(2)}`}</p>
                        </div>
                    </div>
                ))}
             </div>
     </div>
    )
}


export default Transaction;

