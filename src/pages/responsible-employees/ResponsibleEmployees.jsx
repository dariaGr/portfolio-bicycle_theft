import './ResponsibleEmployees.css';
import { Header } from '../../components/Header';
import {Footer} from '../../components/Footer';
import { Link } from 'react-router-dom';

export const ResponsibleEmployees = () => {
	return (
		<div className="employees">
			<Header />
			<main className="employees-container">
				<div className="container">
					<div className="employees-content">
						<Link className="employees-back" to="/user-account">
							Назад
						</Link>
						<h1 className="employees-title">Ответственные сотрудники</h1>
						<table className="employees-table">
							<tr>
								<th>Сотрудник</th>
								<th>Подробнее</th>
							</tr>
							<tr>
								<td>Сотрудник №1</td>
								<td>данные</td>
							</tr>
							<tr>
								<td>Сотрудник №2</td>
								<td>данные</td>
							</tr>
							<tr>
								<td>Сотрудник №3</td>
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
