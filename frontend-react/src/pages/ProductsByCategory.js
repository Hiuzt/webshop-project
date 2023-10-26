import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate, NavLink } from 'react-router-dom'
import { getProductsByCategory } from '../redux/features/productSlice';
import ProductCard from '../components/home/ProductCard';
import Loader from '../components/Loader';

const ProductsByCategory = () => {
    let categoryName = useParams().categoryName;
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
       const loadProductsByCategory = async () => {
            await dispatch(getProductsByCategory(categoryName))
       }
       loadProductsByCategory();
    }, [categoryName, dispatch, navigate])

    const { isSuccess, isError, isLoading, message, productsByCategory } = useSelector((state) => state.products)

    return (
        <div className="lg:max-w-[1244px] mx-auto relative z-0 mb-5">
            <nav class="flex py-3 text-gray-700" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <Link reloadDocument={true} to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <Link  class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Categories</Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{categoryName}</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className="my-10">
                <div className="text-3xl font-bold mb-5">
                    {categoryName}
                </div>
                <span className="text-justify text-sm text-gray-600">
                    asdoihaziuosdh aisduhasoidhsiaouzdhasiodhasdiuashdioashdiouhfidsufhadisugh aiogdfhg oidfhg oiudfhgioudfhg
                     iuh iohg ioadfushg ioufhsidf uhafi hsdfi huaf ihsdf iuhdiouhfidsufhadisugh aiogdfhg oidfhg oiudfhgioudfhg
                     iuh iohg ioadfushg ioufhsidf uhafi hsdfi huaf ihsdf iuhdiouhfidsufhadisugh aiogdfhg oidfhg oiudfhgioudfhg
                     
                     iuh iohg ioadfushg ioufhsidf uhafi hsdfi huaf ihsdf iuhdiouhfidsufhadisugh aiogdfhg oidfhg oiudfhgioudfhg
                     
                     iuh iohg ioadfushg ioufhsidf uhafi hsdfi huaf ihsdf iuhdiouhfidsufhadisugh aiogdfhg oidfhg oiudfhgioudfhg
                     iuh iohg ioadfushg ioufhsidf uhafi hsdfi huaf ihsdf iuhdiouhfidsufhadisugh aiogdfhg oidfhg oiudfhgioudfhg
                     iuh iohg ioadfushg ioufhsidf uhafi hsdfi huaf ihsdf iuhdiouhfidsufhadisugh aiogdfhg oidfhg oiudfhgioudfhg
                     iuh iohg ioadfushg ioufhsidf uhafi hsdfi huaf ihsdf iu
                     <br />
                        
                     <br />
                     iuh iohg ioadfushg ioufhsidf uhafi hsdfi huaf ihsdf iuhdiouhfidsufhadisugh aiogdfhg oidfhg oiudfhgioudfhg
                     iuh iohg ioadfushg ioufhsidf uhafi hsdfi huaf ihsdf iuhdiouhfidsufhadisugh aiogdfhg oidfhg oiudfhgioudfhg
                     iuh iohg ioadfushg ioufhsidf uhafi hsdfi huaf ihsdf iuhdiouhfidsufhadisugh aiogdfhg oidfhg oiudfhgioudfhg
                     iuh iohg ioadfushg ioufhsidf uhafi hsdfi huaf ihsdf iu
                </span>
            </div>
            {!isError && isSuccess && !isLoading && productsByCategory && (
                <>
                    <div className="border-b mb-5 py-2 flex justify-between items-center text-sm">
                        <span>
                            <strong>{productsByCategory?.length || 0}</strong> products
                        </span>
                        <span>
                            Order by
                        </span>
                    </div>
                    <div className="grid grid-cols-4 justify-items-center gap-y-5 gap-x-2">
                        {productsByCategory?.map((productSource, productIndex) => (
                            <ProductCard productSource={productSource} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductsByCategory