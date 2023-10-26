import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminSidebar = () => {

    const location = useLocation();

    const sideBarMenus = [
        ["dashboard",
            <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-600 w-5 h-5"
                viewBox="0 0 22 21"
            >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>],
        ["users",
            <svg
                
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-600 w-5 h-5"
                viewBox="0 0 20 18"
            >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
        ],
        ["roles",
            <svg className="fill-gray-600 w-5 h-5"
                viewBox="0 0 640 512"><path d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z" /></svg>
        ],
        ["products",
            <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-600 w-5 h-5"
                viewBox="0 0 18 20"
            >
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
            </svg>
        ],
        ["orders",
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-600 w-5 h-5" viewBox="0 0 384 512"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"/></svg>
        ],
        ["promos", 
        <svg xmlns="http://www.w3.org/2000/svg"  className="fill-gray-600 w-5 h-5" viewBox="0 0 384 512"><path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
        ],
        ["categories", 
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-600 w-5 h-5" viewBox="0 0 512 512"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg>]
    ]

    return (
        <div className="flex min-h-[calc(100vh-56px)] overflow-x-hidden">
            <aside
                id="logo-sidebar"
                className="fixed sm:relative z-0 w-64 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pt-4 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {sideBarMenus.map((menuValue, menuIndex) => (
                            <li>
                            <Link to={`/admin/${menuValue[0]}`} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group ${location.pathname.includes(menuValue[0]) ? "bg-blue-600 fill-white text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
                                <div className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white ${location.pathname.includes(menuValue[0]) ? "bg-blue-600 fill-white text-white" : "group-hover:text-gray-900 dark:hover:bg-gray-700"}`}>
                                    {menuValue[1]}
                                </div>
                                    

                                <span className="ml-3 capitalize">{menuValue[0]}</span>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <Outlet />
        </div>
    );
};

export default AdminSidebar;
