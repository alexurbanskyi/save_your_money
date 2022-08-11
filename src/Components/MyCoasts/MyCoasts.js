import React from 'react';
import './MyCoasts.css'

function MyCoasts(props) {
    return (
        <div className='coast'>
            <div className='coast-title'> NEW PURCHASE</div>
            <div className='input-wrapper'>
                <p className='input-title'>PRICE</p>
                <input className='input' placeholder='How much . . .' />
                <p className='input-title'>CATEGORY</p>
                <input />
                <p className='input-title'>TYPE</p>
                <input />
                <button>ADD</button>
            </div>

        </div>
    );
}

export default MyCoasts;
