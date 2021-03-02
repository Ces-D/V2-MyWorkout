import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useRouter } from "next/router";

import fetchJson from "../../lib/fetchJson";
import useUser from "../../lib/useUser";

function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const router = useRouter();
    const [errorMsg, setErrorMsg] = useState("");
    const { mutateUser } = useUser({
        redirectTo: "/profile",
        redirectIfFound: true,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await mutateUser(
                fetchJson("/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password }),
                })
            );
            router.push("/profile");
        } catch (error) {
            console.error("Login Error ", error);
            setErrorMsg(error.data.message);
        }
    };

    return (
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
                {errorMsg && <p className="danger">{errorMsg}</p>}
            </Form>
        </div>
    );
}

export default Login;
