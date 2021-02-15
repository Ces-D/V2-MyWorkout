import Container from "react-bootstrap/Container";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container>{children}</Container>
        </>
    );
};

export default Layout;
