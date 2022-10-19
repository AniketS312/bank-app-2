import React from "react";

import Chart from "./Chart";
import Information from "./Information";

import classes from './Info.module.css'

function Info(props) {
    return (
        <section className={classes.info}>
            <Chart 
            dummyData={props.dummyData}
            revenue={props.revenue}
            expense={props.expense}/>
            <Information />
        </section>
        )
};

export default Info