import React from 'react'
import ProfilePicture from "../../../files/profile-pic.jpg"
import ReactStars from 'react-stars'

const ReviewCard = (props) => {
    return (
        <div className="flex py-5">
            <img className="rounded-full w-10 h-10" src={props?.reviewSource?.img || ProfilePicture} alt='' />
            <div className="ml-3 text-gray-700">
                <h3 className="font-bold">{props.reviewSource?.name || "Not found"}</h3>
                <p className="text-gray-500">
                    <time datetime='2023-10-18'>{props?.reviewSource?.createdAt}</time>
                </p>
                <ReactStars className="mb-4" value={props.reviewSource?.rating} edit={false} size={24} />
                <p className="text-gray-600 text ">{props?.reviewSource?.comment}</p>
            </div>
        </div>
    )
}

export default ReviewCard