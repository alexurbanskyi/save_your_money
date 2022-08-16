import {createSlice} from '@reduxjs/toolkit'

// const initial = [
//    {id: '125', price: '125', category: 'fun', type: 'cafe', year: '2022', month: '08', day: '11' }
// ]
const initial = JSON.parse(localStorage.getItem('purchase')) || []

const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: initial,
    reducers: {
        addPurchase: (state,{payload})=>{
            state.push(payload)
            console.log('PAYLOAD --->', payload)
            localStorage.setItem('purchase', JSON.stringify(state))
        },


    }
})
export const {addPurchase} = purchaseSlice.actions
export default purchaseSlice.reducer