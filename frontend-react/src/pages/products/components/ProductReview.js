import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'
import AddReview from './AddReview'
import { useDispatch, useSelector } from 'react-redux'
import { getReviews } from '../../../redux/features/reviewSlice'
import { rev } from 'fontawesome'
import { useParams } from 'react-router-dom'


export const ProductReview = () => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();
    const id = useParams().productID
    

    useEffect(() => {
        dispatch(getReviews(id));       
    }, [])

    const {isLoading, isSuccess, isError, reviews, message} = useSelector((state) => state.reviews);
    console.log(reviews)
    return (
        <section>
            <div className="mt-10 mx-3 xl:mx-0 relative flex items-center justify-between">
                <div className="absolute top-full w-full h-[1px] bg-gray-300 z-0"></div>
                <div className="bg-white py-2 z-10 text-3xl font-bold border-b-4 text-blue-900 border-b-blue-900">Product reviews</div>
                <div onClick={() => setShowModal(true)} className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 cursor-pointer duration-300">
                    New review
                </div>
            </div>
            <div className="my-5 divide-y-2">
                {!isLoading && !isError && isSuccess && (
                    <>
                        {reviews?.map((reviewSource, reviewIndex) => (
                            <ReviewCard key={reviewIndex} reviewSource = {reviewSource} /> 
                        ))}
                    </>
                )}
            </div>
        <AddReview showModal = {showModal} closeModal = {() => setShowModal(false)} />
        </section>
    )
}
