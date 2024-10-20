import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { Link } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";

const Products:React.FC = () => {
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
