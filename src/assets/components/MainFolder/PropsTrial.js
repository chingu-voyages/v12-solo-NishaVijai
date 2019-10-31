import React from 'react';

import Gastro from '../../images/MainPicScroll/Gastro.jpg';
import Stelton from '../../images/MainPicScroll/Stelton.jpg';
import Zwilling from '../../images/MainPicScroll/Zwilling.jpg';
import RC from '../../images/MainPicScroll/RC.jpg';

// import { Slide } from 'react-slideshow-image';

export class PropsTrial extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images: [
				{ id: 0, url: Gastro, altText: 'Gastro Image' },
				{ id: 1, url: Stelton, altText: 'Stelton Image' },
				{ id: 2, url: Zwilling, altText: 'Zwilling Image' },
				{ id: 3, url: RC, altText: 'RC Image' }
			]
			// property: this.state.images[0]
		};
	}

	// nextImage = () => {
	// 	const newIndex = this.state.images.index + 1;
	// 	this.setState({
	// 		property: this.state.images[newIndex]
	// 	});
	// };

	// prevImage = () => {
	// 	const newIndex = this.state.images.index - 1;
	// 	this.setState({
	// 		property: imageData.images[newIndex]
	// 	});
	// };

	render() {
		return (
			<div>
				<div>
					{this.state.images.map((image) => (
						<div>
							{/* <div className="foot-arrow">
								<img
									src="https://img.icons8.com/small/22/000000/long-arrow-left.png"
									onClick={this.props.onPreviousShoe}
									alt="Previous"
								/>

								<img
									src="https://img.icons8.com/small/22/000000/long-arrow-right.png"
									onClick={this.props.onNextShoe}
									alt="Next"
								/>
							</div> */}
							<h4>Image: </h4>
							{image.url}
							<img src={image.url} alt="" />
						</div>
					))}
				</div>
			</div>
		);
	}
}
