import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import logo from '../../logo.svg';
import './navbar.css';


const NavBar = () => {

    return (
        <div>
            <div className="header__style">
                <Navbar expand="lg" className="fondNavbar">
                    <Navbar.Brand href="/">
                        <Nav>
                            Blog
                        </Nav>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="/" >Home</Nav.Link>
                            <Nav.Link href="/admin/listArticles" >Liste des articles</Nav.Link>
                            <Nav.Link href="/admin/addArticle">Ajouter un article</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div >
    );
}

export default NavBar;