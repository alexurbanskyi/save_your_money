import React, { useLayoutEffect, useState } from 'react';
import {useSelector} from "react-redux";
import './MyCosts.css'

function MyCosts(props) {

    const [period, setPeriod]  = useState(null)
    const [periodCosts, setPeriodCosts] = useState(0)
    console.log('PERIOD--->',period)
        
    const purchase = useSelector(state => state.purchase)
    console.log('purchase ----->',purchase)

    const currentDate = (new Date()).toLocaleDateString().split('.')
    console.log('current date --->', currentDate)

   useLayoutEffect(() =>{
        const dayCostsList = purchase.filter((elem) => elem.day === currentDate[0])
        setPeriod('- TODAY -')
        const dayCosts = dayCostsList.reduce((acc, currentValue) => { 
            return(acc + currentValue.price*1)
        }, 0)
        setPeriodCosts(dayCosts)
   },[]); 
   

   const todayCosts = () => {
        const dayCostsList = purchase.filter((elem) => elem.day === currentDate[0])
        const dayCosts = dayCostsList.reduce((acc, currentValue) => { 
            return(acc + currentValue.price*1)
        }, 0)
        setPeriodCosts(dayCosts)
        setPeriod('- TODAY -')
   }

   const allTime = () => {
        const allTimeCosts = purchase.reduce((acc, currentValue) => { 
            return(acc + currentValue.price*1)
        }, 0)
        setPeriod('- ALL TIME -')
        setPeriodCosts(allTimeCosts)
   }
   
    
  

   

    return (
        <div className='costs'>
            <div className='costs-title'>MY COSTS</div>
            <div className='period'>{period}</div>
            <div className='costs-value'>{periodCosts}</div>
            <div className='btn-holder'>
                <button className='btn-period' onClick={todayCosts}>today</button>
                <button className='btn-period'>chosen date</button>
                <button className='btn-period'>month</button>
                <button className='btn-period' onClick={allTime}>all time</button>
            </div>
            
           
        </div>
    );
}

export default MyCosts;
