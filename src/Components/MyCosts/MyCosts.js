import React, { useEffect, useLayoutEffect, useState } from 'react';
import {useSelector} from "react-redux";
import './MyCosts.css'
import { categoryList } from '../../Constants/categoryList';
import { GiCigarette } from "react-icons/gi";
import { IoBeer , IoShirt } from "react-icons/io5";
import { BiCoffeeTogo } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { GiVacuumCleaner, GiArmoredPants } from "react-icons/gi";

function MyCosts(props) {

    const [period, setPeriod]  = useState(null)
    const [periodCosts, setPeriodCosts] = useState(0)
    const [periodCostsList, setPeriodCostList] = useState(null)
    const [typeValue, setTypeValue] = useState({});
    // console.log('PERIOD--->',period)
        
    const purchase = useSelector(state => state.purchase)
    // console.log('purchase ----->',purchase)

    const currentDate = (new Date()).toLocaleDateString().split('.')
    // console.log('current date --->', currentDate)

    // const categoryList = {
    //     shop: ['food', 'clothing', 'cleanliness'],
    //     hobby: ['fishing', 'gym'],
    //     fun: ['cafe', 'birthday'],
    //     transport: ['ticket'],
    //     car:['fuel', 'repair'],
    //     "bad habits": ['beer', 'coffee', 'cigarettes']
    // }

    const allPurchesType = [];
    Object.values(categoryList).map((i)=> allPurchesType.push(...i))

    function valueCоunter(list){
        const valueObject = {};
        allPurchesType.map((type) => valueObject[type] = list.filter((el) => el.type === type).reduce((acc, currentValue) => { 
            return(acc + currentValue.price*1)
        }, 0))
        setTypeValue(valueObject)
    }

    console.log('typeValue --->', typeValue)  
    
  
    

   useLayoutEffect(() =>{
        const dayCostsList = purchase.filter((elem) => elem.day === currentDate[0])
         console.log('dayCostsList ---->', dayCostsList)
        setPeriodCostList(dayCostsList);
        setPeriod('today')
        const dayCosts = dayCostsList.reduce((acc, currentValue) => { 
            return(acc + currentValue.price*1)
        }, 0)
        setPeriodCosts(dayCosts)
        valueCоunter(dayCostsList)
   },[]); 
   
   const todayCosts = () => {
        const dayCostsList = purchase.filter((elem) => elem.day === currentDate[0])
        const dayCosts = dayCostsList.reduce((acc, currentValue) => { 
            return(acc + currentValue.price*1)
        }, 0)
        setPeriodCosts(dayCosts)
        setPeriod('today')
        valueCоunter(dayCostsList)
   }

   const allTime = () => {
        const allTimeCosts = purchase.reduce((acc, currentValue) => { 
            return(acc + currentValue.price*1)
        }, 0)
        setPeriodCosts(allTimeCosts)
        setPeriod('all time')
        valueCоunter(purchase)
   }

    return (
        <div className='costs'>
            <div className='costs-title'>MY COSTS</div>
            <div className='period'>- {period} -</div>
            <div className='costs-value'>{periodCosts}</div>
            <div className='btn-holder'>
                <button className='btn-period' onClick={todayCosts}>today</button>
                <button className='btn-period'>chosen date</button>
                <button className='btn-period'>month</button>
                <button className='btn-period' onClick={allTime}>all time</button>
            </div>
            <div className='costs-category'>
                <div className='category-title'>- bad habits -</div>
                <div className='type-holder'>
                    <div className='type-item'>
                        <GiCigarette className='type-icon'/>
                        <p className='type-value'>{typeValue.cigarettes}</p>
                    </div>
                    <div className='type-item'>
                        <IoBeer className='type-icon'/>
                        <p className='type-value'>{typeValue.beer}</p>
                    </div>
                    <div className='type-item'>
                        <BiCoffeeTogo className='type-icon' />
                        <p className='type-value'>{typeValue.coffee}</p>
                    </div>
                    
                </div>
                <div className='category-title'>- shop -</div>
                <div className='type-holder'>
                    <div className='type-item'>
                            <TiShoppingCart className='type-icon' />
                            <p className='type-value'>{typeValue.food}</p>
                    </div>
                    <div className='type-item'>
                            <IoShirt className='type-icon' />
                            <p className='type-value'>{typeValue.clothing}</p>
                    </div>
                    <div className='type-item'>
                            <GiVacuumCleaner className='type-icon' />
                            <p className='type-value'>{typeValue.cleanliness}</p>
                    </div>
                </div>
               
               
                
            </div>
            
           
        </div>
    );
}

export default MyCosts;
