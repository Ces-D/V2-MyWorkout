import Link from "next/link";
import Nav from "react-bootstrap/Nav";

function HeaderItems(props) {
    const navItems = {
        isAuthenticated: [
            { id: 1, link: "/", text: "Home" },
            { id: 2, link: "#account", text: "Account" },
            { id: 3, link: "#logout", text: "Logout" },
        ],
        notAuthenticated: [{ id: 1, link: "#login", text: "Login" }],
    };

    if (props.isAuthenticated) {
        return (
            <Nav className="justify-content-end">
                {navItems.isAuthenticated.map((item) => (
                    <Nav.Item className="mr-3" key={item.id}>
                        <Link href={item.link}>{item.text}</Link>
                    </Nav.Item>
                ))}
            </Nav>
        );
    } else {
        return (
            <Nav className="justify-content-end">
                {navItems.notAuthenticated.map((item) => (
                    <Nav.Item className="mr-3" key={item.id}>
                        <Link href={item.link}>{item.text}</Link>
                    </Nav.Item>
                ))}
            </Nav>
        );
    }
}
export default HeaderItems;
