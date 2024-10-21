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
        addProductData: (state: {data:any[]},action: {payload:any})=>{
            state.data = [...state.data, action.payload]
        },
        removeProductData: (state: {data:any[]},action: {payload:any})=>{
            const newArr = state.data.filter(item=> item.id !== parseFloat(action?.payload))
            state.data = newArr
        },
    }
})

export const {setProductsData,addProductData,removeProductData} = productsSlice.actions
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
export const removeProduct = (prodcutId:number)=> async (dispatch)=>{
     try{
        const res = await axios.delete(`https://fakestoreapi.com/products/${prodcutId}`)
        return res.data
     }
     catch(err){
        console.log(err)
     }
} 