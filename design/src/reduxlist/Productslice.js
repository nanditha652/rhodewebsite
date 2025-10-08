import {createSlice} from '@reduxjs/toolkit'

const storage = localStorage.getItem('Productlist')

const initialState = {
  Product:storage? JSON.parse(storage) : []
};

const Productslice = createSlice({
  name:"list",
  initialState,
  reducers:{
    addTocart: (state,action)=>{
      const newItems = action.payload
      const existItems = state.Product.find(Items=>Items.id === newItems.id)

      if(existItems){
        existItems.quantity = newItems.quantity
      }
      else{
        state.Product.push(newItems)
      }
      localStorage.setItem('Product',JSON.stringify(state.Product))
    },

    deleteFromcart:(state,action)=>{
      state.Product = state.Product.filter(Items=>Items.id !== action.payload.id)
      localStorage.setItem('Product',JSON.stringify(state.Product))
    },

    updateQuantity:(state,action)=>{
      const{id,quantity} = action.payload
        const itemUpdate = state.Product.find(Items=>Items.id === id)

        if(itemUpdate){
            itemUpdate.quantity = quantity
        }
        localStorage.setItem('Product', JSON.stringify(state.Product))
    }
  }
})

export default Productslice.reducer;
export const{addTocart, deleteFromcart, updateQuantity} = Productslice.actions