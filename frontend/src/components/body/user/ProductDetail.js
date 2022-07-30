import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';

import cat1 from '../../../assets/img/categories/cat1.jpg'
import cat2 from '../../../assets/img/categories/cat-2.jpg'
import cat3 from '../../../assets/img/categories/cat-3.jpg'
import cat4 from '../../../assets/img/categories/cat-4.jpg'

import './ProductDetail.css'

const ProductDetail = () => {
   return (
        <>
          <h2>Tên sản phẩm</h2>
          <Row>
            <Col>
            <h4 class="text-left">Hình ảnh</h4>
            <hr />
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cat1}
                  alt="First slide"
                  height='350'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cat2}
                  alt="Second slide"
                  height='350'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cat3}
                  alt="Third slide"
                  height='350'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cat4}
                  alt="Four slide"
                  height='350'
                />
              </Carousel.Item>
            </Carousel>


            <div>
              <Row className="mx-auto w-100 px-2">
                 <Col className="px-0">
                    <Image variant="top" src={cat1} width='100' height='100'/>
                 </Col>
                 <Col className="px-0">
                    <Image variant="top" src={cat2} width='100' height='100'/>
                 </Col>
                 <Col className="px-0">
                    <Image variant="top" src={cat3} width='100' height='100'/>
                 </Col>
                 <Col className="px-0">
                    <Image variant="top" src={cat4} width='100' height='100'/>
                 </Col>
              </Row>
            </div>
            </Col>
            <Col>
              <Row>
                <Col>
                <h4 class="text-left">Mô tả</h4>
                <hr />
                <p class="text-left"> Giày Thể Thao Nike Court Borough Low 2 GS 'White' BQ5448-118 Màu Trắng có thiết kế trẻ trung, năng động đến từ thương hiệu Nike nổi tiếng của Mỹ. Mẫu giày được làm từ chất liệu cao cấp, bền đẹp trong suốt quá trình sử dụng.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                <hr />
                    <div className="FormSelect">
                      <Row>
                        <Col>
                            <Form.Label >Size :</Form.Label>
                            <Form.Control as="select">
                              <option>Chọn</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Màu :</Form.Label>
                            <Form.Control as="select">
                              <option>Chọn</option>
                              <option value="1">Trắng</option>
                              <option value="2">Đen</option>
                              <option value="3">Đỏ</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <i className="fa-thin fa-circle-heart"></i>
                            
                        </Col>
                      </Row>
                    </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </>

  )
}

export default ProductDetail
