import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, removeProduct } from '../Features/products/products';
import { useNavigate, useParams } from 'react-router-dom';

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
      <button className="btn btn-primary" onClick={()=>document.getElementById(`deleteModal${id}`).showModal()}>Delete Product</button>
    </div>
  </div>
</div>
<DeleteModal id={id}/>
        </main>
    );
};

export default ProductDetails;

const DeleteModal = ({id})=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const deleteProduct = ()=>{
      dispatch(removeProduct(id))
      .then(res=>{
        if(res){
          navigate('/products',{state:{deleteProduct:{id,state:true}}})
        }
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  return (
    <>
  <dialog id={`deleteModal${id}`} className="modal modal-bottom sm:modal-middle">
    <div className="modal-box">
      <h3 className="font-bold text-lg text-center">Are you sure you want to delete this product?</h3>
      <div className="modal-action justify-center gap-5">
          <button className="btn btn-error text-white" onClick={deleteProduct}>Delete</button>
        <form method="dialog">
          <button className="btn btn-accent text-white">Cancel</button>
        </form>
      </div>
    </div>
  </dialog>
  </>
  )
 
}