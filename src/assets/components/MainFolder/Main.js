import React from 'react';
import '../../stylesheets/main.css';

import { MainForside } from '../MainFolder/MainForside';
import { MainPicTwo } from '../MainFolder/MainPicTwo';
import { MainPicThree } from '../MainFolder/MainPicThree';
import { MainMere } from '../MainFolder/MainMere';
import { MainPicScroll } from '../MainFolder/MainPicScroll';
import { MainPicCollection } from '../MainFolder/MainPicCollection';
import { MainMarker } from '../MainFolder/MainMarker';
import { MainPink } from '../MainFolder/MainPink';
import { ImageData } from '../ImageData';
export class Main extends React.Component {
	// state = {
	// 	selectedShoeIndex: 0,
	// 	previewImageIndex: 0
	// };
	// setPreviewImageIndex = (index) => {
	// 	this.setState(() => ({
	// 		previewImageIndex: index
	// 	}));
	// };

	// selectNextShoe = () => {
	// 	this.setState(() => ({
	// 		previewImageIndex: 0
	// 	}));

	// 	if (this.state.selectedShoeIndex >= ImageData.length - 1) {
	// 		this.setState(() => ({
	// 			selectedShoeIndex: 0
	// 		}));
	// 	} else {
	// 		this.setState((prevState) => ({
	// 			selectedShoeIndex: prevState.selectedShoeIndex + 1
	// 		}));
	// 	}
	// };

	// selectPreviousShoe = () => {
	// 	this.setState(() => ({
	// 		previewImageIndex: 0
	// 	}));

	// 	if (this.state.selectedShoeIndex === 0) {
	// 		this.setState(() => ({
	// 			selectedShoeIndex: ImageData.length - 1
	// 		}));
	// 	} else {
	// 		this.setState((prevState) => ({
	// 			selectedShoeIndex: prevState.selectedShoeIndex - 1
	// 		}));
	// 	}
	// };

	render() {
		return (
			<div>
				<div>
					<MainForside />
				</div>

				<div>
					<MainPicTwo />
				</div>

				<div>
					<MainPicThree />
				</div>

				<div>
					<MainMere />
				</div>

				<div>
					{/* <MainPicScroll
						selectedImage={imageData[this.state.selectedShoeIndex].images[this.state.previewImageIndex]}
					/> */}

					{/* <MainPicScroll onNextShoe={this.selectNextShoe} onPreviousShoe={this.selectPreviousShoe} /> */}
					<MainPicScroll />
				</div>

				<div>{/* <MainPicCollection /> */}</div>

				<div>
					<MainMarker />
				</div>

				<div>
					<MainPink />
				</div>
			</div>
		);
	}
}
