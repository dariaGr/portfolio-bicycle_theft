import './UserAccount.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

export const UserAccount = () => {
	return (
		<div className="user-account">
			<Header />
			<main className="user-account-container">
				<div className="container">
					<div className="user-account-content">
						<h1 className="user-account-title">Учетная запись</h1>
						<div className="user-account-info">
							<Link to="/stolen-bicycles">
								<div className="user-account-desc">
									<p>Сообщения о кражах</p>
								</div>
							</Link>
							<Link to="/bicycle-details">
								<div className="user-account-desc">
									<p>Детальная страница сообщения о краже</p>
								</div>
							</Link>
							<Link to="/responsible-employees">
								<div className="user-account-desc">
									<p>Ответственные сотрудники</p>
								</div>
							</Link>
							<Link to="/employee-details">
								<div className="user-account-desc">
									<p>Детальная страница сотрудника</p>
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
