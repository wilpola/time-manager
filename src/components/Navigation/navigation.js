import { NavLink as Link } from 'react-router-dom';

// styles
import './navigation-styles.scss';

// navigation component
const Navigation = () => {
	return (
		<div id='navigation-container'>
			<div className='nav-logo'> time-manager </div>
			<div className='nav-links'>
				<Link to='/'> Home </Link>
			</div>
		</div>
	);
};

export default Navigation;
