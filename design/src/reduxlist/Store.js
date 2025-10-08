import { configureStore } from "@reduxjs/toolkit";
import value from './Productslice'

export const storeList = configureStore({
    reducer:{
      list:value
    }
})