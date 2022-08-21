import React, { useEffect, useLayoutEffect, useState } from 'react';
import {useSelector} from "react-redux";
import './MyCosts.css'
import { GiCigarette } from "react-icons/gi";
import { IoBeer } from "react-icons/io5";
import { BiCoffeeTogo } from "react-icons/bi";

function MyCosts(props) {

    const [period, setPeriod]  = useState(null)
    const [periodCosts, setPeriodCosts] = useState(0)
    const [periodCostsList, setPeriodCostList] = useState(null)
    // console.log('PERIOD--->',period)
        
    const purchase = useSelector(state => state.purchase)
    // console.log('purchase ----->',purchase)

    const currentDate = (new Date()).toLocaleDateString().split('.')
    // console.log('current date --->', currentDate)

   useLayoutEffect(() =>{
        const dayCostsList = purchase.filter((elem) => elem.day === currentDate[0])
        console.log('dayCostsList ---->', dayCostsList)
        setPeriodCostList(dayCostsList);
        setPeriod('- TODAY -')
        const dayCosts = dayCostsList.reduce((acc, currentValue) => { 
            return(acc + currentValue.price*1)
        }, 0)
        setPeriodCosts(dayCosts)
   },[]); 
   
   console.log('periodCostsList --->', periodCostsList)


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
//    const categoryList = {
//     shop: ['food', 'clothing', 'cleanliness'],
//     hobby: ['fishing', 'gym'],
//     fun: ['cafe', 'birthday'],
//     transport: ['ticket'],
//     car:['fuel', 'repair'],
//     "bad habits": ['beer', 'coffee', 'cigarettes']
// }
   
    
  

   

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
            <div className='costs-category'>
                <div className='category-title'>bad habits</div>
                <div className='type-holder'>
                    <div>
                        <GiCigarette className='type-icon'/>
                        <p>123</p>
                    </div>
                    <div>
                        <IoBeer className='type-icon'/>
                    </div>
                    <div>
                        <BiCoffeeTogo className='type-icon' />
                    </div>
                </div>
                
            </div>
            
           
        </div>
    );
}

export default MyCosts;
