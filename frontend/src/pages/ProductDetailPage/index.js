import React from 'react'
import { Container } from 'react-bootstrap';
import ProductDetail from '../../components/body/user/ProductDetail';
import HeaderHome from '../../components/headerHome';


const ProductDetailPage = () => {
    return(
        <>
            <HeaderHome/>
            <Container>
                <ProductDetail />
            </Container>
        </>
    )
}

export default ProductDetailPage 

