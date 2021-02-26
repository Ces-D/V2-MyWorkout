import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import RequestErrorBoundary from "../../components/RequestErrorBoundary";
import withoutAuth from "../../components/hocs/withoutAuth";
import { useAuth } from "../../lib/authProvider";

function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const { setAuthenticated } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        response.status === 200
            ? setAuthenticated(true)
            : console.error("Login Error: ", response);
    };

    return (
        // <RequestErrorBoundary>
        <div>
            <h1>Login Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Billy Bob"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password123"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
        // </RequestErrorBoundary>
    );
}

export default withoutAuth(Login);
