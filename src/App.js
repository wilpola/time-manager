import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Navigation } from './components';
import './App.scss';

function App() {
	return (
		<Router>
			<Navigation />
			<div className='App'>
				<header className='App-header'>
					<Home />
				</header>
			</div>
		</Router>
	);
}

export default App;
