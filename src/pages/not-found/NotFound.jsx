import './NotFound.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Click on the home page button</h1>
            <Link to="/">
                <button className="button">Home Page</button>
            </Link>
        </div>
    )
};

