import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setProducts } from './Products.slice';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cartProducts',
    initialState: [],
    reducers: {
        setCart:(state,action)=>{
            const cart=action.payload
            return cart
        }

    }
})

 
export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart',getConfig())
        .then((res) => dispatch(setCart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)));
}


export const PurchaseCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases',{},getConfig())
        .then(() => dispatch(setCart([])))
        .catch(err=>console.log(err.response))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addPurchasesThunk = (product) => (dispatch) => {
    console.log(product)
      dispatch(setIsLoading(true));
      return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart',product,getConfig())
          .then(() => dispatch(getCartThunk()))
          .catch(err=>console.log(err.response))
          .finally(() => dispatch(setIsLoading(false)));
  }

export const {setCart}=cartSlice.actions;

export default cartSlice.reducer;
