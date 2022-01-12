import './Home.css';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const Home = () => {
	return (
		<div className="home">
			<Header />
			<main className="home-container">
				<div className="container">
					<div className="home-content">
						<h1 className="home-description">
							Мы - компания, занимающаяся прокатом велосипедов в крупных городах России.
							<br />
							<span>Сообщите нам о краже велосипеда.</span>
						</h1>
						<div className="home-bottom">
							<div className="home-inform">
								<Link to="/inform">
									<button className="inform-button button" type="button">
										Сообщить о краже
									</button>
								</Link>
							</div>
							<div className="home-registration">
								<button className="home-button button" type="button">
									<Link to="/reg">Войти </Link>
								</button>
								<button className="home-button button" type="button">
									<Link to="/auth">Зарегистрироваться</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};
