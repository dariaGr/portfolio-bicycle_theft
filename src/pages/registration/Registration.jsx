import './Registration.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

export const Registration = () => {
	return (
		<div className="registration">
			<Header />
			<main className="reg-container">
				<div className="container">
					<div className="reg-content">
						<h1 className="reg-title">Вход в личный кабинет</h1>
						<form className="reg-form form">
							<div className="form-column">
								<label for="login">Логин:</label>
								<input type="text" id="login" />
							</div>
							<div className="form-column">
								<label for="password">Пароль:</label>
								<input type="password" id="password" />
							</div>
							<Link to="/user-account">
								<button className="button">Войти</button>
							</Link>
						</form>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};
