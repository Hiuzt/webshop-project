import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ReactStars from 'react-stars'
import { getCurrentUser } from '../../../redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createReview } from '../../../redux/features/reviewSlice';

const AddReview = (props) => {
    // UserSource
    const userSource = useSelector(getCurrentUser);
    const dispatch = useDispatch();
    const currentProduct = useParams().productID
    
    const [isOpen, setIsOpen] = useState(false)
    const [ratingValue, setRatingValue] = useState(1)
    const [reviewDescription, setReviewDescription] = useState("")

    const submitReview = () => {
        const ownerEmail = userSource?.email        
        const formData = {
            owner: ownerEmail,
            rating: ratingValue,
            comment: reviewDescription
        }
        
        dispatch(createReview({id: currentProduct, formData: formData}))

    }

    return (
        <>

            <Transition appear show={props.showModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => props.closeModal()}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add review
                                    </Dialog.Title>                                 
                                    <ReactStars onChange={setRatingValue} value={ratingValue} size={24} />
                                    <textarea value={reviewDescription} onChange={(e) => setReviewDescription(e.target.value)} className="mt-5 w-full border rounded-xl outline-none focus:ring focus:ring-blue-900" />
                                    <div className="flex mt-5 justify-end gap-3">
                                        <button onClick={() => props.closeModal()} className="border px-5 py-1 rounded-xl">Cancel</button>
                                        <button onClick={() => submitReview()} className="px-5 bg-blue-900 rounded-xl text-white">Add review</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>

    )
}

export default AddReview