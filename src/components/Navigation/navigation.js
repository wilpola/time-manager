import { NavLink as Link } from 'react-router-dom';

// navigation component
const Navigation = () => {
	return (
		<div>
			<div className='nav-logo'> time-manager </div>
			<div className='nav-links'>
				<Link to='/'> Home </Link>
			</div>
		</div>
	);
};

export default Navigation;
