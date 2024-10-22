import { updateProduct } from "../../Features/products/products";
import { useDispatch } from "react-redux";
import {toast} from 'react-toastify'
import { ProductType } from "../../types/product";


export default function UpdateProduct(props:{product:ProductType}) {
      const {product} = props
      const dispatch = useDispatch()
      const {title,description,image,price,category,id} = product


      


  const addProductHandler = (e)=>{
      e.preventDefault()
      const form = e.target 
      const title1 = form.title.value
      const image1 = form.image.value
      const category1 = form.category.value
      const price1 = form.price.value
      const description1 = form.description.value
      const productData = {title:title1,category:category1,price:price1,description:description1,image:image1,id}
      dispatch(updateProduct(productData))
      document.getElementById(`my_modal_${id}`).close()
      toast.success('Product Data updated Successfully')
  }

  return (
    <>
          <button className="btn btn-primary w-full"   onClick={()=>document.getElementById(`my_modal_${id}`).showModal()}>Update Product</button>
   
<dialog id={`my_modal_${id}`} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box dark:bg-black">
  <form method="dialog">

      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl">✕</button>
    </form>
  <form onSubmit={addProductHandler}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Product Title
                  </label>
                  <input
                    name="title"
                    placeholder="Title"
                    defaultValue={title}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Product Image URL
                  </label>
                  <input
                    name="image"
                    defaultValue={image}
                    placeholder="Product Image URL"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Product Category
                  </label>
                  <input
                    placeholder="Category"
                    defaultValue={category}
                    name="category"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Product Price
                  </label>
                  <input
                    name="price"
                    defaultValue={price}
                    type="number"
                    placeholder="Price"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-5.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Product Description
                  </label>
                  <textarea  
                    placeholder="Description"
                    name="description"
                    defaultValue={description}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Update Product Data
                </button>
              </div>
            </form>
      <form method="dialog" className="flex justify-center px-6">
        <button className="btn w-full btn-error text-white">Cancel</button>
      </form>
  </div>
</dialog>
    </>
  );
}