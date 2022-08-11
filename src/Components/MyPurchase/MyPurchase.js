import React, {useState} from 'react';
import './MyPurchase.css'

function  MyPurchase(props) {

    const [price, setPrice] = useState(null)
    const [category, setCategory] = useState(null)
    const [type, setType] = useState(null)
    const [date, setDate] = useState(null)

    console.log('price ---->', price)
    console.log('categor ---->', category)
    console.log('type ---->', type)
    console.log('date----->', date)

    return (
        <div className='coast'>
            <div className='coast-title'> NEW PURCHASE</div>
            <div className='input-wrapper'>
                <p className='input-title'>DATE</p>
                <input type='date' onChange={(e)=>setDate(e.target.value)}/>
                <p className='input-title'>PRICE</p>
                <input className='input' placeholder='How much . . .' value={price} onChange={(e) => setPrice(e.target.value)} />
                <p className='input-title'>CATEGORY</p>
                <select className='select' defaultValue='' value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="" disabled>category</option>
                        <option value="food">food</option>
                        <option value="transport">transport</option>
                        <option value="bad habits">bad habits</option>
                        <option value='other'>other</option>
                </select>
                <p className='input-title'>TYPE</p>
                <select className='select' defaultValue='' value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="" disabled>type</option>
                        <option value="coffee">coffee</option>
                        <option value="cigarettes">cigarettes</option>
                        <option value="ticket">ticket</option>
                        <option value="water">water</option>
                        <option value='other'>other</option>
                </select>
                
             
                <button>ADD</button>
            </div>

        </div>
    );
}

export default MyPurchase;
