import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import styles from './Header.module.css'

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className={styles.navContainer}>
                <Navbar.Brand as={Link} to="/home">
                    <img src="public/logo-black.png" alt="ela" className={styles.logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.basicNavbar}>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">За проекта</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                        <Nav.Link as={Link} to="/login">
                            Влез
                        </Nav.Link>
                        <Nav.Link as={Link} to="/register">
                            Регистрирай се
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
