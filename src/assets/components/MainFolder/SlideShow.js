import React from 'react';

import Gastro from '../../images/MainPicScroll/Gastro.jpg';
import Stelton from '../../images/MainPicScroll/Stelton.jpg';
import Zwilling from '../../images/MainPicScroll/Zwilling.jpg';
import RC from '../../images/MainPicScroll/RC.jpg';

import { Slide } from 'react-slideshow-image';

export class SlideShow extends React.Component {
	render() {
		const slideImages = [
			{ url: Gastro, href: 'https://vaersgo.dk//gastro' },
			{ url: Stelton, href: 'https://vaersgo.dk//stelton-brand' },
			{ url: Zwilling, href: 'https://vaersgo.dk//zwillingknivguide' },
			{ url: RC, href: 'https://vaersgo.dk//royal-copenhagen-brand' }
		];

		const properties = {
			duration: 5000,
			transitionDuration: 500,
			infinite: true,
			indicators: true,
			arrows: true,
			onChange: (oldIndex, newIndex) => {
				console.log(`slide transition from ${slideImages[0]} to ${slideImages[4]}`);
			}
		};
		return (
			<div className="slide-container">
				<Slide {...properties}>
					<div className="each-slide">
						<a
							className="link"
							href="https://vaersgo.dk//gastro"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img
								className="main-scroll-image"
								src={require('../../../assets/images/MainPicScroll/Gastro.jpg')}
								alt=""
							/>
						</a>
					</div>

					<div className="each-slide">
						<a
							className="link"
							href="https://vaersgo.dk//stelton-brand"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img
								className="main-scroll-image"
								src={require('../../../assets/images/MainPicScroll/Stelton.jpg')}
								alt=""
							/>
						</a>
					</div>

					<div className="each-slide">
						<a
							className="link"
							href="https://vaersgo.dk//zwillingknivguide"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img
								className="main-scroll-image"
								src={require('../../../assets/images/MainPicScroll/Zwilling.jpg')}
								alt=""
							/>
						</a>
					</div>
					<div className="each-slide">
						<a
							className="link"
							href="https://vaersgo.dk//royal-copenhagen-brand"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img
								className="main-scroll-image"
								src={require('../../../assets/images/MainPicScroll/RC.jpg')}
								alt=""
							/>
						</a>
					</div>
				</Slide>
			</div>
		);
	}
}
