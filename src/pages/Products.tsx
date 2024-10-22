import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts} from '../Features/products/products';
import {Card, CardBody} from "@nextui-org/card";
import AddProduct from '../components/ProductsPage/AddProduct';
import UpdateProduct from '../components/ProductsPage/UpdateProduct';
import DeleteProduct from '../components/ProductsPage/DeleteProduct';
import { ToastContainer } from 'react-toastify';
import { ProductsState, ProductType } from '../types/products2';
import Loader from '../common/Loader';





const Products:React.FC = () => {
    const productsData:ProductType[] = useSelector((state:ProductsState)=> state.products.data)
    const dispatch = useDispatch()  



    useEffect(()=>{
        
          if(productsData.length<1){
            dispatch(getProducts())

          }
   
    },[])

    if(productsData.length<1){
      return <Loader/>
    }


    return (
        <>
          <ToastContainer/>
          <Breadcrumb pageName="Products" />   
            <AddProduct productsData={productsData}/>
            <main className='mt-10 w-full grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
              {productsData.map(product=>{
                return  <Card key={product.id} className="py-4 px-3 border-2 gap-3">
                <CardBody className="overflow-visible py-2 gap-3 ">
                  <img
                    alt={product.title}
                    className="object-cover rounded-xl w-full h-[300px]"
                    src={product.image}
                  />
                  <p className="text-tiny uppercase font-bold">{product.title}</p>
                  {/* <small className="text-default-500">{product.description.slice(0,100)}</small> */}
             
                </CardBody>
                <div className='flex gap-5 items-center flex-col'>
                <UpdateProduct product={product}/>
                <DeleteProduct id={product.id}/>
                </div>
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
