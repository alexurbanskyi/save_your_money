import React from 'react';
import {useSelector} from "react-redux";
import './MyCosts.css'

function MyCosts(props) {
    const costs = useSelector(state => state.costs.value)
    console.log(costs)
    return (
        <div className='budget'>
            <div className='budget-title'>MY COSTS</div>
            <div className='budget-value'>{costs}</div>
        </div>
    );
}

export default MyCosts;
