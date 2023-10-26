import React from 'react'
import { useSelector } from 'react-redux'
import { getCategoriesRedux, isLoadedCategories } from '../../redux/features/categorySlice'
import { Link } from 'react-router-dom'

const MobileCategories = (props) => {

    const { categories, isLoading, isError, isSuccess, message } = useSelector((state) => state.categories)



    return (
        <div className={` ${props.showCategories ? "left-0" : "-left-full"} w-full transition-all duration-300  absolute bg-white z-40 h-full top-0 overflow-scroll`}>
            <div className="flex items-center m-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="mr-1.5 translate-y-[1px] rotate-180 fill-blue-600" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                <div onClick={() => props.setCategories(false)} className=" text-blue-600 font-medium">Back</div>
            </div>
            <ul className="m-5 ">
                {!isLoading && !isError && isSuccess && (
                    <>
                        {categories.length > 0 ? (
                            <>
                                {categories?.map((categoryValue, categoryIndex) => (
                                    <Link to={`category/${categoryValue}`} key={categoryIndex} className="flex shadow-black/30 shadow-[0px_0px_12px_0px] rounded-lg bg-white my-3 items-center ">
                                        <img className='w-12 h-12 ml-1' src={categoryValue.categoryPicture} alt='' />
                                        <span className="flex flex-col ml-2 py-2">
                                            <div className="text-gray-700 font-medium">{categoryValue.name}</div>
                                        </span>
                                    </Link>
                                ))}
                            </>
                        ) : (
                            <>
                                There is no categories
                            </>)}



                    </>
                )}


            </ul>
        </div>
    )
}

export default MobileCategories