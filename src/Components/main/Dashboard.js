import React from 'react';

import classes from './Dashboard.module.css'

import { AiTwotoneBell } from 'react-icons/ai'

function Dashboard(props) {

    return (
        <section className={classes.dashboard}>
            <div className={classes['welcome-message']}>
                <h2>Dash Board</h2>
                <span>{props.dashboardTime}</span>
             </div>
            <div className={classes['notification']}>
                <span>
                    <AiTwotoneBell />
                </span>
            </div>

        </section>
    );
}

export default Dashboard;