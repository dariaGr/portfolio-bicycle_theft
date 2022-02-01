import './Authorization.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Authorization = () => {
	const [email, setEmail] = useState(''); // email = grb747@inbox.ru
	const [password, setPassword] = useState(''); // password = qwerty123
	const [firstName, setFirstName] = useState(''); // Daria
	const [lastName, setLastName] = useState(''); // Grebenjuk
	const [clientId, setClientId] = useState(''); // clientId = 135d6dd0-b365-450c-899a-ea5b3216258b
	const [success, setSuccess] = useState(false)

	const registration = async (email, password, firstName, lastName, clientId) => {
		try {
			const response = await axios.post(`https://sf-final-project.herokuapp.com/api/auth/sign_up`, {
				email,
				password,
				firstName,
				lastName,
				clientId
			})
			setSuccess(true)
		} catch (e) {
			console.log(e)
		}
	}

	const regForm =
		<div className="auth-form form">
			<h1 className="auth-title">Sign up</h1>
			<div className="form-column">
				<label htmlFor="email">E-mail:</label>
				<input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
			</div>
			<div className="form-column">
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
			</div>
			<div className="form-column">
				<label htmlFor="firstName">First Name:</label>
				<input
					type="text"
					id="firstName"
					value={firstName}
					onChange={(event) => setFirstName(event.target.value)}
				/>
			</div>
			<div className="form-column">
				<label htmlFor="lastName">Last Name:</label>
				<input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
			</div>
			<div className="form-column">
				<label htmlFor="clientId">Client ID:</label>
				<input type="text" id="clientId" value={clientId} onChange={(event) => setClientId(event.target.value)} />
			</div>
			<button className="button" type="submit" onClick={() => registration(email, password, firstName, lastName, clientId)}>
				Sign up
			</button>
		</div >

	return (
		<div className="authorization">
			<Header />
			<main className="auth-container">
				<div className="container">
					<div className="auth-content">
						{success ? <><h1 className="auth-title">You have successfully registered!</h1><Link to="/user-account"><button className="success-button button" type='button'>Ok</button></Link></> : regForm}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};
