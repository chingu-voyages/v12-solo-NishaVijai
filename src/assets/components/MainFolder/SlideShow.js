import React from 'react';

import Gastro from '../../images/MainPicScroll/Gastro.jpg';
import Stelton from '../../images/MainPicScroll/Stelton.jpg';
import Zwilling from '../../images/MainPicScroll/Zwilling.jpg';
import RC from '../../images/MainPicScroll/RC.jpg';

import { Slide } from 'react-slideshow-image';

export class SlideShow extends React.Component {
	render() {
		const slideImages = [ Gastro, Stelton, Zwilling, RC ];

		const properties = {
			duration: 5000,
			transitionDuration: 500,
			infinite: true,
			indicators: true,
			arrows: true,
			onChange: (oldIndex, newIndex) => {
				console.log(`slide transition from ${oldIndex} to ${newIndex}`);
			}
		};
		return (
			<div className="slide-container">
				<Slide {...properties}>
					<div className="each-slide">
						<div style={{ backgroundImage: `url(${slideImages[0]})` }}>{/* <span>Slide 1</span> */}</div>
					</div>
					<div className="each-slide">
						<div style={{ backgroundImage: `url(${slideImages[1]})` }}>{/* <span>Slide 2</span> */}</div>
					</div>
					<div className="each-slide">
						<div style={{ backgroundImage: `url(${slideImages[2]})` }}>{/* <span>Slide 3</span> */}</div>
					</div>
					<div className="each-slide">
						<div style={{ backgroundImage: `url(${slideImages[3]})` }}>{/* <span>Slide 4</span> */}</div>
					</div>

					{/* <a className="link" href="https://vaersgo.dk//gastro" target="_blank" rel="noopener  noreferrer">
						<img
							className="main-scroll-image"
							src={require('../../../assets/images/MainPicScroll/Gastro.jpg')}
							alt=""
						/>
					</a> */}
				</Slide>
			</div>
		);
	}
}
