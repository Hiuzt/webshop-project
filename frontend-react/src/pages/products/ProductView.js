import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProductByID } from '../../redux/features/productSlice';
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-stars';
import ProductAccordion, { Accordion } from './components/ProductAccordion'
import { ProductReview } from './components/ProductReview';

const NextArrow = (props) => {

    return (
        <div className="flex items-center justify-center absolute z-10 right-2 h-full bottom-0">
            <div className="bg-white flex rounded-full p-2 shadow-[0_0_10px] hover:bg-black hover:fill-white" onClick={props.onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" className="rotate-90" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
            </div>
        </div>
    )
}


const PrevArrow = (props) => {

    return (
        <div className="flex items-center justify-center absolute z-10 left-2 h-full">
            <div className="bg-white flex rounded-full p-2 shadow-[0_0_10px] hover:bg-black hover:fill-white" onClick={props.onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" className="rotate-[270deg]" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
            </div>
        </div>
    )
}

const ProductView = () => {
    const productID = useParams().productID;
    const history = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        const loadProduct = async () => {
            dispatch(getProductByID(productID))
        }
        loadProduct()
    }, [productID, dispatch, history])

    const { isLoading, isSuccess, isError, product, message } = useSelector((state) => state.products)
    const [count, setCount] = useState(1)

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        swipe: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <section className="lg:max-w-[1244px] mx-auto relative z-0 font-montserrat">
            {!isLoading && isSuccess && !isError && (
                <>
                    <nav className="flex lg:py-3 text-gray-700 lg:mx-0 mx-3 py-0" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link reloadDocument={true} to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <Link reloadDocument={true} to={`/category/${product.category}`} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white capitalize">{product.category}</Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{product.name}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className="hidden md:block">
                        <div className="grid grid-cols-12 overflow-hidden">
                            <div className="col-span-7">
                                <Slider {...settings}>
                                    {product?.images.map((imageSource, imageIndex) => (
                                        <img src={imageSource.src} alt='' />
                                    ))}
                                </Slider>
                                <ProductReview />
                                
                            </div>

                            <div className="pt-10 pl-20 col-span-5 divide-y-2">
                                <div>
                                    <div className="text-2xl text-blue-900 font-bold">
                                        AISÖDJHAS IUDHIAUSD ASODH
                                    </div>
                                    <div className="font-bold text-gray-600 pt-2">
                                        Egy hosszu geci cső a faszom beleverem
                                    </div>
                                    <div className="text-sm font-medium text-gray-400 ">
                                        CODE-{product._id}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ReactStars count={5}
                                            value={4}
                                            edit={false}
                                            // onChange={ratingChanged}
                                            size={24}
                                            color2={'#1e3a8a'} />
                                        <span>- 4 reviews </span>
                                    </div>

                                </div>

                                <div className="mt-5 text-gray-700 text-sm py-5">
                                    {/* <div dangerouslySetInnerHTML={{ __html: product.description }}></div> */}
                                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-900 font-bold text-2xl mt-3">
                                            $2000
                                        </span>
                                        <span className="flex mt-3 border rounded-full text-white font-semibold">
                                            <input value={count} onChange={(e) => setCount(e.target.value)} className="text-black text-lg w-16 bg-inherit text-center outline-none " type='number'></input>
                                            <button className="bg-blue-900 py-2 px-6 rounded-r-full hover:bg-blue-800">Add to cart</button>
                                        </span>
                                    </div>
                                    <div className="mt-10">
                                        <ProductAccordion />
                                    </div>                                     
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}

export default ProductView