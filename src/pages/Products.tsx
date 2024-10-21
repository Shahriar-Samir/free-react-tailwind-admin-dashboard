import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { Link, useLocation } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Product, ProductsState } from '../types/products2';
import { getProducts, removeProductData } from '../Features/products/products';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import AddProduct from '../components/ProductsPage/AddProduct';




const Products:React.FC = () => {
    const productsData:Product[] = useSelector((state)=> state.products.data)
    const dispatch = useDispatch()
    const location = useLocation()

  console.log(location.state?.deleteProduct?.id)
    useEffect(()=>{
        if(location.state?.deleteProduct?.state){
          dispatch(removeProductData(location.state?.deleteProduct?.id))
     
        }
        else{
          dispatch(getProducts())
    }
    },[])


       


    return (
        <>
          <Breadcrumb pageName="Products" />   
            <AddProduct/>
            <main className='mt-10 w-full grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
              {productsData.map(product=>{
                return  <Card key={product.id} className="py-4 px-3 border-2">
                <CardBody className="overflow-visible py-2 gap-3">
                  <img
                    alt={product.title}
                    className="object-cover rounded-xl w-full h-[300px]"
                    src={product.image}
                  />
                  <p className="text-tiny uppercase font-bold">{product.title}</p>
                  <small className="text-default-500">{product.description.slice(0,100)}</small>
             
                </CardBody>
                <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center justify-center bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Details
            </Link>

              </Card>
              })}
            </main>
        </>
    );
};

export default Products;
