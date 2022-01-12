import './Authorization.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Authorization = () => {
	// useEffect(() => {
	//    axios.post('')

	// })

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [clientId, setClientId] = useState('');

	const onCreatePost = (e) => {
		e.preventDefault();
		const postData = {
			email,
			password,
			firstName,
			lastName,
			clientId,
		};

		axios.post('https://sf-final-project.herokuapp.com/api/auth/sign_up', postData).then((res) => {
			console.log(res);
		});
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleChangeFirstName = (e) => {
		setFirstName(e.target.value);
	};
	const handleChangeLastName = (e) => {
		setLastName(e.target.value);
	};
	const handleChangeClientId = (e) => {
		setClientId(e.target.value);
	};

	return (
		<div className="authorization">
			<Header />
			<main className="auth-container">
				<div className="container">
					<div className="auth-content">
						<h1 className="auth-title">Регистрация на сайте</h1>
						<form className="auth-form form" onSubmit={onCreatePost}>
							<div className="form-column">
								<label htmlFor="email">E-mail:</label>
								<input type="text" id="email" value={email} onChange={handleChangeEmail} />
							</div>
							<div className="form-column">
								<label htmlFor="password">Пароль:</label>
								<input
									type="password"
									id="password"
									value={password}
									onChange={handleChangePassword}
								/>
							</div>
							<div className="form-column">
								<label htmlFor="firstName">Имя:</label>
								<input
									type="text"
									id="firstName"
									value={firstName}
									onChange={handleChangeFirstName}
								/>
							</div>
							<div className="form-column">
								<label htmlFor="lastName">Фамилия:</label>
								<input type="text" id="lastName" value={lastName} onChange={handleChangeLastName} />
							</div>
							<div className="form-column">
								<label htmlFor="clientId">Client ID:</label>
								<input type="text" id="clientId" value={clientId} onChange={handleChangeClientId} />
							</div>
							<button className="button" type="submit">
								Зарегистрироваться
							</button>
						</form>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};
