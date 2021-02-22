import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import withoutAuth from "../../components/hocs/withoutAuth";
import { useAuth } from "../../lib/authProvider";

function Register() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const { setAuthenticated } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/v1/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        response.status === 200
            ? setAuthenticated(true)
            : console.error("Register Error: ", response);
    };

    return (
        <div>
            <h1>Register Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Jolly Molly"
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
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default withoutAuth(Register);
