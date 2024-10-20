import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Features/products/products';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams()
    const products = useSelector(state=> state.products.data)
    const dispatch = useDispatch()


   const productDetails = products.length >0? products.filter(item=>{
    return item.id === parseInt(id) 
})[0] : []

    useEffect(()=>{
        dispatch(getProducts())
    },[])
    return (
        <main className='w-full'>
            <div className="hero bg-base-200 min-h-screen !bg-transparent">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10 !bg-transparent">
    <img
      src={productDetails.image}
      className="max-w-sm rounded-lg shadow-2xl w-1/2 object-cover lg:h-[400px]" />
    <div>
      <h1 className="text-2xl font-bold">{productDetails.title}</h1>
      <p className="py-6">
       {productDetails.description}
      </p>
      <button className="btn btn-primary">Update Product</button>
      <button className="btn btn-primary">Delete Product</button>
    </div>
  </div>
</div>
        </main>
    );
};

export default ProductDetails;