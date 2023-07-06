import './Header.css';
import * as React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
	const location = useLocation();

	const isMemoriesPage = location.pathname === '/bp-memories';
	const isPeoplesPage = location.pathname === '/bp-people';
	const isPigsPage = location.pathname === '/bp-pigs';
	const isReasonPage = location.pathname === '/bp-reason';

	return (
		<Navbar collapseOnSelect expand="md" className="navbar">
			<Container className="navbar-container">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<Navbar.Text className="navbar-title">Burning Pig</Navbar.Text>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Link
							to="/bp-memories"
							style={{
								textDecoration: 'none',
								color: isMemoriesPage ? '#f3bc78' : 'inherit',
								backgroundColor: isMemoriesPage ? '#a14b40' : 'inherit',
								borderRadius: isMemoriesPage ? '15px' : 'inherit',
							}}
						>
							<Nav.Link className="navbar-link">The Memories</Nav.Link>
						</Link>
						<Link
							to="/bp-people"
							style={{
								textDecoration: 'none',
								color: isPeoplesPage ? '#f3bc78' : 'inherit',
								backgroundColor: isPeoplesPage ? '#a14b40' : 'inherit',
								borderRadius: isPeoplesPage ? '15px' : 'inherit',
							}}
						>
							<Nav.Link className="navbar-link">The People</Nav.Link>
						</Link>
						<Link
							to="/bp-pigs"
							style={{
								textDecoration: 'none',
								color: isPigsPage ? '#f3bc78' : 'inherit',
								backgroundColor: isPigsPage ? '#a14b40' : 'inherit',
								borderRadius: isPigsPage ? '15px' : 'inherit',
							}}
						>
							<Nav.Link className="navbar-link">The Pigs</Nav.Link>
						</Link>
						<Link
							to="/bp-reason"
							style={{
								textDecoration: 'none',
								color: isReasonPage ? '#f3bc78' : 'inherit',
								backgroundColor: isReasonPage ? '#a14b40' : 'inherit',
								borderRadius: isReasonPage ? '15px' : 'inherit',
							}}
						>
							<Nav.Link className="navbar-link">The Reason</Nav.Link>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
