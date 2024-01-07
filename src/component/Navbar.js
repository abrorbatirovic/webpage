import React, {Fragment, useState} from 'react';
import logo from '../assets/img/Logo.png'
import {Navbar as BootstrapNavbar, Container, NavbarCollapse, Nav, Button} from "react-bootstrap";
import SignIn from "./SignIn";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
       <Fragment>
           <BootstrapNavbar expand={'lg'}>
               <Container>
                   <BootstrapNavbar.Brand href={"#"}>
                       <img src={logo} alt="Logo" width={134} height={66}/>
                   </BootstrapNavbar.Brand>
                   <NavbarCollapse className={'justify-content-end'}>
                       <Nav className={'d-flex align-items-center gap-3'}>
                           <Nav.Link className={'text-white'}>О комплексе</Nav.Link>
                           <Nav.Link className={'text-white'}>Район</Nav.Link>
                           <Nav.Link className={'text-white'}>Каталог квартир</Nav.Link>
                           <Nav.Link className={'text-white'}>Ипотека</Nav.Link>
                           <Nav.Link className={'text-white'}>Контакты</Nav.Link>
                           <Nav.Link onClick={toggleModal} className={'text-white'}>
                               <Button variant="outline-light">Войти</Button>
                           </Nav.Link>
                       </Nav>
                   </NavbarCollapse>
               </Container>
           </BootstrapNavbar>

           <SignIn show={showModal} toggleModal={toggleModal} />
       </Fragment>
    );
};

export default Navbar;
