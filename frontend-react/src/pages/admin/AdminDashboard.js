import React from 'react'
import useAdmin from '../../customHooks/useAdmin'
import RevenueChart from './components/dashboard/RevenueChart';
import ProfitChart from './components/dashboard/SalesChart';
import ProfilePicture from "../../files/profile-pic.jpg";
import SalesChart from './components/dashboard/SalesChart';
import ViewersChart from './components/dashboard/ViewersChart';
import OrdersChart from './components/dashboard/OrdersChart';

const AdminDashboard = () => {
    const { users } = useAdmin();
    return (
        <div className="relative m-5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {/* TOTAL PROFIT */}
                <StatComponent mainValue={"$2.512K"} statName={"Total profit"} differenceByWeek={2.34} mainPicture={<svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-6 h-6" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" /></svg>} />
                {/* TOTAL PRODUCT */}
                <StatComponent mainValue={"47"} statName={"Total products "} differenceByWeek={5.72} mainPicture={<svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-6 h-6" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>} />

                {/* TOTAL SALES */}
                <StatComponent mainValue={"2313"} statName={"Total sales"} differenceByWeek={-2.31} mainPicture={<svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-6 h-6" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>} />

                {/* TOTAL USERS */}
                <StatComponent mainValue={users?.usersTable?.length} statName={"Total users"} differenceByWeek={5} mainPicture={<svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-6 h-6" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>} />
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-6">
                <RevenueChart />
                <div className="flex flex-col 2xl:col-span-4 xl:col-span-4 col-span-12">
                    <OrdersChart />
                    <SalesChart />
                </div>
                <div className="flex flex-row xl:flex-col 2xl:col-span-4 xl:col-span-6 col-span-12">

                    <ViewersChart />
                    <div className="rounded-xl border border-stroke bg-white p-8 mt-6 shadow-default dark:border-strokedark dark:bg-boxdark shadow-lg h-full">
                        <div className="flex flex-col justify-between h-full">
                            <span>
                                <h4 className="text-xl font-semibold text-black dark:text-white">
                                    Orders this month
                                </h4>
                                <p className="text-sm text-gray-600">Total: 1230</p>  
                            </span>
                            <div className=''>
                                <div className="flex justify-between">
                                    <p className="font-bold text-sm mb-3 ml-2">
                                        2300 to goal
                                    </p>
                                    <p className="font-bold mb-3 ml-2 text-gray-500 text-sm">
                                        60%
                                    </p>
                                </div>
                                <div className="bg-blue-600 bg-opacity-20 w-full h-4 rounded-lg relative">
                                    <div className="bg-blue-600 w-56 h-4 rounded-lg absolute">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="py-5 px-5 bg-white rounded-xl border shadow-lg w-full col-span-8">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Recent orders
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white rounded-lg overflow-x-scroll ">
                    <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400 border-b border-b-gray-200">
                        <tr>
                            <th scope="col" className="pr-6 py-3">
                                ORDER ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                CREATED
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                CUSTOMER
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                TOTAL
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                STATUS
                            </th>
                        </tr>
                    </thead>
                    <tbody className="rounded-b-lg ">
                        <tr className="border-b">
                            <td className="pr-6 py-4 text-left">
                                #84uj98a7
                            </td>
                            <td className="px-6 py-4 text-center">
                                2023.10.08 13:37
                            </td>
                            <td className="px-6 py-4 text-center">
                                Kerner Zoltán
                            </td>
                            <td className="px-6 py-4 text-center">
                                $3300
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span className="bg-red-100 px-2 py-1 rounded-lg text-red-600">Cancelled</span>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="pr-6 py-4 text-left">
                                #84uj98a7
                            </td>
                            <td className="px-6 py-4 text-center">
                                2023.10.08 13:37
                            </td>
                            <td className="px-6 py-4 text-center">
                                Kerner Zoltán
                            </td>
                            <td className="px-6 py-4 text-center">
                                $3300
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span className="bg-yellow-100 px-2 py-1 rounded-lg text-yellow-600">Pending</span>
                            </td>
                        </tr>                       
                        <tr className="border-b">
                            <td className="pr-6 py-4 text-left">
                                #84uj98a7
                            </td>
                            <td className="px-6 py-4 text-center">
                                2023.10.08 13:37
                            </td>
                            <td className="px-6 py-4 text-center">
                                Kerner Zoltán
                            </td>
                            <td className="px-6 py-4 text-center">
                                $3300
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span className="bg-green-100 px-2 py-1 rounded-lg text-green-600">Shipped</span>
                            </td>
                        </tr>  
                        <tr>
                            <td className="pr-6 py-4 text-left">
                                #84uj98a7
                            </td>
                            <td className="px-6 py-4 text-center">
                                2023.10.08 13:37
                            </td>
                            <td className="px-6 py-4 text-center">
                                Kerner Zoltán
                            </td>
                            <td className="px-6 py-4 text-center">
                                $3300
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span className="bg-blue-100 px-2 py-1 rounded-lg text-blue-600">Confirmed</span>
                            </td>
                        </tr>                           
                    </tbody>

                </table>
                    </h4>
                </div>  
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                <div className="py-5 px-5 bg-white rounded-xl border shadow-lg justify-between">
                    <h3 className="font-bold text-2xl">Recent user</h3>
                    <div className="flex xl:flex-row mt-5 items-center">
                        <img src={ProfilePicture} alt='' className="w-12 h-12 rounded-full" />
                        <div className="flex flex-col xl:flex-row w-full">
                            <div className="flex flex-col justify-center ml-3">
                                {users?.loadedContext && (
                                    <>                    
                                        <span className="text-lg font-bold text-gray-900">{`${users?.usersTable[users?.usersTable?.length - 1].firstName} ${users?.usersTable[users?.usersTable?.length - 1].lastName}`}</span>
                                        <span className="text-sm text-gray-600">{users?.usersTable[users?.usersTable?.length - 1]?.email}</span>
                                    </>
                                )}
                                </div>
                            <span className="ml-auto mt-auto text-sm text-gray-600">
                            {users?.loadedContext && (
                                `${users?.usersTable[users?.usersTable?.length - 1].createdAt?.replace(/[T Z]/g, " ").substring(0, 19)}`
                            )}
                            </span>
                        </div>
                    </div>

                </div>
                <div className="py-5 px-5 bg-white rounded-xl border shadow-lg">
                    <h3 className="font-bold text-2xl">Recent order</h3>
                    <div className="flex xl:flex-row mt-5 items-center">
                        <img src={ProfilePicture} alt='' className="w-12 h-12 rounded-full" />
                        <div className="flex flex-col xl:flex-row w-full">
                            <div className="flex flex-col justify-center ml-3">
                                <span className="text-lg font-bold text-gray-900">Kerner Dániel</span>
                                <span className="text-sm text-gray-600">dniker69@gmail.com</span>
                            </div>
                            <div className="flex flex-col justify-center ml-auto text-right">
                                <span className="text-lg font-bold text-gray-900">9 items</span>
                                <span className="text-sm text-green-700 font-bold">+ $3.321</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 px-5 bg-white rounded-xl border shadow-lg justify-between">
                    <h3 className="font-bold text-2xl ">Recent promo</h3>
                    <div className="flex relative items-center py-3 justify-center bg-gray-100 overflow-hidden text-lg font-bold rounded-sm mt-2
                        after:content-['-20%'] after:w-20 after:h-5 after:bg-red-600 after:flex after:absolute
                        after:right-[-22px] after:top-2 after:rotate-45 after:items-center after:justify-center after:text-white after:text-sm"
                    >
                        WEBSHOPCODE
                    </div>

                </div>
            </div>
            {/*  */}
        </div>
    )
}

const StatComponent = (props) => {
    return (
        <div className="py-5 px-5 bg-white rounded-xl border shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 border ">
                {props.mainPicture}</div>
            <div className="flex w-full justify-between items-end mt-6">
                <div>
                    <h3 className="font-bold text-gray-900 text-2xl">{props.mainValue}</h3>
                    <span className="text-gray-500">{props.statName}</span>
                </div>

                {props.differenceByWeek >= 0 ?
                    <span class="flex items-center gap-1 text-sm font-medium text-green-600 bg-green-50 p-1 border border-green-100 rounded-lg">
                        {props.differenceByWeek}%
                        <svg class="fill-green-600" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z" fill=""></path>
                        </svg>
                    </span>
                    :

                    <span class="flex items-center gap-1 text-sm font-medium text-red-800 bg-red-50 p-1 border border-red-100 rounded-lg">
                        {props.differenceByWeek}%
                        <svg class="fill-red-800" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z" fill=""></path>
                        </svg>
                    </span>


                }

            </div>

        </div>
    )

}

export default AdminDashboard