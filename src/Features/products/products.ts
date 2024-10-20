import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { Product } from "../../types/product"



const initialState: object[] = []

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProductsData: (state,action)=>{
            state = action.payload
        }
    }
})

export const {setProductsData} = productsSlice.actions
export default productsSlice.reducer

export const getProducts = ()=> async (dispatch)=>{
     try{
        const res = await axios.get<Product[]>('https://fakestoreapi.com/products')
        console.log(res.data)
        dispatch(setProductsData(res.data))
     }
     catch(err){
        console.log(err)
     }
} 