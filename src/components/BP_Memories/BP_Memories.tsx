import './BP_Memories.css';
import * as React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const BP_Memories: React.FC = () => {
	return (
		<Container>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="/src/images/BP_2015/IMG_3685.jpeg"
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
						src="/src/images/BP_2015/IMG_3685.jpeg"
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
						src="/src/images/BP_2017/IMG_3686.jpeg"
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
						src="/src/images/BP_2018/IMG_9307.jpeg"
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
						src="/src/images/BP_2019/IMG_2794.jpeg"
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
						src="/src/images/BP_2020/IMG_3690.jpeg"
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
						src="/src/images/BP_2021/IMG_3692.jpeg"
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
						src="/src/images/BP_2022/IMG_3688.jpeg"
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
