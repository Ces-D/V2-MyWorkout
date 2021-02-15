import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import HeaderItems from "./HeaderItems";

export default function Header() {
    return (
        <Container>
            <Navbar className="sticky-top">
                <Navbar.Brand href="#home">MyWorkouts</Navbar.Brand>
                <Nav className="mr-auto">
                    <HeaderItems isAuthenticated={false} />
                </Nav>
            </Navbar>
        </Container>
    );
}
