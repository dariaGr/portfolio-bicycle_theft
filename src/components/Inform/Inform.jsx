import './Inform.css';


export const Inform = ({ licenseNumber, ownerFullName, clientId, type, color, date, description, setLicenseNumber, setOwnerFullName, setClientId, setType, setColor, setDate, setDescription }) => {
    return (
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
                    <select id="type" value={type} onChange={(event) => setType(event.target.value)}>
                        <option>General</option>
                        <option>Sport</option>
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
    )
}


