import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import cat1 from '../../assets/img/categories/cat1.jpg'
import Pagination from 'react-bootstrap/Pagination';
import { Container } from 'react-bootstrap'


const ProductDisplay = () => {
    return (
        <>
            <Container>
                
            </Container>
            {Array.from({ length: 2 }).map((_, idx) => (
                <Row className="g-4 pb-2 w-75 mx-auto">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                    <Card >
                        <Card.Img variant="top" src={cat1} width='100' height='150' />
                        <Card.Body >
                        <Card.Title>Product 1</Card.Title>
                        <Card.Text>
                        120.000 VNĐ
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                 ))}
                </Row>
            ))}

            <Pagination className="mx-auto" style={{width:300}}>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item native>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>

        </>
    )
}

export default ProductDisplay


