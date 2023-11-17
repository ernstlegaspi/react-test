import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/">
				<h1>Homepage</h1>
			</Link>
			<div>
				<Link to="/about/">
					<div>About Page</div>
				</Link>
				<Link to="/contact/">
					<div>Contact Page</div>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
