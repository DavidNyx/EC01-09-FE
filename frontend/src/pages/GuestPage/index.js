import React from 'react'
import HeaderGuest from "../../components/headerGuest"
import NavbarSex from '../../components/NavBar'
import Container from 'react-bootstrap/Container';
import ProductDisplay from '../../components/productDisplay';
import Outstanding from '../../components/outstanding';

const GuestPage = () => {
    return(
        <>
            <HeaderGuest />
            <NavbarSex />
            <Container>
                <Outstanding className="p-2"/>
                <ProductDisplay className="p-2"/>
            </Container>
        </>
    )
}

export default GuestPage 

