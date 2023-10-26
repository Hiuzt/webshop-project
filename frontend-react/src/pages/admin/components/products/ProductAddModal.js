import { Dialog, Transition } from '@headlessui/react'
import { image } from 'fontawesome';
import React, { Fragment, useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import productService from '../../../../services/productService';
import { createProduct } from '../../../../redux/features/productSlice';

const ProductAddModal = (props) => {
    const dispatch = useDispatch()

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent

        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];

  
    const [inputValues, setInputValues] = useState({
        productName: "",
        description: "",
        price: 0,
        discount: 0,
    })
    const [productImages, setProductImages] = useState([])
    const [descriptionValue, changeDescription] = useState("")
    const { categories, isLoading, isError, isSuccess, message } = useSelector((state) => state.categories)
    const [category, changeCategory] = useState("")

    const addImageToArray = (e) => {
        if (e.target.value.length === 0) {
            return
        }
        let inputFile = e.target
        let imageSrc = URL.createObjectURL(inputFile.files[0])

        setProductImages([
            ...productImages,
            {imgSrc: imageSrc, imageFile:  inputFile.files[0]}]);
    }

    
    const removeImageFromArray = (imageIndex, e) => {
        let newArray = [...productImages]
        newArray.splice(imageIndex, 1)
        setProductImages(newArray)   
    }

    const onChangeInput = (e) => {
        const currentField = e.target.name
        const currentValue = e.target.value

        setInputValues({
            ...inputValues,
            [currentField]: currentValue
    })
    }

    const addProduct = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("name", inputValues["productName"])
        formData.append("price", Number(inputValues["price"]))
        formData.append("discount", Number(inputValues["discount"]))
        formData.append("description", descriptionValue)

        productImages.forEach((imageSource) => {
            let imgSrc = imageSource.imageFile
            formData.append('images', imgSrc);
        })
        formData.append("category", category)
        dispatch(createProduct(formData))
        props.setOpen()
    }
    
    return (
        <Transition.Root show={props.isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
                <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    {productImages.length}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">

                                    <div className="flex h-full flex-col justify-between overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 pb-6 sm:px-6 border-b flex justify-between">
                                            <Dialog.Title className="text-2xl font-bold leading-6 text-gray-900 ">
                                                Add product
                                            </Dialog.Title>
                                            <button type="button" className="relative rounded-md text-gray-300 hover:text-white fill-gray-400 hover:fill-gray-600" onClick={() => props.setOpen(false)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                            </button>
                                        </div>

                                        <div className="relative mt-6 flex-1  px-4 sm:px-6 border-b">

                                            <div className="my-3">
                                                <label className="block mb-2 text-sm font-medium text-gray-900">Category name</label>
                                                <input value={inputValues["productName"]} onChange={(e) => onChangeInput(e)} name="productName"  type="text" className="bg-gray-50 border leading-6 border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-blue-600 outline-none focus:border-blue-600 block w-full p-2.5" />
                                            </div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900">Product images</label>
                                            <div className="my-3 grid grid-cols-4 justify-items-center gap-y-1 border-t-2 py-3 border-b-2">
                                            
                                                {productImages.map((imageSource, imageIndex) => (
                                                    <>
                                                    
                                                    <div key={imageIndex} onClick={(e) => removeImageFromArray(imageIndex, e)} className="flex items-center justify-center group relative cursor-pointer">
                                                        <img src={imageSource["imgSrc"]} alt="" className={` ${imageIndex === 0 && "border-2 border-blue-600"} w-24 h-24 fill-gray-500 rounded-xl`} />
                                                        <div className="absolute hidden group-hover:flex group-hover:left-0 group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:bg-black/40 backdrop-blur-sm rounded-xl items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden group-hover:block w-8 h-8" fill="none" stroke-width="1.5" viewBox="0 0 24 24" color="#ffffff"><path stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="m3 16 7-3 4 1.818M16 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM16.879 21.121 19 19m2.121-2.121L19 19m0 0-2.121-2.121M19 19l2.121 2.121"></path><path stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M13 21H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V13"></path></svg>
                                                        </div>
                                                    </div>
                                                    </>
                                                ))}
                                                <input className="absolute w-0 h-0 " type="file" accept="image/*" id="image-input" onChange={(e) => addImageToArray(e)}></input>
                                                <label htmlFor="image-input" className="hover:bg-gray-300 cursor-pointer flex items-center justify-center w-24 h-24 bg-gray-200 border-dashed border-2 border-gray-500 rounded-xl">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke-width="1.5" viewBox="0 0 24 24" color="#6b7280"><path stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M13 21H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V13"></path><path stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="m3 16 7-3 5.5 2.5M16 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM16 19h3m3 0h-3m0 0v-3m0 3v3"></path></svg>
                                                </label>
                                            </div>
                                            <div className="my-3">
                                                <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                                <ReactQuill
                                                    theme="snow"

                                                    placeholder={"Description"}
                                                    modules={{
                                                        toolbar: toolbarOptions
                                                    }}
                                                    value={descriptionValue} 
                                                    onChange={changeDescription} 
                                                    
                                                />
                                            </div>
                                            <div className="my-3">
                                                <label className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                                                <input value={inputValues["price"]} onChange={(e) => onChangeInput(e)} name="price" type="text" className="bg-gray-50 border leading-6 border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-blue-600 outline-none focus:border-blue-600 block w-full p-2.5" />
                                            </div>
                                            <div className="my-3">
                                                <label className="block mb-2 text-sm font-medium text-gray-900">Discount (%)</label>
                                                <input value={inputValues["discount"]} onChange={(e) => onChangeInput(e)} name="discount" type="text"className="bg-gray-50 border leading-6 border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-blue-600 outline-none focus:border-blue-600 block w-full p-2.5" />
                                            </div>
                                            <div className="my-3">
                                                <label className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                                                {!isLoading && isSuccess && !isError && (
                                                    <select value={category} onChange={(e) => changeCategory(e.target.value)} className="bg-gray-50 border leading-6 border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-blue-600 outline-none focus:border-blue-600 block w-full p-2.5">
                                                    {categories.map((categorySource, categoryIndex) => (
                                                      <option value={categorySource.name}>{categorySource.name}</option>  
                                                    ))}

                                                </select>
                                                )}                                                                                       
                                            </div>
                                            
                                        </div>


                                        <div className="ml-auto relative mt-6 px-4 sm:px-6">
                                            <button className="ring-1 ring-inset ring-gray-300 px-3 py-2 mx-2 rounded-lg text-gray-900 text-sm font-semibold" onClick={(e) => props.setOpen(false)}>Cancel</button>
                                            <button className=" bg-blue-600 px-3 py-2 rounded-lg text-white text-sm font-semibold" onClick={(e) => addProduct(e)}>Add</button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ProductAddModal