import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

import { useIsAuthenticated } from "../lib/authProvider";

export default function Header() {
    const isAuthenticated = useIsAuthenticated();
    const navItems = {
        isAuthenticated: [
            { id: 1, link: "/", text: "Home" },
            { id: 2, link: "/profile", text: "Profile" },
            { id: 3, link: "/logout", text: "Logout" },
        ],
        notAuthenticated: [
            { id: 1, link: "/login", text: "Login" },
            { id: 2, link: "/register", text: "Register" },
        ],
    };
    return (
        <Container>
            <Navbar className="sticky-top">
                <Navbar.Brand href="/">MyWorkouts</Navbar.Brand>
                {isAuthenticated ? (
                    <Nav className="justify-content-end">
                        {navItems.isAuthenticated.map((item) => (
                            <Nav.Item className="mr-3" key={item.id}>
                                <Link href={item.link}>{item.text}</Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                ) : (
                    <Nav className="justify-content-end">
                        {navItems.notAuthenticated.map((item) => (
                            <Nav.Item className="mr-3" key={item.id}>
                                <Link href={item.link}>{item.text}</Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                )}
            </Navbar>
        </Container>
    );
}
