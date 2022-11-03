import ProductsCard from './ProductsCard'
import React from 'react'

const ProductsList = ({ data }) => {
    return (
        <>
            {data?.map((item, index) => (
                <ProductsCard item={item} key={index} />
            ))}
        </>
    )
}

export default ProductsList