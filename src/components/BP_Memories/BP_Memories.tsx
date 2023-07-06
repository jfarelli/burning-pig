import './BP_Memories.css';
import * as React from 'react';
import { Carousel, Container } from 'react-bootstrap';

// interface BP_MemoriesProps {}

const BP_Memories: React.FC = () => {
	// const BP_Memories: React.FC<BP_MemoriesProps> = () => {
	return (
		<Container className="carousel-container">
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="../../images/BP_2015/IMG_3685.jpeg"
						alt="Burning Pig 2015"
					/>
					<Carousel.Caption>
						<h3>Buring Pig 2015</h3>
						<p>SilverJack, CO</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Second slide&bg=282c34"
						alt="Burning Pig 2016"
					/>

					<Carousel.Caption>
						<h3>Buring Pig 2016</h3>
						<p>SilverJack, CO</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Third slide&bg=20232a"
						alt="Burning Pig 2017"
					/>

					<Carousel.Caption>
						<h3>Buring Pig 2017</h3>
						<p>SilverJack, CO</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Third slide&bg=20232a"
						alt="Burning Pig 2018"
					/>

					<Carousel.Caption>
						<h3>Buring Pig 2018</h3>
						<p>SilverJack, CO</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Third slide&bg=20232a"
						alt="Burning Pig 2019"
					/>

					<Carousel.Caption>
						<h3>Buring Pig 2019</h3>
						<p>SilverJack, CO</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Third slide&bg=20232a"
						alt="Burning Pig 2020"
					/>

					<Carousel.Caption>
						<h3>Buring Pig 2020</h3>
						<p>SilverJack, CO</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Third slide&bg=20232a"
						alt="Burning Pig 2021"
					/>

					<Carousel.Caption>
						<h3>Buring Pig 2021</h3>
						<p>SilverJack, CO</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Third slide&bg=20232a"
						alt="Burning Pig 2022"
					/>

					<Carousel.Caption>
						<h3>Buring Pig 2022</h3>
						<p>SilverJack, CO</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};

export default BP_Memories;
