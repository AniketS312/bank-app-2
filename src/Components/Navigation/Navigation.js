import React from "react";
import classes from './Navigation.module.css'
import Logo from '../../Assets/bank-logo.png'

function Navigation(props) {
// Setup of menu options 
    const menuItems = [{
        menu: 'Deposit',
        onClickFunction: props.showDeposit
    },
    {
        menu: 'Transfer',
        onClickFunction: props.showTransfer
    },
    {
        menu: 'Pay Bills',
        onClickFunction: props.showPayment
    }]
    const mappedMenu = menuItems.map(item => <li key={item.menu}><button onClick={item.onClickFunction}>{item.menu}</button></li>)
// End of menu options 

// Clear Dummy Data

    return (
        <nav className={classes.nav}>
            {/* Logo */}
            <div className={classes['logo-section']}>
                <img src={Logo} alt="Company Logo"/>
                <span>Better Bank</span>
            </div>
            {/* End of Logo */}
            {/* Menu/Navigation */}
            <div className={classes.navigation}>
                <span>Manage</span>
                <ul>
                    {mappedMenu}
                </ul>
                <span>Preferences</span>
            </div>
            {/* End of Menu/Navigation */}
            {/* Profile Settings */}
            <div className={classes.user}>
            <User />
                <span>
                    <p>Heather Locklear</p>
                    <p>{props.greeting}</p>
                </span>
            </div>
            {/* End of Profile Settings */}
        </nav>
        )
};


const User = () => {
    return (       
        <svg className={classes['user-logo']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g id="User">
            <g>
            <path  d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"/>
            <path  d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"/>
            </g>
        </g>
        </svg>
    )
}
export default Navigation