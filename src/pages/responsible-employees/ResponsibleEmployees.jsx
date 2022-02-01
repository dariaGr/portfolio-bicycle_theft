import './ResponsibleEmployees.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

export const ResponsibleEmployees = () => {
	return (
		<div className="employees">
			<Header />
			<main className="employees-container">
				<div className="container">
					<div className="employees-content">
						<Link className="employees-back" to="/user-account">
							Back
						</Link>
						<h1 className="employees-title">Responsible employees</h1>
						<table className="employees-table">
							<tr>
								<th>Employee</th>
								<th>Detail</th>
							</tr>
							<tr>
								<td>Employee</td>
								<td>Detail</td>
							</tr>
							<tr>
								<td>Employee</td>
								<td>Detail</td>
							</tr>
							<tr>
								<td>Сотрудник №3</td>
								<td>Detail</td>
							</tr>
						</table>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};
