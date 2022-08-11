import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from './Slices/BudgetSlice'

export const store = configureStore({
    reducer:{
        budget: budgetReducer,
    }
})
