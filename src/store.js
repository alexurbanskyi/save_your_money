import { configureStore } from '@reduxjs/toolkit'
import purchaseReducer from './Slices/purchaseSlice'

export const store = configureStore({
    reducer:{
        purchase: purchaseReducer,
    }
})
