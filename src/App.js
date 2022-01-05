import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components';
import './App.scss';

function App () {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<Home />
				</header>
			</div>
		</Router>
	);
}

export default App;
