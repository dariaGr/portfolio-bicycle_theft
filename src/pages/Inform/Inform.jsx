import './Inform.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const Inform = () => {
	return (
		<div className="inform">
			<Header />
			<main className="inform-container">
				<div className="container">
					<div className="inform-content">
						<h1 className="inform-title">Сообщить о краже</h1>
						<form className="inform-form form">
							<div className="form-column">
								<label for="licenseNumber">Номер лицензии:</label>
								<input type="text" id="licenseNumber" />
							</div>
							<div className="form-column">
								<label for="ownerFullName">ФИО клиента:</label>
								<input type="text" id="ownerFullName" />
							</div>
							<div className="form-column">
								<label for="type">Тип велосипеда:</label>
								<select id="type">
									<option>General</option>
									<option>Sport</option>
								</select>
							</div>
							<div className="form-column">
								<label for="color">Цвет велосипеда:</label>
								<input type="text" id="color" />
							</div>
							<div className="form-column">
								<label for="date">Дата кражи:</label>
								<input type="date" id="date" />
							</div>
							<div className="form-column">
								<label for="description">Дополнительный комментарий:</label>
								<textarea id="description" />
							</div>
							<button className="button" type="submit">
								Отправить
							</button>
						</form>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};
