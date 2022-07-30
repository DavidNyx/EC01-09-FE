import React from 'react'
import NavbarSex from '../../components/NavBar'
import Container from 'react-bootstrap/Container';
import ProductDisplay from '../../components/productDisplay';
import HeaderHome from '../../components/headerHome';
import Outstanding from '../../components/outstanding';

const HomePage = () => {
    return(
        <>
            <HeaderHome/>
            <NavbarSex />
            <Container>
                <Outstanding className="p-5"/>
                <ProductDisplay className="p-5"/>
            </Container>
        </>
    )
}

export default HomePage 

