import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import ProfilePicture from "../../../../files/profile-pic.jpg"
import { useDispatch } from 'react-redux';
import { getCategories, updateCategory } from '../../../../redux/features/categorySlice';


const CategoryEditModal = (props) => {
    const [nameValue, setNameValue] = useState( props.categorySource?.name)
    const [categoryImage, setCategoryImage] = useState("")
    const dispatch = useDispatch()

    const changeImage = () => {
        let categoryPicture = document.getElementById("category-image")
        let inputFile = document.getElementById("file")
        let imageSrc = URL.createObjectURL(inputFile.files[0])

        categoryPicture.src = imageSrc
        setCategoryImage(inputFile.files[0]);
        console.log(inputFile.files[0])
    }

    const saveCategory = async (e) => {
        const formData = new FormData();
        formData.append("name", nameValue)
        if (categoryImage.length !== "") {
            formData.append("categoryImage", categoryImage)
        }
        const categoryID = props?.categorySource?._id
        console.log(categoryID)
        await dispatch(updateCategory({id: categoryID, data: formData}))
        await dispatch(getCategories())
    }

    return (
        <Transition.Root show={props.isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
                <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">

                                    <div className="flex h-full flex-col justify-between overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 pb-6 sm:px-6 border-b flex justify-between">
                                            <Dialog.Title className="text-2xl font-bold leading-6 text-gray-900 ">
                                                Add category
                                            </Dialog.Title>
                                            <button type="button" className="relative rounded-md text-gray-300 hover:text-white fill-gray-400 hover:fill-gray-600" onClick={() => props.setOpen(false)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                            </button>
                                        </div>

                                        <div className="relative mt-6 flex-1  px-4 sm:px-6 border-b">
                                            <div className="group w-36 h-36 mx-auto cursor-pointer">

                                                <input type="file" onChange={(e) => changeImage(e)} accept="image/*" name="images" id="file" className=" bg-inherit outline-none transform scale-0 absolute" />

                                                <label htmlFor="file" className="cursor-pointer">
                                                    <img src={props?.categorySource?.categoryPicture} alt="" id="category-image" className="rounded-full w-36 h-36" />

                                                    <span className="group-hover:bg-black group-hover:bg-opacity-40 group-hover:backdrop-blur-sm absolute mx-auto top-0 rounded-full w-36 h-36 flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="36px" className="group-hover:opacity-100 opacity-0 fill-gray-100" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                                                    </span>
                                                </label>



                                            </div>
                                            <div className="my-3">
                                                <label className="block mb-2 text-sm font-medium text-gray-900">Category name</label>
                                                <input type="text" name="username" value={nameValue} onChange={(e) => setNameValue(e.target.value)} className="bg-gray-50 border leading-6 border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-blue-600 outline-none focus:border-blue-600 block w-full p-2.5" />
                                            </div>

                                        </div>
                                        <div className="ml-auto relative mt-6 px-4 sm:px-6">
                                            <button className="ring-1 ring-inset ring-gray-300 px-3 py-2 mx-2 rounded-lg text-gray-900 text-sm font-semibold" onClick={(e) => props.setOpen(false)}>Cancel</button>
                                            <button className=" bg-blue-600 px-3 py-2 rounded-lg text-white text-sm font-semibold" onClick={(e) => saveCategory()}>Add</button>
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

export default CategoryEditModal