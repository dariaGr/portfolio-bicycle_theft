import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { InformClient } from './pages/inform-client/InformClient';
import { InformEmployee } from './pages/inform-employee/InformEmployee';
import { Authorization } from './pages/authorization';
import { Login } from './pages/login';
import { UserAccount } from './pages/user-account';
import { StolenBicycles } from './pages/stolen-bicycles/StolenBicycles';
import { BicycleDetails } from './pages/bicycle-details';
import { ResponsibleEmployees } from './pages/responsible-employees';
import { EmployeeDetails } from './pages/employee-details/EmployeeDetails';

export const App = () => {


	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/inform-client" component={InformClient} />
				<Route path="/inform-employee" component={InformEmployee} />
				<Route path="/auth" component={Authorization} />
				<Route path="/log" component={Login} />
				<Route path="/user-account" component={UserAccount} />
				<Route path="/stolen-bicycles" component={StolenBicycles} />
				<Route path="/bicycle-details" component={BicycleDetails} />
				<Route path="/responsible-employees" component={ResponsibleEmployees} />
				<Route path="/employee-details" component={EmployeeDetails} />
			</Switch>
		</Router>
	);
};
