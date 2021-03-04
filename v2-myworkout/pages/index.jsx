import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetchJson from "../lib/fetchJson";
// import useInitialSync from "../lib/useInitialSync";

function Home({ syncStatus }) {
    // const { syncStatus, loadingSyncStatus } = useInitialSync();
    console.log(syncStatus);
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

export async function getStaticProps() {
    const res = fetchJson("api/initial");
    return { props: { syncStatus: res } };
}

export default Home;
