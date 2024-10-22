import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { ProductType } from "../../types/product"



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
        updateProductData: (state: {data:any[]},action: {payload:any})=>{
            const newArr = state.data.map(item=>{
                if(item.id === parseFloat(action.payload.id)){
                    return action.payload
                }
                return item
            })
            state.data = newArr
        },
    }
})

export const {setProductsData,addProductData,removeProductData,updateProductData} = productsSlice.actions
export default productsSlice.reducer

export const getProducts = ()=> async (dispatch)=>{
     try{
        const res = await axios.get<ProductType[]>('https://fakestoreapi.com/products')
        dispatch(setProductsData(res.data))
     }
     catch(err){
        console.log(err)
     }
} 
export const addProduct = (prodcutData:object)=> async (dispatch)=>{
     try{
        const res = await axios.post('https://fakestoreapi.com/products', prodcutData)
        if(res.data){
            dispatch(addProductData(prodcutData))
            return console.log(res.data)
        }
     }
     catch(err){
        console.log(err)
     }
} 
export const removeProduct = (productId:number)=> async (dispatch)=>{
     try{
        const res = await axios.delete(`https://fakestoreapi.com/products/${productId}`)
        dispatch(removeProductData(productId))
        return console.log('Removed product id '+res.data?.id)
     }
     catch(err){
        console.log(err)
     }
} 

export const updateProduct = (productData)=> async (dispatch)=>{
     try{
         const res = await axios.put(`https://fakestoreapi.com/products/${productData.id}`)
        dispatch(updateProductData(productData))
        return console.log(res.data)
     }
     catch(err){
        console.log(err)
     }
} 