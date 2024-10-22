import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, removeProduct } from '../Features/products/products';
import { useNavigate, useParams } from 'react-router-dom';


const ProductDetails = () => {
    const {id} = useParams()
    const products = useSelector(state=> state.products.data)
    const dispatch = useDispatch()


   const productDetails = products?.length >0? products.filter(item=>{
    return item.id === parseInt(id) 
})[0] : []
    console.log(products)
    useEffect(()=>{
        if(products?.length<1){
          dispatch(getProducts())
        }
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
      <p className="py-2">
       {productDetails.description}
      </p>
      <p className="py-2">
       Price: ${productDetails.price}
      </p>
      <p className="py-2">
       Category: ${productDetails.category}
      </p>
      <div className='flex mt-4 gap-5'>

      </div>
    </div>
  </div>
</div>
        </main>
    );
};

export default ProductDetails;`

`

