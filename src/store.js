import { configureStore } from '@reduxjs/toolkit'
import costsReducer from './Slices/costsSlice'

export const store = configureStore({
    reducer:{
       costs: costsReducer,
    }
})
