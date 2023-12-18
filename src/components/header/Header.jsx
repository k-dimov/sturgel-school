import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { logout } from "../../api/userApi";

function Header({setUser}) {
    const user = useContext(AuthContext);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className={styles.navContainer}>
                <Navbar.Brand as={Link} to="/home">
                    <img
                        src="public/logo-black.png"
                        alt="ela"
                        className={styles.logo}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={styles.basicNavbar}
                >
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">
                            За проекта
                        </Nav.Link>
                        <Nav.Link as={Link} to="/donations">
                            Дарения
                        </Nav.Link>
                        <div className={styles.auth}>
                            {user.uid ? (
                                <Nav.Link as={Link} to='/logout'>
                                    Излез
                                </Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/login">
                                        Влез
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/register">
                                        Регистрирай се
                                    </Nav.Link>
                                </>
                            )}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
