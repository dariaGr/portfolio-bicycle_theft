import './InformClient.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Inform } from '../../components/Inform';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const InformClient = () => {
	const [licenseNumber, setLicenseNumber] = useState('') //123qwe
	const [ownerFullName, setOwnerFullName] = useState('') // Иванов Иван Иванович
	const [clientId, setClientId] = useState('')
	const [type, setType] = useState('general')
	const [color, setColor] = useState('')
	const [date, setDate] = useState('')
	const [description, setDescription] = useState('')
	const [success, setSuccess] = useState(false)

	const informClientFunc = async (licenseNumber, ownerFullName, clientId, type, color, date, description) => {
		try {
			const response = await axios.post(`https://sf-final-project.herokuapp.com/api/public/report`, {
				licenseNumber,
				ownerFullName,
				clientId,
				type,
				color,
				date,
				description
			})
			setSuccess(true)
		} catch (e) {
			console.log(e)
		}
	}

	const informClientForm = <>
		{/* <Inform licenseNumber={licenseNumber} ownerFullName={ownerFullName} clientId={clientId} type={type} color={color} date={date} description={description} setLicenseNumber={setLicenseNumber} setOwnerFullName={setOwnerFullName} setClientId={setClientId} setType={setType} setColor={setColor} setDate={setDate} setDescription={setDescription} /> */}
		<div className="inform-content">
			<h1 className="inform-title">Сообщить о краже</h1>
			<div className="inform-form form">
				<div className="form-column">
					<label htmlFor="licenseNumber">Номер лицензии:</label>
					<input type="text" id="licenseNumber" value={licenseNumber} onChange={(event) => setLicenseNumber(event.target.value)} />
				</div>
				<div className="form-column">
					<label htmlFor="ownerFullName">ФИО клиента:</label>
					<input type="text" id="ownerFullName" value={ownerFullName} onChange={(event) => setOwnerFullName(event.target.value)} />
				</div>
				<div className="form-column">
					<label htmlFor="clientId">Client ID:</label>
					<input type="text" id="clientId" value={clientId} onChange={(event) => setClientId(event.target.value)} />
				</div>
				<div className="form-column">
					<label htmlFor="type">Тип велосипеда:</label>
					<select id="type" onChange={(event) => setType(event.target.value)}>
						<option value="general">General</option>
						<option value="sport">Sport</option>
					</select>
				</div>
				<div className="form-column">
					<label htmlFor="color">Цвет велосипеда:</label>
					<input type="text" id="color" value={color} onChange={(event) => setColor(event.target.value)} />
				</div>
				<div className="form-column">
					<label htmlFor="date">Дата кражи:</label>
					<input type="date" id="date" value={date} onChange={(event) => setDate(event.target.value)} />
				</div>
				<div className="form-column">
					<label htmlFor="description">Дополнительный комментарий:</label>
					<textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
				</div>
			</div>
		</div>
		<button className="button inform-client-button" type="submit" onClick={() => informClientFunc(licenseNumber, ownerFullName, clientId, type, color, date, description)}>
			Отправить
		</button></>

	return (
		<div className="inform-client">
			<Header />
			<main className="inform-client-container container">
				{success ? <><h1 className="auth-title">Ваше сообщение о краже отправлено!</h1><Link to="/"><button className="success-button button" type='button'>Ok</button></Link></> : informClientForm}
			</main>
			<Footer />
		</div>
	);
};
