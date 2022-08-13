import React from 'react';
import {useSelector} from "react-redux";
import './MyCosts.css'

function MyCosts(props) {
    const purchase = useSelector(state => state.purchase)
    console.log('purchase ----->',purchase)

    
    const generalCosts = purchase.reduce((acc, currentValue) => { 
        return(acc + currentValue.price*1)
    }, 0)

    console.log('generall ->>>', generalCosts)

    return (
        <div className='budget'>
            <div className='budget-title'>MY COSTS</div>
            <div className='budget-value'>{generalCosts}</div>
        </div>
    );
}

export default MyCosts;
