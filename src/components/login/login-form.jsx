import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { getUser, login } from "../../api/user";
import { useStore } from "../../store";
import { userLogin } from "../../store/user/actions";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const { dispatchUser } = useStore();
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();

		if (!email) {
			setError("Email is required");
			return;
		}

		if (!password) {
			setError("Password is required");
			return;
		}

		const payload = {
			email,
			password,
		};

		try {
			const resAuth = await login(payload);
			const { token } = resAuth;

			localStorage.setItem("token", token);
			// normalde sifrelenerek saklanir

			const resUser = await getUser();
			dispatchUser(userLogin(resUser));
			navigate("/", { replace: true });
		} catch (err) {
			console.log(err);
			setError(err.message);
		}
	};

	return (
		<Form noValidate onSubmit={handleLogin}>
			{error ? <Alert variant="danger">{error}</Alert> : null}

			<Form.Group className="mb-3">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					placeholder="name@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Group>

			<Button variant="warning" type="submit">
				Login
			</Button>
		</Form>
	);
};

export default LoginForm;