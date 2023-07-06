import './LandingPage.css'
import * as React from 'react';
import { Button, Container } from 'react-bootstrap';

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
	return (
		<Container className='landing-container'>
			<h1 className='bp-title'>BURNING PIG</h1>
			<p className='bp-description'>
				A shared experience built on adventure, community, and delicious pigs.
			</p>
			<Button className='bp-enter-button'>ENTER</Button>
		</Container>
	);
};

export default LandingPage;
