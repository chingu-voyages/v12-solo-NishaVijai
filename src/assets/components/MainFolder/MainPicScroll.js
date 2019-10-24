import React from 'react';

export class MainPicScroll extends React.Component {
	render() {
		return (
			<div className="main-forside-container">
				<div className="main-pic-scroll-images">
					<a className="link" href="https://vaersgo.dk//gastro" target="_blank" rel="noopener  noreferrer">
						<img
							className="main-scroll-image"
							src={require('../../../assets/images/MainPicScroll/Gastro_1920x555_sort.jpg')}
							alt=""
						/>
					</a>
				</div>
			</div>
		);
	}
}
