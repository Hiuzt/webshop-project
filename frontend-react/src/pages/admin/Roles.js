import React, { useEffect, useReducer, useState } from 'react'
import useAdmin from '../../customHooks/useAdmin'
import RoleAction from './components/roles/RoleAction';
import RoleAddModal from './components/roles/RoleAddModal';

const Roles = () => {
    const { roles } = useAdmin();
    const [isAddOpen, setAddOpen] = useState(false)

    const keyValues = [
        "name",
        "login_acp",
        "view_o_site",
        "get_users",
        "create_user",
        "delete_user",
        "update_user",
        "create_promo",
        "delete_promo",
        "create_product",
        "delete_product",
        "update_product",
        "view_acp",
    ]

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
                    <button onClick={(e) => setAddOpen(true)} className="bg-blue-600 text-sm text-white py-2 px-7 mb-4 rounded-xl font-medium">
                        Add new role
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
                            <th scope="col" className="px-6 py-3 text-center">
                                Login admin panel
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                View admin panel
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                view_o_site
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                View users
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Create users
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Delete users
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Update users
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Create promo code
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Delete promo code
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Create product
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Update product
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Delete product
                            </th>
                            <th scope="col" fill-gray-300 className="px-6 py-3 text-center">
                                Operation
                            </th>
                        </tr>
                    </thead>
                    <tbody className="rounded-b-lg">
                        {roles?.loadedContext && (
                            <>
                                {roles?.roles?.map((roleValue, roleIndex) => (
                                    <tr className="rounded-b-lg border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        {keyValues.map((keyName, keyIndex) => (
                                            <td className="px-6 py-4  items-center">
                                                {keyName !== "name" ? (
                                                    <>
                                                        {roleValue[`${keyName}`] ? (

                                                            <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto px-1 py-1 rounded-full bg-green-50 fill-green-500' height="24px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>

                                                        ) : (
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto px-1 py-1 rounded-full bg-red-50 fill-red-500' height="24px" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                                        )}

                                                    </>
                                                ) : (
                                                    <>
                                                        {roleValue[`${keyName}`]}
                                                    </>
                                                )}
                                            </td>
                                        ))}
                                        <td>
                                            <RoleAction roleIndex={roleIndex} />
                                        </td>
                                    </tr>
                                ))}

                            </>

                        )}



                    </tbody>

                </table>
            </div>
            <RoleAddModal isOpen={isAddOpen} setOpen={setAddOpen} />
        </>
    )
}

export default Roles