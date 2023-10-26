import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
// import Categ from './RoleEditModal'
import CategoryDeleteModal from './CategoryDeleteModal'
import CategoryEditModal from './CategoryEditModal'

const CategoryAction = (props) => {
    const [isDeleteOpen, setDeleteOpen] = useState(false)
    const [isEditOpen, setEditOpen] = useState(false)
    

    return (
        <>

        
                <Menu as="div" className="relative text-left mx-auto">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-gray-900 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 448 512"
                            >
                                <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                            </svg>
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-300"
                        enterFrom="transform opacity-0 scale-0"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-300"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-0"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    <div onClick={(e) => setEditOpen(true)} className="hover:bg-gray-100 cursor-pointer hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm">
                                        Edit
                                    </div>
                                </Menu.Item>
                                <Menu.Item>
                                    <div onClick={(e) => setDeleteOpen(true)} className="hover:bg-gray-100 cursor-pointer text-red-600 block px-4 py-2 text-sm">
                                        Delete
                                    </div>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <CategoryDeleteModal isOpen = {isDeleteOpen} setOpen = {setDeleteOpen} categoryIndex = {props.categoryIndex} categoryID = {props.categoryID} />
                <CategoryEditModal isOpen = {isEditOpen} setOpen = {setEditOpen} categorySource = {props.categorySource} categoryID = {props.categoryIndex}/>
                
            </>
  )
}

export default CategoryAction