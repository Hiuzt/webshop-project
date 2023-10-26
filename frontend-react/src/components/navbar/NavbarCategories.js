import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategoriesRedux, isLoadedCategories } from '../../redux/features/categorySlice'

const NavbarCategories = (props) => {

    const { categories, isLoading, isError, isSuccess, message } = useSelector((state) => state.categories)

    return (
        <>
            {props.showCategories && (
                <div onClick={props.setShowCategories} className={`fixed md:block hidden left-0 z-20 w-screen h-screen bg-black/50 backdrop-blur-md overflow-hidden`}></div>
            )}
            <div className={`lg:absolute fixed md:block hidden rounded-b-lg left-0 max-h-screen z-20  bg-white overflow-scroll transition-all duration-300 origin-top-left ${props.showCategories ? "scale-100" : "scale-0"}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                    {!isLoading && !isError && isSuccess && (
                        <>
                            {categories?.length > 0 ?

                                (<>
                                    {categories.map((categoryValue, categoryIndex) => (
                                        <Link reloadDocument={true} to={`/category/${categoryValue.name}`} key={categoryIndex} className="flex items-center justify-between hover:bg-blue-100 hover:rounded-lg">
                                            <img src={categoryValue.categoryPicture} className="w-12 h-12 ml-2 my-2" alt="" />
                                            <div className="flex flex-col justify-center px-3 mr-auto">
                                                <span className="font-bold">
                                                    {categoryValue.name}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </>):(<>There is no categories</>)}
                        </>
                    )}

                </div>
            </div>
        </>
    )
}

export default NavbarCategories