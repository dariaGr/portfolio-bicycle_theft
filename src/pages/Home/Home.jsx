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
							We are a bicycle rental company in major cities of the world.
							<br />
							<span>Let us know about a bike theft.</span>
						</h1>
						<div className="home-bottom">
							<div className="home-inform">
								<Link to="/inform-client">
									<button className="inform-button button" type="button">
										Report Theft
									</button>
								</Link>
							</div>
							<div className="home-registration">
								<button className="home-button button" type="button">
									<Link to="/log">Log in</Link>
								</button>
								<button className="home-button button" type="button">
									<Link to="/auth">Sign up</Link>
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
