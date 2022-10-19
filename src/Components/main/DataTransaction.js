import RevenueLogo from '../../Assets/RevenueLogo';
import ExpenseLogo from '../../Assets/ExpenseLogo';

const DUMMY_DATA = [
    {
        id: 1,
        transaction: 'Burger King',
        type: 'Expense',
        price: 35.00,
        expense: true,
        icon: <ExpenseLogo />,
    },
    {
        id: 2,
        transaction: 'Costco Gas',
        type: 'Expense',
        price: 80.00,
        expense: true,
        icon: <ExpenseLogo />,
    },
    {
        id: 3,
        transaction: 'Paypal',
        type: 'Revenue',
        price: 3400.00,
        expense: false,
        icon: <RevenueLogo />,
    },
    {
        id: 4,
        transaction: 'Skynews Mall',
        type: 'Expense',
        price: 350.00,
        expense: true,
        icon: <ExpenseLogo />,
    },
    {
        id: 5,
        transaction: 'Fiverr',
        type: 'Revenue',
        price: 250.00,
        expense: false,
        icon: <RevenueLogo />,
    }
    
];




export default DUMMY_DATA;