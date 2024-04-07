import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";

const AppLayout = () => {
    const navigate = useNavigate();
    
    return (
        <LayoutUser>
            <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary navigation_bar">
                <Container fluid>
                    <Navbar.Brand href="#" onClick={() => navigate('/')}>CINE LIB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className="menu_btn" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px", transition: "0.2s" }}
                            navbarScroll
                        >
                            <Nav.Link href="#" onClick={() => navigate('/')}>Home</Nav.Link>
                            <Nav.Link href="#" onClick={() => navigate('/movies')}>Movies</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </LayoutUser>
    );
};

export default AppLayout;

const LayoutUser = styled.div`
    .navigation_bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7) !important;
        z-index: 1000;

        .navbar-brand {
            width: 172px;
            height: 26px;
            text-indent: -99999px;
            background-image: url('/assets/logo01.svg');
            background-position: left center;
            background-repeat: no-repeat;
            background-size: auto 100%;
        }

        a {
            transition: 0.2s;
            &:hover {
                color: var(--color-primary);
            }
        }
        .menu_btn {
            border: 0 !important;
            transition: 0.2s;
        }
    }
`;