import './Login.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const Login = () => {
	const [email, setEmail] = useState(''); // email = grb747@inbox.ru
	const [password, setPassword] = useState(''); // password = qwerty123
	const [success, setSuccess] = useState(false);
	const [token, setToken] = useState('');

	const login = async (email, password) => {
		try {
			const response = await axios.post(`https://sf-final-project.herokuapp.com/api/auth/sign_in`, {
				email,
				password
			})
			setToken(response.data.data.token)
			setSuccess(true)
		} catch (e) {
			console.log(e)
		}
	}

	const logForm = <div className="log-form form">
		<h1 className="log-title">Log in</h1>
		<div className="form-column">
			<label for="login">Username:</label>
			<input type="text" id="login" value={email} onChange={(event) => setEmail(event.target.value)} />
		</div>
		<div className="form-column">
			<label for="password">Password:</label>
			<input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
		</div>
		<button className="button" type="submit" onClick={() => { login(email, password) }}>Войти</button>
	</div>

	return (
		<div className="log">
			<Header />
			<main className="log-container">
				<div className="container">
					<div className="log-content">
						{success ? <><h1 className="log-title">You have success logged in!</h1><Link to={{ pathname: "/user-account", token: token }}><button className="success-button button" type='button'>Ok</button></Link></> : logForm}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};
