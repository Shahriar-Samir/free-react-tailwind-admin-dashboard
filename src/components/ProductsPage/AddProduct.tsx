import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function AddProduct() {


  return (
    <>
    <Link
    onClick={()=>document.getElementById('my_modal_5').showModal()}
              to="#"
              className="inline-flex items-center justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <span>
              <IoAddCircleOutline className='text-2xl'/>
              </span>
              Add new product
            </Link>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box dark:bg-black">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl">✕</button>
    </form>
  <form>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Product Title
                  </label>
                  <input
                    name="title"
                    placeholder="Title"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Product Category
                  </label>
                  <input
                    placeholder="Category"
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
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Add new product
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