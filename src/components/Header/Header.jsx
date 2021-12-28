import logo from '../../assets/logo.png';
import './Header.css';

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-body">
					<a href="#" className="header-logo">
						<img src={logo} alt="" />
					</a>
					<nav className="header-menu">
						<ul className="menu-list">
							<li className="menu-item">
								<a href="#" className="menu-link">
									Вход
								</a>
							</li>
							<li className="menu-item">
								<a href="#" className="menu-link">
									Регистрация
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
