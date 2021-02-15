import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import HeaderItems from "./HeaderItems";

export default function Header() {
    return (
        <Container>
            <Navbar className="sticky-top">
                <Navbar.Brand href="/">MyWorkouts</Navbar.Brand>
                <HeaderItems isAuthenticated={false} />
            </Navbar>
        </Container>
    );
}
