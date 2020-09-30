import React from 'react';
import { Link } from 'react-router-dom';
// header-nav
function Header() {
	return (
		<div className='nav'>
			<div className='nav-item'>
				<span className='nav-logo'>
					<Link to='/'>iStonks</Link>
				</span>
			</div>
			<div className='nav-item'>
				<Link to='/stocks'>Stocks</Link>
			</div>
			<div className='nav-item'>
				<Link to='/about'>About</Link>
			</div>
            <div className='nav-search'>

            </div>
		</div>
	);
}
// tried adding a search, harder than i thought and not enough time to work on it
export default Header;
