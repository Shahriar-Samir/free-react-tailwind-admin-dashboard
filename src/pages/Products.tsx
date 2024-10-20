import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { Link } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Product, ProductsState } from '../types/products2';
import { getProducts } from '../Features/products/products';




const Products:React.FC = () => {
    const productsData:Product[] = useSelector((state:ProductsState)=> state.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    },[])

    return (
        <>
          <Breadcrumb pageName="Products" />   
          <Link
              to="#"
              className="inline-flex items-center justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <span>
              <IoAddCircleOutline className='text-2xl'/>
              </span>
              Add new product
            </Link>
        </>
    );
};

export default Products;
