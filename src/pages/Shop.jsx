import { Container, Row, Col } from 'reactstrap'
import React, {useState} from 'react'
import CommonSection from '../components/UI/CommonSection'
import ProductsList from '../components/UI/ProductsList'
import Helmet from '../components/Helmet/Helmet'
import products from '../assets/data/products'
import '../styles/Shop.css'

const Shop = () => {
    const [productsData, setProductData] = useState(products)
    const handleFilter = (e) => {
        const filterValue = e.target.value
        if(filterValue === 'sofa'){
            const filteredProducts = products.filter(
                (item) => item.category === 'sofa'
            );
            setProductData(filteredProducts);
        }
        if(filterValue === 'chair'){
            const filteredProducts = products.filter(
                (item) => item.category === 'chair'
            );
            setProductData(filteredProducts);
        }
        if(filterValue === 'mobile'){
            const filteredProducts = products.filter(
                (item) => item.category === 'mobile'
            );
            setProductData(filteredProducts);
        }
        if(filterValue === 'watch'){
            const filteredProducts = products.filter(
                (item) => item.category === 'watch'
            );
            setProductData(filteredProducts);
        }
        if(filterValue === 'wireless'){
            const filteredProducts = products.filter(
                (item) => item.category === 'wireless'
            );
            setProductData(filteredProducts);
        }
    };
    const handleSearch = e => {
        const searchTerm = e.target.value
        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        setProductData(searchedProducts)
    }
    return (
        <Helmet>
            <CommonSection title='Products' />
            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='3'>
                            <div className='filter_widget'>
                                <select onChange={handleFilter}>
                                    <option value=''>Filter By Category</option>
                                    <option value='sofa'>Sofa</option>
                                    <option value='chair'>Chair</option>
                                    <option value='mobile'>Mobile</option>
                                    <option value='watch'>Watch</option>
                                    <option value='wireless'>Wireless</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='3'>
                        <div className='filter_widget'>
                                <select>
                                    <option value=''>Filter By</option>
                                    <option value='ascending'>Ascending</option>
                                    <option value='descending'>Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className='search_box'>
                                <input type='text' placeholder='Search...' onChange={handleSearch} />
                                <span><i class="ri-search-line"></i></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='pt-0'>
                <Container>
                    <Row>
                        {
                            productsData.length === 0 ? (
                                <h1 className='text-center fs-4'>No Products Are Found!</h1>
                            ) : (
                                <ProductsList data={productsData} />
                            )
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Shop