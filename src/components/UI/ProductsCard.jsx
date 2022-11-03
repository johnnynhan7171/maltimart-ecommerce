import { toast } from 'react-toastify'
import { cartActions } from '../../redux/slices/cartSlices'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Col } from 'reactstrap'
import React from 'react'
import '../../styles/ProductsCard.css'

const ProductsCard = ({ item }) => {
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: item.id,
                productName: item.productName,
                price: item.price,
                image: item.imgUrl
            })
        );
        toast.success('Product Added Successfully')
    };
    return (
        <Col lg='3' md='4'>
            <div className='product_item'>
                <div className='product_img'>
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt='' />
                </div>
                <div className='p-2 product_info'>
                    <h3 className='product_name'>
                        <Link to={`/shop/${item.id}`}>{item.productName}</Link>
                    </h3>
                    <span>{item.category}</span>
                </div>
                <div className='product_cart-bottom d-flex align-items-center justify-content-between p-2'>
                    <span className='price'>{item.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
                        <i class="ri-add-line"></i>
                    </motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductsCard