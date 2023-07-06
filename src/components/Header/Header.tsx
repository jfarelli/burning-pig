import './Header.css';
import * as React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// interface HeaderProps {}

const Header: React.FC = () => {
	// const Header: React.FC<HeaderProps> = () => {
	return (
		<Navbar collapseOnSelect expand="md" className="navbar">
			<Container className="navbar-container">
				<Link to='/' style={{textDecoration: 'none'}}><Navbar.Text className="navbar-title">Burning Pig</Navbar.Text></Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Link
							to="/bp-memories"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<Nav.Link className="navbar-link">The Memories</Nav.Link>
						</Link>
						<Link
							to="/bp-people"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<Nav.Link className="navbar-link">The People</Nav.Link>
						</Link>
						<Link
							to="/bp-pigs"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<Nav.Link className="navbar-link">The Pigs</Nav.Link>
						</Link>
						<Link
							to="/bp-reason"
							style={{ textDecoration: 'none', color: 'inherit' }}
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
