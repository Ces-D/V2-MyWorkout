import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col className="col-md-8 mx-auto">
                        <h1 className="text-center">My Workout Tracker</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-8 mx-auto">
                        <h3 className="text-center">
                            Save a tree! Track your progress online.
                        </h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
