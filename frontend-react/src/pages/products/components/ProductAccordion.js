import React, { useState } from 'react'

const ProductAccordion = () => {

    const changeDropdown = (e) => {
        console.log(e)
        setDropdownState({ ...dropdownState, [e]: !dropdownState[e] })
    }

    const [dropdownState, setDropdownState] = useState({
        shipping: false,
        itemdetails: false
    });


    return (
        <>


            <div onClick={(e) => changeDropdown("shipping")} className="flex bg-gray-100 py-2 my-2 justify-between items-center rounded-full hover:bg-gray-200 cursor-pointer transition-all duration-300">
                <span className="ml-5 text-sm">Item details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`transition-all duration-300 mr-5 ${dropdownState["shipping"] ? "rotate-180" : ""}`} height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
            </div>
            <div className={`grid text-sm transition-all duration-300 ease-in-out ${dropdownState["shipping"] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden ml-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
            <div onClick={(e) => changeDropdown("itemdetails")} className="flex bg-gray-100 py-2 my-2 justify-between items-center rounded-full hover:bg-gray-200 cursor-pointer transition-all duration-300">
                <span className="ml-5 text-sm">Shipping & returning policies</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`transition-all duration-300 mr-5 ${dropdownState["shipping"] ? "rotate-180" : ""}`} height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
            </div>
            <div className={`grid text-sm transition-all duration-300 ease-in-out ${dropdownState["itemdetails"] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden ml-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>

        </>
    )
}

export default ProductAccordion