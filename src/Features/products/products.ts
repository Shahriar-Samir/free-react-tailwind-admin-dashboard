import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { Product } from "../../types/product"



const initialState = {
    data:[]
}

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProductsData: (state,action)=>{
            state.data = action.payload
        },
        addProductData: (state: {data:any},action: {payload:any})=>{
            state.data = [...state.data, action.payload]
        }
    }
})

export const {setProductsData,addProductData} = productsSlice.actions
export default productsSlice.reducer

export const getProducts = ()=> async (dispatch)=>{
     try{
        const res = await axios.get<Product[]>('https://fakestoreapi.com/products')
        dispatch(setProductsData(res.data))
     }
     catch(err){
        console.log(err)
     }
} 
export const addProduct = (prodcutData:object)=> async (dispatch)=>{
     try{
        const res = await axios.post('https://fakestoreapi.com/products', prodcutData)
        dispatch(addProductData(res.data))
     }
     catch(err){
        console.log(err)
     }
} 