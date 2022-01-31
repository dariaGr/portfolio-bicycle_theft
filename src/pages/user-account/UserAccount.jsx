import './UserAccount.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link, useLocation } from 'react-router-dom';

export const UserAccount = () => {
	const location = useLocation()
	const token = location.token

	return (
		<div className="user-account">
			<Header />
			<main className="user-account-container">
				<div className="container">
					<div className="user-account-content">
						<h1 className="user-account-title">Учетная запись</h1>
						<div className="user-account-info">
							<Link to="/inform-employee">
								<button className="inform-button button" type="button">
									Сообщить о краже
								</button>
							</Link>
							<Link to={{ pathname: "/stolen-bicycles", token: token }}>
								<div className="user-account-desc">
									<p>Сообщения о кражах</p>
								</div>
							</Link>
							<Link to="/responsible-employees">
								<div className="user-account-desc">
									<p>Ответственные сотрудники</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};
