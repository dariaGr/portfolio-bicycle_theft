import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Inform } from './pages/Inform';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/inform" component={Inform} />
			</Switch>
			<Footer />
		</Router>
	);
};
