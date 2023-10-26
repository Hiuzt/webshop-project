import React, { useState } from 'react'
import useProduct from '../../customHooks/useProduct'
import ProductAction from './components/products/ProductAction';
import ProductAddModal from './components/products/ProductAddModal';
import { useSelect } from '@material-tailwind/react';
import { useSelector } from 'react-redux';

const Products = () => {
    const { isSuccess, isError, isLoading, products, message } = useSelector((state) => state.products)

    const [addOpen, setAddOpen] = useState(false)

    return (
        <>
            <div className="relative w-full overflow-x-auto m-5">
                <div className="flex p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-100 border border-red-500 dark:bg-gray-800 dark:text-red-400">
                    <svg
                        className="flex-shrink-0 inline w-5 h-5 mr-3 mt-[0px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="text-md font-medium">
                            After altering a user data, you will not be able to recover it!
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button onClick={() => setAddOpen(true)} className="bg-blue-600 text-sm text-white py-2 px-7 mb-4 rounded-xl font-medium">
                        Add new product
                    </button>
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Input a data..."
                            className="mb-4 flex-shrink-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-64 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />

                        <svg
                            className="absolute right-2 top-3.5 h-4 w-4 text-g"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white rounded-lg overflow-x-scroll ">
                    <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400 border-b border-b-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price (Discounted price)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Discount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created At
                            </th>
                        </tr>
                    </thead>
                    <tbody className="rounded-b-lg">
                        {!isError && !isLoading && isSuccess && (


                            <>
                                {products?.map((productValue, productIndex) => (
                                    <tr className="border-b hover:bg-gray-50">

                                        <td className="px-6 py-3">
                                            {productValue?.name}
                                        </td>

                                        <td className="px-6 py-3">
                                            {productValue?.description}
                                        </td>
                                        <td className="px-6 py-3">
                                            ${productValue?.price} (${productValue?.price * (1 - productValue?.discount / 100)})
                                        </td>

                                        <td className="px-6 py-3">
                                            {productValue?.discount}%
                                        </td>
                                        <td className="px-6 py-3">
                                            {productValue?.category}
                                        </td>
                                        <td className="px-6 py-3">
                                            {productValue?.createdAt.replace(/[T Z]/g, " ").substring(0, 19)}
                                        </td>
                                        <td className="px-6 py-4 float-right">
                                            <ProductAction categorySource={productValue} categoryIndex={productIndex} categoryID={productValue?._id} />
                                        </td>
                                    </tr>
                                ))}
                            </>
                        )}


                    </tbody>

                </table>
                <ProductAddModal isOpen={addOpen} setOpen={() => setAddOpen(false)} />
            </div>
        </>
    )
}

export default Products      