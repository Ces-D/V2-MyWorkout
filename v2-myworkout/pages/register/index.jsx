import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import fetchJson from "../../lib/fetchJson";
import useUser from "../../lib/useUser";

function Register() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState("");
    const { mutateUser } = useUser({
        redirectTo: "/profile",
        redirectIfFound: true,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await mutateUser(
                fetchJson("/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password }),
                })
            );
        } catch (error) {
            console.error("Registration Error From Page: ", error.message);
            setErrorMsg(error);
        }
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
                {errorMsg && <p className="danger">{errorMsg}</p>}
            </Form>
        </div>
    );
}

export default Register;
