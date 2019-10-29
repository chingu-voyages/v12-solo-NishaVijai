import React from 'react';
import { ImageData } from '../ImageData';
export class MainPicScroll extends React.Component {
	render() {
		const scrollImage = this.props.selectedImage;
		return (
			<div className="main-forside-container">
				<div className="main-pic-scroll-images">
					<a className="link" href="https://vaersgo.dk//gastro" target="_blank" rel="noopener  noreferrer">
						<img
							className="main-scroll-image"
							src={require('../../../assets/images/MainPicScroll/Gastro.jpg')}
							alt=""
						/>
					</a>

					{/* <img src={scrollImage.url} alt={scrollImage.altText} /> */}

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
				</div>
			</div>
		);
	}
}
