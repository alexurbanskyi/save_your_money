import React, {useState} from 'react';
import  {useDispatch} from 'react-redux'
import './MyPurchase.css'
import { addPurchase } from '../../Slices/purchaseSlice';
import { v4 as uuidv4 } from 'uuid';


function  MyPurchase(props) {

    const [price, setPrice] = useState(null)
    const [category, setCategory] = useState(null)
    const [type, setType] = useState(null)
    const [date, setDate] = useState(null)

    const dispatch = useDispatch();

    // console.log('price ---->', price)
    // console.log('categor ---->', category)
    // console.log('type ---->', type)
     console.log('date----->', date)
   


    const categoryList = {
        shop: ['food', 'clothing', 'cleanliness'],
        hobby: ['fishing', 'gym'],
        fun: ['fun', 'cafe', 'birthday'],
        transport: ['ticket'],
        car:['fuel', 'repair'],
        "bad habits": ['beer', 'coffee', 'cigarettes']
    }

    let dateParam = null; 
    date&&(dateParam = date.split('-'))
    // console.log('dataPARAM --->', dateParam)

    const categoryItem = Object.keys(categoryList)
    // console.log(categoryItem)

    let isCategory = false;
    category ? isCategory = false : isCategory = true

    let isFormComplited = true
    price&&category&&type&&date&&(isFormComplited = false)

    // console.log('isForm ---->', isFormComplited)

    const addData = () =>{
        setPrice('')
        setDate('')
        setType('')
        setCategory('')
        const allData = {id: uuidv4(), price: price, category: category, type: type, year: dateParam[0], month: dateParam[1], day: dateParam[2]}
        dispatch(addPurchase(allData))
    }

    return (
        <div className='coast'>
            <div className='coast-title'> NEW PURCHASE</div>
            <div className='input-wrapper'>
                <p className='input-title'>DATE</p>
                <input className='input' type='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
                <p className='input-title'>PRICE</p>
                <input className='input' placeholder='How much . . .' value={price} onChange={(e) => setPrice(e.target.value)} />
                <p className='input-title'>CATEGORY</p>
                <select className='select' defaultValue='' value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="" disabled>category</option>
                        {
                            categoryItem.map((item, index) => <option key={index} value={item}>{item}</option>)
                        }
                </select>
                <p className='input-title'>TYPE</p>
                <select className='select' defaultValue='' disabled={isCategory} value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="" disabled>type</option>
                        {
                            !isCategory&& categoryList[category].map((item, index) => <option  key={index} value={item}>{item}</option> ) 
                        }
                </select>
                <button 
                    className={!isFormComplited ? 'add-btn' : ['add-btn' , 'disable'].join(' ')} 
                    disabled={isFormComplited}
                    onClick={
                        addData
                    }
                >ADD PURCHASE</button>
            </div>

        </div>
    );
}

export default MyPurchase;
