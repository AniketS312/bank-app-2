import React, { useState, useRef, useEffect } from 'react';

import './App.css';

import Navigation from './Components/Navigation/Navigation';
import Main from './Components/main/Main';
import Info from './Components/Info/Info';

import Deposit from './Portals/Deposit';
import Bills from './Portals/Bills';
import Transfer from './Portals/Transfer';


import DUMMY_DATA from './Components/main/DataTransaction';
import RevenueLogo from './Assets/RevenueLogo';
import ExpenseLogo from './Assets/ExpenseLogo';

function App() {

  // Setting up time states in case
  const time = new Date()
  const month = time.getMonth();
  const numberDay = time.getDate();
  const day = time.getDay();
  const greeting = getGreeting();
  const year = time.getFullYear();

  // Setup of Greeting in user Profile & time in Dashboard component - Navigation Component
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

  function getGreeting() {
  const hour = time.getHours()
  if(hour >= 0 && hour <= 11) {
   return 'Good Morning'
  } else if ( hour >= 12 && hour <= 18) {
   return 'Good Afternoon'
  } else {
   return 'Good Night'
  }
}

  // Setting up balance - Balance Component
  const [dummyData, setDummydata] = useState(DUMMY_DATA)
  const [balance, setBalance] = useState(0)
  const [revenue, setRevenue] = useState(0)
  const [expense, setExpense] = useState(0)


// Generate total revenue and expenses for the month - INITAL BANK BALANCE S/B 23200
useEffect(() => {
  const data = DUMMY_DATA;
  const revenue = data.filter((element) => element.expense === false);
  const monthlyRevenue = revenue.reduce((prevValue, currentValue) => prevValue + currentValue['price'], 0)
  setRevenue(monthlyRevenue)
  const expense = data.filter((element) => element.expense === true);
  const monthlyExpense = expense.reduce((prevValue, currentValue) => prevValue + currentValue['price'], 0)
  setExpense(monthlyExpense)
  setBalance(23200 + monthlyRevenue - monthlyExpense)
},[])


const totalBalance = (balance).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

// Modal triggers
const [showDepositForm, setShowDepositForm] = useState(false)
const [showBillsForm, setShowBillsForm] = useState(false)
const [showTransferForm, setShowTransferForm] = useState(false)

const showDeposit = () => setShowDepositForm(true)
const showPayment = () => setShowBillsForm(true)
const showTransfer = () => setShowTransferForm(true)


// Deposit Function
const depositerInput = useRef(null)
const amountDepositInput = useRef(null)
const newDepositer = useRef(null)
const [depositError, setDepositError] = useState('')

// ----- Main deposit function (tested to see if it will work with props)
function depositFunction(e) {
  e.preventDefault()

  const depositAmount = amountDepositInput.current.valueAsNumber;
  const depositer = depositerInput.current.value;

//  Error checking - DEPOSIT
  if(depositer === "Select Depositor" && !depositAmount) {
    setDepositError("Please select a Depositor and enter amount")
    return
  }

  if(depositer === "Select Depositor") {
    setDepositError("Please select a Depositor")
    return
  }

  if(!depositAmount || typeof depositAmount !== 'number') {
    setDepositError("Please enter a valid deposit amount.")
    return
  }
// Deposit if new depositor
  if(depositer === 'New Depositor') {
    const newDepositerInput = newDepositer.current.value;
    if(newDepositerInput === '' || newDepositerInput === null) {
      setDepositError("Please enter a valid depositor name.")
    } else {
      setDummydata([DUMMY_DATA.push({
        id: DUMMY_DATA.length + 1,
        transaction: newDepositerInput,
        type: 'Revenue',
        price: depositAmount,
        expense: false,
        icon: <RevenueLogo />,
      })])
      setShowDepositForm(false)
      setBalance(b => b + depositAmount)
      setRevenue(b => b + depositAmount)
    }
};

if(depositer !== 'New Depositor' && depositAmount >= 1) {
  setDummydata([DUMMY_DATA.push({
    id: DUMMY_DATA.length + 1,
    transaction: depositer,
    type: 'Revenue',
    price: depositAmount,
    expense: false,
    icon: <RevenueLogo />,
  })])
  setShowDepositForm(false)
  setBalance(b => b + depositAmount)
  setRevenue(b => b + depositAmount)
}
};

// ----- Payment function - form checks in Bills.js
function addPaymentFunction(payeeName, referenceNumber, amount) {
  setDummydata([dummyData.push({
    id: dummyData.length + 1,
    transaction: payeeName,
    type: 'Expense',
    price: amount,
    expense: true,
    refNumber: referenceNumber,
    icon: <ExpenseLogo />,
    })
  ]);
  setShowBillsForm(false)
  setBalance(b => b - amount)
  setExpense(b => b + amount)
};

function addTransfer(name, amount) {
  setDummydata([dummyData.push({
    id: dummyData.length + 1,
    transaction: name,
    type: 'Expense',
    price: amount,
    expense: true,
    refNumber: name,
    icon: <ExpenseLogo />,
    })
  ]);
  setShowTransferForm(false)
  setBalance(b => b - amount)
  setExpense(b => b + amount)

}

  return (
    <div className="App">
      <Navigation
      greeting={greeting}
      showDeposit={showDeposit}
      showTransfer={showTransfer}
      showPayment={showPayment}
      />
      <Main 
      dashboardTime={`Today is ${days[day]}, ${months[month]} ${numberDay} `}
      // Balance Componenet
      balance={totalBalance}
      // transaction Component
      month={months[month]}
      year={year}
      showDeposit={showDeposit}
      showTransfer={showTransfer}
      showPayment={showPayment}
      />
      <Info 
      revenue={revenue}
      expense={expense}
      />
     {showDepositForm && <Deposit 
      exitFunction={()=> setShowDepositForm(false)}
      handleClick={depositFunction}
      depositerInput={depositerInput}
      amountDepositInput={amountDepositInput}
      newDepositer={newDepositer}
      depositError={depositError}
     />}
     {showBillsForm && <Bills 
      exitFunction={() => setShowBillsForm(false)}
      addPaymentFunction={addPaymentFunction}
     />}
     {showTransferForm && <Transfer 
      exitFunction={() =>setShowTransferForm(false)}
      addTransfer={addTransfer}
     />}
    </div>
  );
}

export default App;
