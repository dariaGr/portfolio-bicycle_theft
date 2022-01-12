import './StolenBicycles.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

export const StolenBicycles = () => {
	return (
		<div className="bicycles">
			<Header />
			<main className="bicycles-container">
				<div className="container">
					<div className="bicycles-content">
						<Link className="bicycles-back" to="/user-account">
							Назад
						</Link>
						<h1 className="bicycles-title">Сообщения о кражах</h1>
						<table className="bicycles-table">
							{/* <caption>Сообщения о кражах</caption> */}
							<tr>
								<th>Велосипед</th>
								<th>Подробнее</th>
							</tr>
							<tr>
								<td>Велосипед №1</td>
								<td>данные</td>
							</tr>
							<tr>
								<td>Велосипед №2</td>
								<td>данные</td>
							</tr>
							<tr>
								<td>Велосипед №3</td>
								<td>данные</td>
							</tr>
						</table>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};
