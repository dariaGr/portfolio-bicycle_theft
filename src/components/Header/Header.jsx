import logo from '../../assets/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-body">
					<Link to="/" className="header-logo">
						<img src={logo} alt="" />
					</Link>
					<nav className="header-menu">
						<ul className="menu-list">
							<li className="menu-item">
								<Link to="/log" className="menu-link">
									Log in
								</Link>
							</li>
							<li className="menu-item">
								<Link to="/auth" className="menu-link">
									Sign up
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
