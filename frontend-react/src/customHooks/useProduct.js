import React, { useContext } from 'react'
import productContext from '../context/ProductProvider'


const useProduct = () => {
    return (
        useContext(productContext)
    )
}

export default useProduct