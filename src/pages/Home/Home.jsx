import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<div className="home">
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
									Войти
								</button>
								<button className="home-button button" type="button">
									Зарегистрироваться
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
