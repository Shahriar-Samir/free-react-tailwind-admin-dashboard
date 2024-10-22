import { useDispatch } from 'react-redux';
import { removeProduct } from '../../Features/products/products';
import { toast } from 'react-toastify';

const DeleteProduct = (props:{id:number}) => {
    const {id} = props
    return (
        <>
            
      <button className="btn btn-error text-white w-full" onClick={()=>document.getElementById(`deleteModal${id}`)?.showModal()}>Delete Product</button>
      <DeleteModal id={id}/>
        </>
    );
};

export default DeleteProduct;

const DeleteModal = ({id})=>{
    const dispatch = useDispatch()
  
    const deleteProduct = ()=>{
        dispatch(removeProduct(id))
        document.getElementById(`deleteModal${id}`)?.close()
        toast.success('Product Deleted Successfully')
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