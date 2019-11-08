import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<NavLink to="/productos" className="navbar-brand">
						React CRUD & Routing
					</NavLink>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink
								to="/productos"
								className="nav-link"
								activeClassName="active"
								exact
							>
								Productos
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/productos/nuevo"
								className="nav-link"
								activeClassName="active"
							>
								Nuevo productos
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
