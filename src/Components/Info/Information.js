import React from 'react';

import classes from './Information.module.css'

function Information(props) {

    return (
        <div className={classes.information}>
            <div className={classes.background}>
                <h5>Learn to save money<br/> with these amazing<br/> saving habits!</h5>
                <a href="https://www.google.com">Learn more today &gt;</a>
                <PhotoFilter />
            </div>
        </div>
    );
}


function PhotoFilter(props) {
    return (
    <>
    <svg width="400" className={classes.icon} height="400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#EEEEEE" fill="none" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
   <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#EEEEEE" fill="none" d="M12 2V22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z"></path>
   <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#EEEEEE" d="M21.9 10.6H12"></path>
   <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#EEEEEE" d="M19.14 5H12"></path>
   <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#EEEEEE" d="M21.07 7.79999H12"></path>
   <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#EEEEEE" d="M21.9 13.4H12"></path>
   <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#EEEEEE" d="M21.07 16.2H12"></path>
   <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#EEEEEE" d="M19.14 19H12"></path>
   </svg>
   </>
   )}


export default Information;