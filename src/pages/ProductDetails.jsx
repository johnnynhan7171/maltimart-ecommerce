import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/ProductDetails.css'

const ProductDetails = () => {
    const [tab, setTab] = useState('desc')
    const [rating, setRating] = useState(null)
    const {id} = useParams()
    const product = products.find(item => item.id === id)
    const { imgUrl, productName, price, avgRating, reviews, description, shortDesc } = product
    return (
        <Helmet title={productName}>
            <CommonSection title={productName} />
            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt='' />
                        </Col>
                        <Col lg='6'>
                            <div className='product_details'>
                                <h2>productName</h2>
                                <div className='product_rating d-flex align-items-center gap-5 mb-3'>
                                    <div>
                                        <span onClick={() => setRating(1)}><i class="ri-star-s-fill"></i></span>
                                        <span onClick={() => setRating(2)}><i class="ri-star-s-fill"></i></span>
                                        <span onClick={() => setRating(3)}><i class="ri-star-s-fill"></i></span>
                                        <span onClick={() => setRating(4)}><i class="ri-star-s-fill"></i></span>
                                        <span onClick={() => setRating(5)}><i class="ri-star-half-s-line"></i></span>
                                    </div>
                                    <p>(<span>{ avgRating }</span> rating)</p>
                                </div>
                                <span className='product_price'>${ price }</span>
                                <p className='mt-3'>{ shortDesc }</p>
                                <motion.button whileTap={{ scale: 1.2 }} className='shop_btn'>Add To Cart</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className='tab_wrapper d-flex align-items-center gap-5'>
                                <h6 className={`${tab === 'desc' ? 'active_tab' : ''}`} onClick = {() => setTab('desc')}>
                                    Description
                                </h6>
                                <h6 className={`${tab === 'rev' ? 'active_tab' : ''}`} onClick = {() => setTab('rev')}>
                                    Reviews ({ reviews.length })
                                </h6>
                            </div>
                            {
                                tab === 'desc' ? (
                                    <div className='tab_content mt-5'>
                                        <p>{ description }</p>
                                    </div>
                                ) : (
                                    <div className='product_review mt-5'>
                                        <div className='review_wrapper'>
                                            <ul>
                                                {
                                                    reviews?.map((item, index) => (
                                                        <li kew={index} className='mb-4'>
                                                            <h6>John Doe</h6>
                                                            <span>{ item.rating } rating</span>
                                                            <p>{ item.text }</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className='review_form'>
                                            <form>
                                                <h4>Leave Your Experience</h4>
                                                <div className='form_group'>
                                                    <input type='text' placeholder='Enter Your Name' />
                                                </div>
                                                <div className='form_group d-flex align-items-center gap-5'>
                                                    <span>1 <i class="ri-star-s-fill"></i></span>
                                                    <span>2 <i class="ri-star-s-fill"></i></span>
                                                    <span>3 <i class="ri-star-s-fill"></i></span>
                                                    <span>4 <i class="ri-star-s-fill"></i></span>
                                                    <span>5 <i class="ri-star-s-fill"></i></span>
                                                </div>
                                                <div className='form_group'>
                                                    <textarea rows={4} type='text' placeholder='Review Message...' />
                                                </div>
                                                <button type='submit' className='shop_btn'>Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetails