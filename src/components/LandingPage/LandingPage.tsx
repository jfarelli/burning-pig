import './LandingPage.css';
import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// interface LandingPageProps {}

const LandingPage: React.FC = () => {
	// const LandingPage: React.FC<LandingPageProps> = () => {
	return (
		<Container className="landing-container">
			<h1 className="bp-title">BURNING PIG</h1>
			<p className="bp-description">
				A shared experience built on adventure, community, and delicious pigs.
			</p>
			<Link to="/bp-main" style={{ textDecoration: 'none', color: 'inherit' }}>
				<div className="bp-enter-button"><Button>ENTER</Button></div>
			</Link>
		</Container>
	);
};

export default LandingPage;
