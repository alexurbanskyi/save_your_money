import React from 'react';
import {useSelector} from "react-redux";
import './Budget.css'

function MyBudget(props) {
    const budget = useSelector(state => state.budget.value)
    console.log(budget)
    return (
        <div className='budget'>
            <div className='budget-title'>MY BUDGET</div>
            <div className='budget-value'>{budget}</div>
        </div>
    );
}

export default MyBudget;
